import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { brand } from "@/lib/content";

const pushMock = vi.fn();

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push: pushMock }),
}));

describe("QuoteForm submission", () => {
  beforeEach(() => {
    pushMock.mockReset();
    vi.restoreAllMocks();
  });

  it("posts to Formspree and redirects on success", async () => {
    const fetchMock = vi
      .spyOn(global, "fetch")
      .mockResolvedValue({ ok: true } as Response);

    render(<QuoteForm formspreeFormId="abc123" />);

    fireEvent.change(screen.getByLabelText(/company \/ contact name/i), {
      target: { value: "Acme Construction" },
    });
    fireEvent.change(screen.getByLabelText(/project classification/i), {
      target: { value: "industrial" },
    });
    fireEvent.submit(
      screen.getByRole("button", { name: /initiate bid sequence/i }),
    );

    await waitFor(() =>
      expect(fetchMock).toHaveBeenCalledWith(
        "https://formspree.io/f/abc123",
        expect.objectContaining({
          method: "POST",
        }),
      ),
    );
    await waitFor(() => {
      expect(pushMock).toHaveBeenCalledWith("/quote/success");
    });
  });

  it("shows inline phone fallback when submission fails", async () => {
    vi.spyOn(global, "fetch").mockResolvedValue({
      ok: false,
      json: async () => ({ errors: [{ message: "Could not submit" }] }),
    } as Response);

    render(<QuoteForm formspreeFormId="abc123" />);

    fireEvent.change(screen.getByLabelText(/company \/ contact name/i), {
      target: { value: "Acme Construction" },
    });
    fireEvent.change(screen.getByLabelText(/project classification/i), {
      target: { value: "industrial" },
    });
    fireEvent.submit(
      screen.getByRole("button", { name: /initiate bid sequence/i }),
    );

    expect(await screen.findByRole("alert")).toHaveTextContent(
      /could not submit/i,
    );
    const phoneLink = screen.getByRole("link", { name: brand.phone });
    expect(phoneLink).toHaveAttribute("href", "tel:8017356867");
  });

  it("shows a visible warning when Formspree is not configured", () => {
    render(<QuoteForm />);
    expect(screen.getByText(/forms are currently in setup mode/i)).toBeVisible();
  });
});
