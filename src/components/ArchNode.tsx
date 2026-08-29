import { useState, type ReactNode } from "react";

interface ArchNodeProps {
  label: string;
  description?: string;
  icon?: ReactNode;
  accent?: boolean;
  size?: "sm" | "md";
}

export default function ArchNode({
  label,
  description,
  icon,
  accent = false,
  size = "md",
}: ArchNodeProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      <button
        type="button"
        className={`flex items-center gap-2 rounded-md border font-mono transition-all duration-200 ${
          size === "sm" ? "text-[11px] px-2.5 py-1.5" : "text-[12px] px-3.5 py-2.5"
        }`}
        style={{
          borderColor: hovered ? "var(--color-accent)" : accent ? "var(--color-border-strong)" : "var(--color-border)",
          backgroundColor: hovered ? "var(--color-accent-soft)" : "var(--color-surface)",
          color: hovered ? "var(--color-accent)" : "var(--color-text)",
          cursor: description ? "help" : "default",
        }}
        aria-describedby={description ? `${label}-desc` : undefined}
      >
        {icon}
        {label}
      </button>
      {description && hovered && (
        <div
          id={`${label}-desc`}
          role="tooltip"
          className="absolute left-1/2 top-full z-20 mt-2 w-48 -translate-x-1/2 rounded-md border p-2.5 text-[11px] leading-relaxed shadow-xl"
          style={{
            backgroundColor: "var(--color-surface-2)",
            borderColor: "var(--color-border-strong)",
            color: "var(--color-text-muted)",
          }}
        >
          {description}
        </div>
      )}
    </div>
  );
}
