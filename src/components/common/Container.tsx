import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import styles from "./Container.module.css";

interface ContainerProps {
  children: ReactNode;
  narrow?: boolean;
  className?: string;
}

export function Container({ children, narrow = false, className }: ContainerProps) {
  return (
    <div className={cn(styles.container, narrow && styles.narrow, className)}>
      {children}
    </div>
  );
}