import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";
import styles from "./Button.module.css";

type ButtonVariant = "primary" | "accent" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface BaseButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
}

interface LinkButtonProps extends BaseButtonProps {
  href: string;
  external?: boolean;
}

interface ActionButtonProps
  extends BaseButtonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> {
  href?: undefined;
}

export type ButtonProps = LinkButtonProps | ActionButtonProps;

export function Button(props: ButtonProps) {
  const {
    children,
    variant = "primary",
    size = "md",
    fullWidth = false,
    className,
  } = props;

  const classes = cn(
    styles.button,
    styles[variant],
    size === "sm" && styles.sizeSm,
    size === "md" && styles.sizeMd,
    size === "lg" && styles.sizeLg,
    fullWidth && styles.fullWidth,
    className
  );

  if ("href" in props && props.href !== undefined) {
    if (props.external) {
      return (
        <a
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  const { href: _unused, variant: _v, size: _s, fullWidth: _fw, ...buttonAttrs } = props;

  return (
    <button className={classes} {...buttonAttrs}>
      {children}
    </button>
  );
}