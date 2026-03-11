import type { Metadata } from "next";
import { SectionWrapper } from "@/components/common/SectionWrapper";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${SITE_CONFIG.name}.`,
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <SectionWrapper className="pt-32 pb-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-8 font-[family-name:var(--font-display)] text-4xl tracking-wider text-cyan-neon text-glow-cyan md:text-5xl">
            PRIVACY POLICY
          </h1>
          <p className="mb-4 text-sm text-ice-white/40">
            Last updated: March 11, 2026
          </p>

          <div className="space-y-8 text-sm leading-relaxed text-ice-white/70">
            <section>
              <h2 className="mb-3 font-[family-name:var(--font-display)] text-xl tracking-wide text-ice-white">
                1. INFORMATION WE COLLECT
              </h2>
              <p>
                We collect information you provide directly, including your name,
                email address, phone number, and any messages you submit through
                our contact and inquiry forms. We also collect usage data through
                cookies and analytics tools (such as Google Analytics and Meta
                Pixel) when configured.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-[family-name:var(--font-display)] text-xl tracking-wide text-ice-white">
                2. HOW WE USE YOUR INFORMATION
              </h2>
              <ul className="list-disc space-y-2 pl-6">
                <li>To respond to your inquiries and provide our services</li>
                <li>To process payments through our payment provider (Stripe)</li>
                <li>To send project updates and service communications</li>
                <li>To improve our website and services</li>
                <li>To comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-3 font-[family-name:var(--font-display)] text-xl tracking-wide text-ice-white">
                3. DATA SHARING
              </h2>
              <p>
                We do not sell your personal information. We may share data with
                third-party service providers (such as Stripe for payments,
                Resend for email, and Neon for data storage) only as necessary
                to deliver our services.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-[family-name:var(--font-display)] text-xl tracking-wide text-ice-white">
                4. COOKIES &amp; TRACKING
              </h2>
              <p>
                We use cookies for session management and may use analytics
                tracking (Google Analytics, Google Tag Manager, Meta Pixel) to
                understand how visitors use our site. You can disable cookies in
                your browser settings.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-[family-name:var(--font-display)] text-xl tracking-wide text-ice-white">
                5. DATA RETENTION
              </h2>
              <p>
                We retain your information for as long as necessary to provide
                our services and comply with legal obligations. You may request
                deletion of your data at any time by contacting us.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-[family-name:var(--font-display)] text-xl tracking-wide text-ice-white">
                6. CONTACT
              </h2>
              <p>
                For questions about this privacy policy, contact us at{" "}
                <a
                  href={`mailto:${SITE_CONFIG.contactEmail}`}
                  className="text-cyan-neon hover:underline"
                >
                  {SITE_CONFIG.contactEmail}
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
