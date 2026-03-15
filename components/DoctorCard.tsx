import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

interface DoctorCardProps {
  name: string;
  qualification: string;
  role: string;
  experience: string;
  highlights: string[];
  imageSrc: string;
}

export default function DoctorCard({
  name,
  qualification,
  role,
  experience,
  highlights,
  imageSrc,
}: DoctorCardProps) {
  return (
    <div className="bg-white border border-[#E8E0D0] overflow-hidden card-lift">
      {/* Image */}
      <div className="relative h-72">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-5">
          <div className="bg-[#D4AF37] text-white text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 font-medium inline-block">
            {experience} Experience
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-7">
        <h3 className="font-display text-2xl font-medium text-[#333333]">
          {name}
        </h3>
        <p className="text-[#D4AF37] text-xs tracking-wide mt-1 mb-0.5">
          {role}
        </p>
        <p className="text-[#888888] text-xs mb-5">{qualification}</p>

        <ul className="space-y-2">
          {highlights.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2.5 text-sm text-[#555555]"
            >
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
