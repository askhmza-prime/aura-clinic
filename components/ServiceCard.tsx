import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  tag?: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
  tag,
}: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="group block bg-white border border-[#E8E0D0] p-7 card-lift transition-all duration-300"
    >
      {/* Icon */}
      <div className="w-12 h-12 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] mb-5 group-hover:bg-[#D4AF37] group-hover:text-white transition-colors duration-300">
        <Icon className="w-5 h-5" />
      </div>

      {/* Tag */}
      {tag && (
        <span className="inline-block text-[9px] tracking-[0.2em] uppercase bg-[#F5ECC7] text-[#b8962e] px-2.5 py-1 mb-3 font-medium">
          {tag}
        </span>
      )}

      {/* Title */}
      <h3 className="font-display text-xl font-medium text-[#333333] mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-sm text-[#777777] leading-relaxed mb-5">
        {description}
      </p>

      {/* CTA */}
      <div className="flex items-center gap-1.5 text-[#D4AF37] text-xs tracking-widest uppercase font-medium group-hover:gap-3 transition-all duration-300">
        Learn More <ArrowRight className="w-3.5 h-3.5" />
      </div>
    </Link>
  );
}
