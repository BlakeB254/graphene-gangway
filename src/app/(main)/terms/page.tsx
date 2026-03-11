import type { Metadata } from "next";
import { SectionWrapper } from "@/components/common/SectionWrapper";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of service for ${SITE_CONFIG.name}.`,
};

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <SectionWrapper className="pt-32 pb-20">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-8 font-[family-name:var(--font-display)] text-4xl tracking-wider text-cyan-neon text-glow-cyan md:text-5xl">
            TERMS OF SERVICE
          </h1>
          <p className="mb-4 text-sm text-ice-white/40">
            Last updated: March 11, 2026
          </p>

          <div className="space-y-8 text-sm leading-relaxed text-ice-white/70">
            <section>
              <h2 className="mb-3 font-[family-name:var(--font-display)] text-xl tracking-wide text-ice-white">
                1. SERVICES
              </h2>
              <p>
                Graphene Gangway provides digital services including brand
                design, web development, business planning, content automation,
                and AI solutions. All services are subject to these terms and
                any additional agreements made in writing.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-[family-name:var(--font-display)] text-xl tracking-wide text-ice-white">
                2. PAYMENTS
              </h2>
              <p>
                Payments are processed securely through Stripe. Prices are as
                listed at the time of purchase. Launch packages may include
                payment plan options as described on our pricing page. All fees
                are non-refundable once work has begun, except as covered by our
                Performance Guarantee.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-[family-name:var(--font-display)] text-xl tracking-wide text-ice-white">
                3. PERFORMANCE GUARANTEE
              </h2>
              <p>
                For qualifying launch packages, we agree on measurable
                performance targets at project kickoff. If those targets are not
                met within six months, we will continue brand automation
                services for an additional six months at no charge, up to
                $12,000 in value. Specific terms are documented in each
                project&apos;s statement of work.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-[family-name:var(--font-display)] text-xl tracking-wide text-ice-white">
                4. OWNERSHIP &amp; DELIVERABLES
              </h2>
              <p>
                Upon full payment, you own all deliverables including code,
                designs, content, and domain registrations. We retain the right
                to showcase completed work in our portfolio unless otherwise
                agreed.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-[family-name:var(--font-display)] text-xl tracking-wide text-ice-white">
                5. SUPPORT PERIOD
              </h2>
              <p>
                Launch packages include a support period (typically six months)
                covering bug fixes, minor content updates, security patches, and
                performance monitoring. Major redesigns or new features are
                quoted separately.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-[family-name:var(--font-display)] text-xl tracking-wide text-ice-white">
                6. LIMITATION OF LIABILITY
              </h2>
              <p>
                Graphene Gangway&apos;s total liability shall not exceed the
                amount paid for the specific service in question. We are not
                liable for indirect, incidental, or consequential damages.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-[family-name:var(--font-display)] text-xl tracking-wide text-ice-white">
                7. GOVERNING LAW
              </h2>
              <p>
                These terms are governed by the laws of the State of Illinois.
                Any disputes shall be resolved in the courts of Cook County,
                Illinois.
              </p>
            </section>

            <section>
              <h2 className="mb-3 font-[family-name:var(--font-display)] text-xl tracking-wide text-ice-white">
                8. CONTACT
              </h2>
              <p>
                For questions about these terms, contact us at{" "}
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
