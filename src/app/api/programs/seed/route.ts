import { NextRequest, NextResponse } from "next/server";
import { createProgram, createProgramSection, getProgramBySlug } from "@/lib/programs";
import { initializePrograms, initializeProgramSections } from "@/lib/db";
import { validateSession } from "@/lib/auth";
import { AUTH_CONFIG } from "@/lib/shared/constants";

export async function POST(request: NextRequest) {
  const sessionToken = request.cookies.get(AUTH_CONFIG.SESSION_COOKIE_NAME)?.value;
  if (!sessionToken) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const session = await validateSession(sessionToken);
  if (!session?.isAdmin) return NextResponse.json({ error: "Forbidden" }, { status: 403 });

  try {
    await initializePrograms();
    await initializeProgramSections();

    const existing = await getProgramBySlug("yn-academy");
    if (existing) {
      return NextResponse.json({ message: "YN Academy already exists", program: existing });
    }

    const program = await createProgram({
      slug: "yn-academy",
      title: "YN Academy",
      tagline: "Youth technology education bridging the digital divide",
      description: "YN Academy is Graphene Gangway's flagship education program, providing North Lawndale youth with real-world technology training, mentorship, and career pathways in web development, AI, and digital media.",
      icon: "GraduationCap",
      status: "active",
      display_order: 1,
      internal_route: "/yna",
    });

    await createProgramSection({
      program_id: program.id,
      section_type: "stats",
      title: "Program Impact",
      content: {
        items: [
          { value: "100", label: "Students Trained", suffix: "+" },
          { value: "87", label: "Businesses Served", suffix: "+" },
          { value: "4", label: "Active Programs", suffix: "+" },
          { value: "5000", label: "Community Target", suffix: "+" },
        ],
      },
      display_order: 0,
    });

    await createProgramSection({
      program_id: program.id,
      section_type: "rich_text",
      title: "What You'll Learn",
      content: {
        html: "<ul><li><strong>Web Development</strong> — HTML, CSS, JavaScript, React, and Next.js</li><li><strong>Digital Media</strong> — Content creation, social media strategy, and brand building</li><li><strong>AI & Automation</strong> — Introduction to AI tools, prompt engineering, and workflow automation</li><li><strong>Business Skills</strong> — Entrepreneurship, client communication, and project management</li></ul>",
      },
      display_order: 1,
    });

    await createProgramSection({
      program_id: program.id,
      section_type: "timeline",
      title: "How It Works",
      content: {
        items: [
          { title: "Apply", description: "Fill out the application form and tell us about yourself", icon: "FileText" },
          { title: "Onboard", description: "Meet your cohort and get set up with tools and resources", icon: "Users" },
          { title: "Learn", description: "Hands-on training with real projects and mentorship", icon: "BookOpen" },
          { title: "Build", description: "Work on real client projects and build your portfolio", icon: "Hammer" },
          { title: "Launch", description: "Graduate with skills, a portfolio, and career connections", icon: "Rocket" },
        ],
      },
      display_order: 2,
    });

    await createProgramSection({
      program_id: program.id,
      section_type: "cta",
      title: undefined,
      content: {
        heading: "Ready to join YN Academy?",
        description: "Applications are open for the next cohort. Start your journey in technology today.",
        primaryLabel: "Apply Now",
        primaryHref: "/yna",
        secondaryLabel: "Learn More",
        secondaryHref: "/contact",
      },
      display_order: 3,
    });

    return NextResponse.json({ success: true, program }, { status: 201 });
  } catch (error) {
    console.error("Failed to seed YN Academy:", error);
    return NextResponse.json({ error: "Failed to seed program" }, { status: 500 });
  }
}
