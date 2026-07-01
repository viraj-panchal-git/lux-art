import Link from "next/link";
import { type ComponentPropsWithoutRef } from "react";

type ButtonVariant = "primary" | "secondary";

interface ButtonProps extends ComponentPropsWithoutRef<"a"> {
  variant?: ButtonVariant;
  href: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gold text-background border border-gold hover:bg-gold/90 hover:border-gold/90 hover:shadow-[0_4px_24px_-8px_rgba(198,161,91,0.35)]",
  secondary:
    "bg-transparent text-ivory border border-border hover:border-ivory/30 hover:bg-white/[0.03]",
};

export function Button({
  variant = "primary",
  href,
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center px-8 py-4 text-xs uppercase tracking-[0.2em] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] active:scale-[0.98] ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
