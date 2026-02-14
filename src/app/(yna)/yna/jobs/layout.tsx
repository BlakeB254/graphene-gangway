import { redirect } from "next/navigation";
import { getSession } from "@/lib/session";
import { YnaSidebar } from "@/components/yna/YnaSidebar";
import { YnaMobileNav } from "@/components/yna/YnaMobileNav";
import { YnaHeader } from "@/components/yna/YnaHeader";

export default async function YnaJobsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  if (!session) {
    redirect("/yna/login");
  }

  return (
    <div className="flex min-h-screen bg-dark-deep">
      <YnaSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <YnaHeader title="Job Board" />
        <main className="flex-1 p-4 sm:p-6 lg:p-8 pb-20 lg:pb-8">
          {children}
        </main>
        <YnaMobileNav />
      </div>
    </div>
  );
}
