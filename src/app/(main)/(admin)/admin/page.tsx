import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-[family-name:var(--font-display)] text-4xl tracking-wider text-cyan-neon">
          ADMIN DASHBOARD
        </h1>
        <p className="mt-2 text-sm text-ice-white/50">
          Graphene Gangway management portal
        </p>
      </div>

      {/* Stats Cards */}
      <div className="mb-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Contact Submissions */}
        <div className="corner-frame rounded-xl border border-dark-mid bg-dark-surface p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-ice-white/50">
              Contact Submissions
            </h3>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-neon/10">
              <svg
                className="h-4 w-4 text-cyan-neon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
          </div>
          <p className="font-[family-name:var(--font-display)] text-3xl text-ice-white">
            --
          </p>
          <p className="mt-1 text-xs text-ice-white/40">Total submissions</p>
        </div>

        {/* Site Statistics */}
        <div className="corner-frame rounded-xl border border-dark-mid bg-dark-surface p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-ice-white/50">
              Site Statistics
            </h3>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-neon/10">
              <svg
                className="h-4 w-4 text-cyan-neon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
          </div>
          <p className="font-[family-name:var(--font-display)] text-3xl text-ice-white">
            --
          </p>
          <p className="mt-1 text-xs text-ice-white/40">
            Analytics coming soon
          </p>
        </div>

        {/* Active Sessions */}
        <div className="corner-frame rounded-xl border border-dark-mid bg-dark-surface p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-widest text-ice-white/50">
              Active Sessions
            </h3>
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-neon/10">
              <svg
                className="h-4 w-4 text-cyan-neon"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
                />
              </svg>
            </div>
          </div>
          <p className="font-[family-name:var(--font-display)] text-3xl text-ice-white">
            --
          </p>
          <p className="mt-1 text-xs text-ice-white/40">
            Session tracking coming soon
          </p>
        </div>
      </div>

      {/* Quick Links */}
      <div className="rounded-xl border border-dark-mid bg-dark-surface p-6">
        <h2 className="mb-4 font-[family-name:var(--font-display)] text-xl tracking-wider text-ice-white">
          QUICK LINKS
        </h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/admin/contacts"
            className="flex items-center gap-3 rounded-lg border border-dark-mid bg-dark-deep px-4 py-3 text-sm text-ice-white/70 transition-all hover:border-cyan-neon/30 hover:text-cyan-neon"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            View Contact Submissions
          </Link>
          <Link
            href="/"
            className="flex items-center gap-3 rounded-lg border border-dark-mid bg-dark-deep px-4 py-3 text-sm text-ice-white/70 transition-all hover:border-cyan-neon/30 hover:text-cyan-neon"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            View Live Site
          </Link>
        </div>
      </div>
    </div>
  );
}
