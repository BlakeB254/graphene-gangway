"use client";

import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";

const testimonials = [
  {
    authorName: "Marcus Williams",
    authorRole: "Owner, MW Barbershop",
    quote:
      "Graphene Gangway built my website and set up my social media in less than two weeks. I went from zero online presence to booking clients through my site. The brand kit alone was worth every penny.",
    rating: 5,
  },
  {
    authorName: "Keisha Johnson",
    authorRole: "Founder, KJ Naturals",
    quote:
      "The Brand Automations service completely changed my business. I went from posting once a week to having content across 5 platforms every single day. My sales tripled in the first quarter.",
    rating: 5,
  },
  {
    authorName: "David Chen",
    authorRole: "CEO, Chen Construction",
    quote:
      "The AI Knowledge Base they built for us knows everything about our business. My team uses it daily for estimates, compliance checks, and client communications. It's like having an extra employee.",
    rating: 5,
  },
  {
    authorName: "Angela Torres",
    authorRole: "Director, Lawndale Youth Center",
    quote:
      "YN Academy has been transformational for our community. The kids are learning real skills and building real projects. Three of our graduates already have tech internships.",
    rating: 5,
  },
];

export function HomeTestimonials() {
  return (
    <section className="bg-dark-surface/30 py-24 md:py-32">
      <TestimonialCarousel
        title="What Our Clients Say"
        testimonials={testimonials}
      />
    </section>
  );
}
