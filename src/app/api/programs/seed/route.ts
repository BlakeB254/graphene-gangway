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

    const results: string[] = [];

    // ── YN Academy (Flagship) ──────────────────────────
    if (!(await getProgramBySlug("yn-academy"))) {
      const yna = await createProgram({
        slug: "yn-academy",
        title: "YN Academy",
        tagline: "From the system to the system administrator",
        description:
          "Graphene Gangway's flagship education program providing North Lawndale youth with real-world technology training, mentorship, and career pathways. Choose your track and build your future.",
        icon: "GraduationCap",
        accent_color: "#00F0FF",
        status: "active",
        display_order: 1,
        external_link: "https://yna-portal.vercel.app/",
      });

      await createProgramSection({
        program_id: yna.id,
        section_type: "stats",
        title: "Program Impact",
        content: {
          items: [
            { value: "100", label: "Students Trained", suffix: "+" },
            { value: "6", label: "Course Tracks", suffix: "" },
            { value: "87", label: "Businesses Served", suffix: "+" },
            { value: "5000", label: "Community Target", suffix: "+" },
          ],
        },
        display_order: 0,
      });

      await createProgramSection({
        program_id: yna.id,
        section_type: "cards",
        title: "Course Tracks",
        content: {
          columns: 3,
          items: [
            {
              title: "Software Engineering",
              description:
                "Full-stack web development with HTML, CSS, JavaScript, React, and Next.js. Build real applications and deploy to production.",
              icon: "Code2",
              href: "https://yna-portal.vercel.app/",
              tags: ["Web Dev", "React", "Next.js", "Git"],
              accentColor: "#00F0FF",
            },
            {
              title: "Sports Technology",
              description:
                "Data analytics, performance tracking, and digital media for athletics. Learn to build sports apps and analyze game data.",
              icon: "Trophy",
              href: "https://yna-portal.vercel.app/",
              tags: ["Analytics", "Data Science", "App Dev"],
              accentColor: "#FFD700",
            },
            {
              title: "Digital Media & Design",
              description:
                "Content creation, graphic design, video production, and social media strategy. Build brands and tell stories through technology.",
              icon: "Palette",
              href: "https://yna-portal.vercel.app/",
              tags: ["Design", "Video", "Branding", "Social"],
              accentColor: "#FF6B9D",
            },
            {
              title: "Business & Entrepreneurship",
              description:
                "Digital marketing, e-commerce, client management, and startup fundamentals. Launch your own business with tech skills.",
              icon: "Briefcase",
              href: "https://yna-portal.vercel.app/",
              tags: ["Marketing", "E-commerce", "Startups"],
              accentColor: "#4ADE80",
            },
            {
              title: "AI & Automation",
              description:
                "Introduction to artificial intelligence, prompt engineering, workflow automation, and AI-powered tools for productivity.",
              icon: "Bot",
              href: "https://yna-portal.vercel.app/",
              tags: ["AI Tools", "Prompting", "Automation"],
              accentColor: "#A78BFA",
            },
            {
              title: "IT & Cybersecurity",
              description:
                "Computer hardware, networking, system administration, and security fundamentals. Prepare for industry certifications.",
              icon: "Shield",
              href: "https://yna-portal.vercel.app/",
              tags: ["Networking", "Security", "CompTIA"],
              accentColor: "#F97316",
            },
          ],
        },
        display_order: 1,
      });

      await createProgramSection({
        program_id: yna.id,
        section_type: "timeline",
        title: "How It Works",
        content: {
          items: [
            { title: "Apply", description: "Fill out the application and tell us about your interests", icon: "FileText" },
            { title: "Choose Your Track", description: "Pick the course path that matches your goals", icon: "Compass" },
            { title: "Onboard", description: "Meet your cohort and get set up with tools and resources", icon: "Users" },
            { title: "Learn & Build", description: "Hands-on training with real projects and mentorship", icon: "Hammer" },
            { title: "Launch", description: "Graduate with skills, a portfolio, and career connections", icon: "Rocket" },
          ],
        },
        display_order: 2,
      });

      await createProgramSection({
        program_id: yna.id,
        section_type: "cta",
        content: {
          heading: "Ready to join YN Academy?",
          description: "Applications are open for the next cohort. Choose your track and start your journey in technology today.",
          primaryLabel: "Apply Now",
          primaryHref: "https://yna-portal.vercel.app/",
          secondaryLabel: "Contact Us",
          secondaryHref: "/contact",
        },
        display_order: 3,
      });

      results.push("YN Academy created with course tracks");
    } else {
      results.push("YN Academy already exists (skipped)");
    }

    // ── Community Outreach ──────────────────────────────
    if (!(await getProgramBySlug("community-outreach"))) {
      await createProgram({
        slug: "community-outreach",
        title: "Community Outreach",
        tagline: "Bridging the digital divide in North Lawndale",
        description:
          "Direct community engagement through workshops, tech pop-ups, and partnerships with local organizations. Bringing technology access to where it's needed most.",
        icon: "Heart",
        accent_color: "#FF6B9D",
        status: "active",
        display_order: 2,
        internal_route: "/outreach",
      });
      results.push("Community Outreach created");
    } else {
      results.push("Community Outreach already exists (skipped)");
    }

    // ── Small Business Tech Hub ─────────────────────────
    if (!(await getProgramBySlug("tech-hub"))) {
      await createProgram({
        slug: "tech-hub",
        title: "Small Business Tech Hub",
        tagline: "Technology solutions for local businesses",
        description:
          "Helping North Lawndale small businesses establish their digital presence — websites, branding, automation, and digital marketing at accessible rates.",
        icon: "Store",
        accent_color: "#4ADE80",
        status: "active",
        display_order: 3,
        internal_route: "/services",
      });
      results.push("Small Business Tech Hub created");
    } else {
      results.push("Small Business Tech Hub already exists (skipped)");
    }

    // ── Community Innovation Lab ────────────────────────
    if (!(await getProgramBySlug("innovation-lab"))) {
      await createProgram({
        slug: "innovation-lab",
        title: "Community Innovation Lab",
        tagline: "Build solutions for your community",
        description:
          "A collaborative space where community members work together to design and build technology solutions for local challenges — from neighborhood apps to community platforms.",
        icon: "Lightbulb",
        accent_color: "#FFD700",
        status: "coming_soon",
        display_order: 4,
      });
      results.push("Community Innovation Lab created (coming soon)");
    } else {
      results.push("Community Innovation Lab already exists (skipped)");
    }

    return NextResponse.json({ success: true, results }, { status: 201 });
  } catch (error) {
    console.error("Failed to seed programs:", error);
    return NextResponse.json({ error: "Failed to seed programs" }, { status: 500 });
  }
}
