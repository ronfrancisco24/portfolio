import type { ElementType, ReactNode } from "react";
import { useReveal } from "../hooks/useReveal";

interface RevealProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  id?: string;
}

export default function Reveal({
  children,
  className = "",
  as: Tag = "div",
  id,
}: RevealProps) {
  const ref = useReveal<HTMLDivElement>();

  return (
    <Tag ref={ref} id={id} className={`reveal ${className}`}>
      {children}
    </Tag>
  );
}
