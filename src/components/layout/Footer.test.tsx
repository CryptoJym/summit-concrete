import { render, screen } from "@testing-library/react";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { brand } from "@/lib/content";

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

describe("Footer layout", () => {
  it("adds breathing room and wraps long contact strings", () => {
    render(<Footer />);

    const footer = screen.getByRole("contentinfo");
    expect(footer.className).toContain("px-6");

    const emailLink = screen.getByRole("link", { name: brand.email });
    expect(emailLink.className).toContain("break-all");
  });
});
