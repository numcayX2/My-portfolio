import Link from "next/link";
import { navLinks, profile } from "@/content/portfolio";

function NavList({ compact = false }: { compact?: boolean }) {
  return (
    <ul className={`flex ${compact ? "gap-2" : "gap-8"}`}>
      {navLinks.map((link) => (
        <li key={link.href}>
          <a
            href={link.href}
            className={`inline-flex min-h-[44px] items-center text-[15px] font-medium underline-offset-4 hover:underline ${
              compact ? "shrink-0 whitespace-nowrap px-2" : ""
            }`}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function SiteHeader() {
  return (
    <header
      className="site-header sticky top-0 z-50 overflow-hidden border-b border-ink/15 bg-background"
    >
      <div id="scroll-progress" aria-hidden="true" className="scroll-progress" />
      <div className="nav-foreground relative z-10 mx-auto flex max-w-[1280px] items-center justify-between px-5 md:px-12 lg:px-16">
        <Link
          href="/"
          aria-label="Nam — กลับขึ้นด้านบนของหน้าแรก"
          className="inline-flex min-h-[44px] items-center text-xl font-extrabold tracking-tight"
        >
          {profile.wordmark}
        </Link>
        <nav aria-label="หลัก" className="hidden md:block">
          <NavList />
        </nav>
      </div>
      <nav
        aria-label="หลัก (มือถือ)"
        className="nav-foreground relative z-10 border-t border-ink/10 md:hidden"
      >
        <div className="overflow-x-auto px-3">
          <NavList compact />
        </div>
      </nav>
    </header>
  );
}
