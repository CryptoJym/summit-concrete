import { render, screen } from "@testing-library/react";
import { QuoteInfo } from "@/components/sections/QuoteInfo";
import { brand } from "@/lib/content";

describe("QuoteInfo contact overflow handling", () => {
  it("keeps email in readable casing and allows wrapping", () => {
    render(<QuoteInfo />);

    const emailLink = screen.getByRole("link", { name: brand.email });
    expect(emailLink).toHaveTextContent(brand.email);
    expect(emailLink.textContent).toBe(brand.email);
    expect(emailLink.className).toContain("break-all");
  });
});
