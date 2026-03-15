import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Droplets, Sparkles, Sun, Layers, Zap, Circle } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: "Skin Treatments",
  description:
    "Advanced skin treatments at AURA Skin & Hair Clinic Moradabad — Acne, HydraFacial, Chemical Peels, Pigmentation and more.",
};

const treatments = [
  {
    icon: Sparkles,
    title: "Acne Treatment",
    description:
      "Medical-grade protocols targeting acne at its root — reducing active breakouts, preventing recurrence, and fading scars with precision.",
    href: "/contact",
    tag: "Most Requested",
  },
  {
    icon: Droplets,
    title: "HydraFacial",
    description:
      "A multi-step facial that cleanses, exfoliates, extracts, and infuses your skin with intense hydration and antioxidants in one session.",
    href: "/contact",
    tag: "Signature Treatment",
  },
  {
    icon: Layers,
    title: "Chemical Peels",
    description:
      "Customised peels — superficial to deep — to resurface skin, reduce pigmentation, smooth texture, and reveal a brighter complexion.",
    href: "/contact",
  },
  {
    icon: Sun,
    title: "Pigmentation Treatment",
    description:
      "Targeted therapies for melasma, dark spots, sun damage, and uneven skin tone using lasers, peels, and depigmenting agents.",
    href: "/contact",
  },
  {
    icon: Zap,
    title: "Laser Skin Resurfacing",
    description:
      "Fractional laser therapy to reduce fine lines, acne scars, enlarged pores, and restore youthful, smooth skin texture.",
    href: "/contact",
  },
  {
    icon: Circle,
    title: "Mole & Wart Removal",
    description:
      "Safe, precise removal of moles, skin tags, warts, and other benign skin growths using advanced laser and radio-frequency techniques.",
    href: "/contact",
  },
];

const process = [
  { step: "01", title: "Consultation", desc: "A thorough skin analysis and discussion of your concerns and goals." },
  { step: "02", title: "Custom Plan", desc: "A personalised treatment plan designed specifically for your skin type." },
  { step: "03", title: "Treatment", desc: "Procedure performed with precision using advanced clinical equipment." },
  { step: "04", title: "Follow-Up", desc: "Post-treatment care guidance and follow-up sessions as needed." },
];

export default function SkinTreatmentsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-72 md:h-96 flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1920&q=80"
          alt="Skin Treatments"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-12 w-full">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase">
              Services
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-light text-white">
            Skin <span className="italic">Treatments</span>
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase">
                Our Skin Services
              </span>
            </div>
            <h2 className="font-display text-4xl font-light text-[#333333] mb-4">
              Advanced Care for{" "}
              <span className="italic">Every Skin Concern</span>
            </h2>
            <p className="text-[#777777] text-sm leading-relaxed">
              At AURA, our skin treatments are built on dermatological science
              and delivered with a luxury experience. Whether you're dealing
              with acne, pigmentation, or simply want to refresh your skin —
              we have the right solution for you.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((t) => (
              <ServiceCard key={t.title} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-pad bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase">
                How It Works
              </span>
              <div className="h-px w-8 bg-[#D4AF37]" />
            </div>
            <h2 className="font-display text-4xl font-light">
              Our <span className="italic">Process</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p) => (
              <div key={p.step} className="relative">
                <div className="font-display text-6xl font-light text-[#D4AF37]/20 mb-3">
                  {p.step}
                </div>
                <h3 className="font-display text-xl font-medium mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-[#777777] leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1a1a1a] text-center relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
        <div className="max-w-xl mx-auto px-6">
          <h2 className="font-display text-4xl font-light text-white mb-4">
            Book Your <span className="italic text-[#D4AF37]">Skin Consultation</span>
          </h2>
          <p className="text-white/50 text-sm mb-8">
            Let our dermatologists design the perfect treatment plan for your skin.
          </p>
          <Link href="/contact" className="btn-gold">
            Book Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
