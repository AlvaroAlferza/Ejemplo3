import { Sparkles } from "lucide-react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`max-w-3xl ${
        centered ? "mx-auto text-center" : ""
      }`}
    >
      {eyebrow && (
        <div
          className={`mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#C86B45] ${
            centered ? "justify-center" : ""
          }`}
        >
          <Sparkles size={14} />
          {eyebrow}
        </div>
      )}

      <h2 className="font-serif text-4xl leading-tight tracking-tight text-[#171714] sm:text-5xl lg:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-base leading-7 text-[#171714]/60 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}