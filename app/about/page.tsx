import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Award, Heart, Shield, Microscope } from "lucide-react";
import DoctorCard from "@/components/DoctorCard";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet Dr. Ashwin Charaniya and Dr. Harshita Sharma — the expert dermatologists behind AURA Skin & Hair Clinic, Moradabad.",
};

const doctors = [
  {
    name: "Dr. Ashwin Charaniya",
    qualification: "MBBS, MD — Dermatology, Venereology & Leprosy",
    role: "Founder & Chief Dermatologist",
    experience: "10+",
    highlights: [
      "Advanced Laser & Aesthetic Procedures",
      "Medical Dermatology Specialist",
      "Certified PRP & GFC Therapist",
      "Aesthetic Medicine Expert",
      "Chemical Peels & Skin Resurfacing",
    ],
    imageSrc:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Dr. Harshita Sharma",
    qualification: "MBBS, MD — Dermatology",
    role: "Consultant Dermatologist",
    experience: "5+",
    highlights: [
      "Skin Allergy & Eczema Management",
      "Cosmetic Dermatology",
      "Hair & Scalp Disorders",
      "Pigmentation Treatments",
      "Paediatric Dermatology",
    ],
    imageSrc:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=600&q=80",
  },
];

const values = [
  {
    icon: Microscope,
    title: "Science-Backed Care",
    desc: "Every treatment at AURA is grounded in evidence-based dermatology — no guesswork, only proven protocols.",
  },
  {
    icon: Heart,
    title: "Patient-First Approach",
    desc: "We take time to understand your skin's unique needs before recommending any treatment plan.",
  },
  {
    icon: Shield,
    title: "Safety & Hygiene",
    desc: "Strict clinical standards with sterilised equipment and internationally compliant procedures.",
  },
  {
    icon: Award,
    title: "Premium Results",
    desc: "Our goal is not just treatment — it is transformation. We are committed to results that speak for themselves.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-72 md:h-96 flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1920&q=80"
          alt="AURA Clinic"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-12 w-full">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase">
              Our Story
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-light text-white">
            About <span className="italic">AURA</span>
          </h1>
        </div>
      </section>

      {/* Clinic Story */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-[#D4AF37]" />
                <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase">
                  Our Philosophy
                </span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl font-light text-[#333333] mb-6">
                Where Science Meets{" "}
                <span className="italic">Beauty</span>
              </h2>
              <div className="space-y-4 text-[#555555] text-sm leading-relaxed">
                <p>
                  AURA Skin & Hair Clinic was founded with a single belief —
                  that everyone deserves access to world-class dermatological
                  care, right here in Moradabad.
                </p>
                <p>
                  Under the leadership of Dr. Ashwin Charaniya, our clinic
                  combines cutting-edge technology with a deeply personalized
                  approach. We do not believe in one-size-fits-all treatments.
                  Every patient receives a thorough consultation, a customised
                  treatment plan, and compassionate follow-up care.
                </p>
                <p>
                  From medical dermatology to advanced aesthetic procedures,
                  AURA is equipped to address your skin and hair concerns with
                  precision, safety, and artistry.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-6">
                {[
                  { value: "10+", label: "Years Experience" },
                  { value: "5000+", label: "Patients Treated" },
                  { value: "4.9★", label: "Google Rating" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="font-display text-3xl font-light text-[#D4AF37]">
                      {s.value}
                    </div>
                    <div className="text-xs text-[#888888] mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-[420px]">
              <Image
                src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=800&q=80"
                alt="AURA Clinic Interior"
                fill
                className="object-cover"
              />
              <div className="absolute -bottom-4 -left-4 bg-[#D4AF37] text-white p-5 w-44">
                <div className="font-display text-3xl font-light">10+</div>
                <div className="text-[10px] tracking-[0.2em] uppercase mt-1">
                  Years of Expert Care
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase">
                What We Stand For
              </span>
              <div className="h-px w-8 bg-[#D4AF37]" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-light">
              Our <span className="italic">Values</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white border border-[#E8E0D0] p-7 card-lift"
              >
                <div className="w-11 h-11 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] mb-5">
                  <v.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg font-medium mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-[#777777] leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase">
                Expert Team
              </span>
              <div className="h-px w-8 bg-[#D4AF37]" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-light">
              Meet Our <span className="italic">Doctors</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {doctors.map((doc) => (
              <DoctorCard key={doc.name} {...doc} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#1a1a1a] text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
        <div className="max-w-xl mx-auto px-6">
          <h2 className="font-display text-4xl font-light text-white mb-4">
            Ready to Begin Your{" "}
            <span className="italic text-[#D4AF37]">Skin Journey?</span>
          </h2>
          <p className="text-white/50 text-sm mb-8">
            Book a consultation with our experts today.
          </p>
          <Link href="/contact" className="btn-gold">
            Book Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
