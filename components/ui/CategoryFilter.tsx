"use client";

type CategoryFilterProps = {
  categories: string[];
  activeCategory: string;
  onChange: (category: string) => void;
};

export default function CategoryFilter({
  categories,
  activeCategory,
  onChange,
}: CategoryFilterProps) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
      {categories.map((category) => {
        const active = activeCategory === category;

        return (
          <button
            key={category}
            type="button"
            onClick={() => onChange(category)}
            className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm transition-all duration-300 ${
              active
                ? "bg-[#171714] text-white"
                : "border border-[#171714]/10 bg-white/60 text-[#171714]/60 hover:border-[#171714]/20 hover:text-[#171714]"
            }`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}