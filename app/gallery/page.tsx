import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Before and after treatment results at AURA Skin & Hair Clinic, Moradabad. See real patient transformations.",
};

const cases = [
  {
    category: "Acne Treatment",
    before: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=400&q=80",
    after: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=400&q=80",
    sessions: "4 Sessions",
  },
  {
    category: "Pigmentation",
    before: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80",
    after: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=400&q=80",
    sessions: "3 Sessions",
  },
  {
    category: "PRP Hair Therapy",
    before: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=400&q=80",
    after: "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?auto=format&fit=crop&w=400&q=80",
    sessions: "6 Sessions",
  },
  {
    category: "HydraFacial",
    before: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?auto=format&fit=crop&w=400&q=80",
    after: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=400&q=80",
    sessions: "1 Session",
  },
  {
    category: "Laser Hair Removal",
    before: "https://images.unsplash.com/photo-1598257006626-48b0c252070d?auto=format&fit=crop&w=400&q=80",
    after: "https://images.unsplash.com/photo-1559598467-f8b76c8155d0?auto=format&fit=crop&w=400&q=80",
    sessions: "5 Sessions",
  },
  {
    category: "Chemical Peel",
    before: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=400&q=80",
    after: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=400&q=80",
    sessions: "3 Sessions",
  },
];

const clinicPhotos = [
  "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1588776814546-daab30f310ce?auto=format&fit=crop&w=600&q=80",
];

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-72 md:h-80 flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1920&q=80"
          alt="AURA Gallery"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-12 w-full">
          <div className="flex items-center gap-3 mb-3">
            <div className="h-px w-8 bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase">
              Real Results
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-light text-white">
            Before & <span className="italic">After</span>
          </h1>
        </div>
      </section>

      {/* Disclaimer */}
      <div className="bg-[#FAFAF8] border-b border-[#E8E0D0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <p className="text-xs text-[#888888] text-center">
            Results may vary. All images are of real patients treated at AURA
            Skin & Hair Clinic. Individual results depend on skin type and
            treatment adherence.
          </p>
        </div>
      </div>

      {/* Before / After Grid */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase">
                Patient Transformations
              </span>
              <div className="h-px w-8 bg-[#D4AF37]" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl font-light">
              Treatment <span className="italic">Results</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cases.map((c) => (
              <div
                key={c.category}
                className="border border-[#E8E0D0] overflow-hidden card-lift bg-white"
              >
                {/* Images */}
                <div className="grid grid-cols-2">
                  <div className="relative h-60 overflow-hidden">
                    <Image
                      src={c.before}
                      alt={`Before ${c.category}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-[#333333]/80 text-white text-center text-[10px] tracking-[0.2em] uppercase py-2 font-medium">
                      Before
                    </div>
                  </div>
                  <div className="relative h-60 overflow-hidden">
                    <Image
                      src={c.after}
                      alt={`After ${c.category}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-[#D4AF37] text-white text-center text-[10px] tracking-[0.2em] uppercase py-2 font-medium">
                      After
                    </div>
                  </div>
                </div>

                {/* Label */}
                <div className="px-5 py-4 flex items-center justify-between bg-[#FAFAF8] border-t border-[#E8E0D0]">
                  <span className="text-sm font-medium text-[#333333]">
                    {c.category}
                  </span>
                  <span className="text-[10px] tracking-[0.15em] uppercase text-[#D4AF37] bg-[#F5ECC7] px-2.5 py-1">
                    {c.sessions}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Photos */}
      <section className="section-pad bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-[#D4AF37]" />
              <span className="text-[#D4AF37] text-xs tracking-[0.3em] uppercase">
                Our Space
              </span>
              <div className="h-px w-8 bg-[#D4AF37]" />
            </div>
            <h2 className="font-display text-4xl font-light">
              Inside <span className="italic">AURA</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {clinicPhotos.map((src, i) => (
              <div key={i} className="relative h-52 overflow-hidden group">
                <Image
                  src={src}
                  alt={`AURA Clinic ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
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
            Your Transformation{" "}
            <span className="italic text-[#D4AF37]">Awaits</span>
          </h2>
          <p className="text-white/50 text-sm mb-8">
            Join thousands of patients who have trusted AURA with their skin.
          </p>
          <Link href="/contact" className="btn-gold">
            Book Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
