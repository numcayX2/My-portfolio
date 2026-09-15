import { profile } from "@/content/portfolio";

export default function SiteFooter() {
  return (
    <footer className="border-t border-ink/15">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-3 px-5 py-8 sm:flex-row sm:items-center sm:justify-between md:px-12 lg:px-16">
        <p className="text-sm text-muted">
          © 2026 {profile.fullName} ({profile.wordmark})
        </p>
        <a
          href="#top"
          className="inline-flex min-h-[44px] items-center text-sm font-medium text-accent underline-offset-4 hover:underline"
        >
          กลับขึ้นด้านบน ↑
        </a>
      </div>
    </footer>
  );
}
