import Link from "next/link";

export function MinimalFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-dark-mid/30 bg-dark-deep px-4 py-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 sm:flex-row">
        <p className="text-xs text-ice-white/30">
          &copy; {year} Graphene Gangway
        </p>
        <div className="flex items-center gap-4 text-xs text-ice-white/30">
          <Link href="/privacy" className="hover:text-ice-white/50">Privacy Policy</Link>
          <Link href="/" className="hover:text-ice-white/50">View Full Site</Link>
        </div>
      </div>
    </footer>
  );
}
