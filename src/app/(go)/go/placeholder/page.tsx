import Link from "next/link";

export default function GoPlaceholder() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-8">
      <h1 className="font-[family-name:var(--font-display)] text-4xl tracking-wider text-cyan-neon">
        LANDING PAGES
      </h1>
      <p className="text-ice-white/60">Ad landing pages will be built here.</p>
      <Link
        href="/"
        className="rounded-lg border border-cyan-neon/30 px-4 py-2 text-sm text-cyan-neon transition-colors hover:bg-cyan-neon/10"
      >
        &larr; Back to Main Site
      </Link>
    </div>
  );
}
