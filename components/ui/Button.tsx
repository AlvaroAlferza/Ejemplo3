"use client";

import { ArrowUpRight } from "lucide-react";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  type?: "button" | "submit";
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  onClick?: () => void;
};

export default function Button({
  children,
  href,
  type = "button",
  variant = "primary",
  className = "",
  onClick,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-300";

  const variants = {
    primary:
      "bg-[#171714] text-[#F7F2E8] hover:bg-[#2A2A25] hover:-translate-y-0.5",
    secondary:
      "bg-[#C86B45] text-white hover:bg-[#B85C38] hover:-translate-y-0.5",
    outline:
      "border border-[#171714]/20 bg-transparent text-[#171714] hover:bg-[#171714] hover:text-white",
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
        <ArrowUpRight size={16} />
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}