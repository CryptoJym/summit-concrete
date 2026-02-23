import fs from "node:fs";
import path from "node:path";
import { navigation } from "@/lib/content";

const appDir = path.resolve(__dirname);

describe("Public routes", () => {
  it("keeps user-facing nav labels and links", () => {
    expect(navigation.slice(0, 4)).toEqual([
      { href: "/", label: "Home" },
      { href: "/services", label: "Services" },
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
    ]);
  });

  it("includes concrete pages for services, about, and contact", () => {
    expect(fs.existsSync(path.join(appDir, "services/page.tsx"))).toBe(true);
    expect(fs.existsSync(path.join(appDir, "about/page.tsx"))).toBe(true);
    expect(fs.existsSync(path.join(appDir, "contact/page.tsx"))).toBe(true);
  });
});
