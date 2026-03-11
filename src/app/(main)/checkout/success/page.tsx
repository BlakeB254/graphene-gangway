import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import { SectionWrapper } from "@/components/common/SectionWrapper";

export const metadata: Metadata = {
  title: "Payment Successful | Graphene Gangway",
  description: "Your payment was successful. Welcome aboard!",
};

export default function CheckoutSuccessPage() {
  return (
    <div className="min-h-screen">
      <SectionWrapper className="pt-32 pb-20">
        <div className="mx-auto max-w-lg text-center">
          <CheckCircle className="mx-auto mb-6 h-16 w-16 text-brand-success" />
          <h1 className="font-[family-name:var(--font-display)] text-4xl tracking-wider text-cyan-neon text-glow-cyan md:text-5xl">
            YOU&apos;RE IN!
          </h1>
          <p className="mx-auto mt-6 max-w-md text-lg text-ice-white/70">
            Payment received. We&apos;ll send you a confirmation email with next
            steps within 24 hours.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 rounded-lg bg-cyan-neon px-6 py-3 font-[family-name:var(--font-display)] tracking-wider text-dark-deep transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]"
            >
              Back to Home
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-cyan-neon/30 px-6 py-3 font-[family-name:var(--font-display)] tracking-wider text-cyan-neon transition-colors hover:bg-cyan-neon/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
