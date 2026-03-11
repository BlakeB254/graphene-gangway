import Link from "next/link";

export function MinimalFooter() {
  return (
    <footer className="border-t border-dark-mid/30 bg-dark-deep py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-xs text-ice-white/30">
          &copy; 2026 Graphene Gangway
        </p>
        <div className="flex items-center gap-6">
          <Link
            href="/privacy"
            className="text-xs text-ice-white/30 transition-colors hover:text-ice-white/60"
          >
            Privacy Policy
          </Link>
          <Link
            href="/"
            className="text-xs text-ice-white/40 transition-colors hover:text-cyan-neon"
          >
            Visit Full Site &rarr;
          </Link>
        </div>
      </div>
    </footer>
  );
}
