import { redirect } from "next/navigation";
import Link from "next/link";
import { getSession } from "@/lib/session";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  if (!session || !session.isAdmin) {
    redirect("/login");
  }

  return (
    <div className="fixed inset-0 z-50 flex bg-dark-deep">
      {/* Sidebar */}
      <aside className="flex w-64 flex-col border-r border-dark-mid bg-dark-deep">
        {/* Sidebar Header */}
        <div className="border-b border-dark-mid px-6 py-5">
          <h2 className="font-[family-name:var(--font-display)] text-xl tracking-widest text-cyan-neon">
            ADMIN
          </h2>
          <p className="mt-1 font-[family-name:var(--font-mono)] text-xs text-ice-white/40">
            {session.email}
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 px-3 py-4">
          <Link
            href="/admin"
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-ice-white/70 transition-colors hover:bg-dark-surface hover:text-cyan-neon"
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
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            </svg>
            Dashboard
          </Link>
          <Link
            href="/admin/contacts"
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-ice-white/70 transition-colors hover:bg-dark-surface hover:text-cyan-neon"
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
            Contacts
          </Link>
        </nav>

        {/* Sidebar Footer */}
        <div className="border-t border-dark-mid p-3">
          <Link
            href="/"
            className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-ice-white/50 transition-colors hover:bg-dark-surface hover:text-ice-white"
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
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Site
          </Link>
          <form action="/api/auth/logout" method="POST">
            <button
              type="submit"
              className="mt-1 flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-red-400/70 transition-colors hover:bg-red-400/10 hover:text-red-400"
              onClick={(e) => {
                e.preventDefault();
                fetch("/api/auth/logout", { method: "POST" }).then(() => {
                  window.location.href = "/login";
                });
              }}
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
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              Logout
            </button>
          </form>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto bg-dark-deep p-8">
        {children}
      </main>
    </div>
  );
}
