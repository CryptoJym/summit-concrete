import { fireEvent, render, screen } from "@testing-library/react";
import type { ReactNode } from "react";
import { Header } from "@/components/layout/Header";

vi.mock("next/link", () => ({
  default: ({
    href,
    children,
    ...props
  }: {
    href: string;
    children: ReactNode;
    [key: string]: unknown;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

vi.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

describe("Header mobile menu", () => {
  it("uses an opaque backdrop and closes with Escape", () => {
    render(<Header />);

    fireEvent.click(screen.getByRole("button", { name: /open menu/i }));

    const backdrop = screen.getByRole("button", { name: /close menu overlay/i });
    expect(backdrop.className).toContain("bg-asphalt");
    expect(backdrop.className).not.toContain("bg-asphalt/20");

    fireEvent.keyDown(document, { key: "Escape" });
    expect(
      screen.queryByRole("button", { name: /close menu/i }),
    ).not.toBeInTheDocument();
  });
});
