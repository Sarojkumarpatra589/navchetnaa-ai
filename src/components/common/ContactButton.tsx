import { ArrowUpRight } from "lucide-react";
import { Button } from "./Button";

interface ContactButtonProps {
  label?: string;
  href?: string;
  variant?: "primary" | "accent" | "secondary";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function ContactButton({
  label = "Start Your Project",
  href = "/contact",
  variant = "primary",
  size = "md",
  className,
}: ContactButtonProps) {
  return (
    <Button href={href} variant={variant} size={size} className={className}>
      <span>{label}</span>
      <ArrowUpRight size={17} />
    </Button>
  );
}