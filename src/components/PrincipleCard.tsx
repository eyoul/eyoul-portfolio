import type { LucideIcon } from "lucide-react";

interface PrincipleCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function PrincipleCard({ icon: Icon, title, description }: PrincipleCardProps) {
  return (
    <div className="card p-6 h-full transition-colors duration-200 hover:border-[var(--color-border-strong)]">
      <div
        className="flex h-9 w-9 items-center justify-center rounded-md mb-5"
        style={{ backgroundColor: "var(--color-accent-soft)" }}
      >
        <Icon size={17} style={{ color: "var(--color-accent)" }} />
      </div>
      <h3 className="font-semibold text-[15px] mb-2">{title}</h3>
      <p className="text-[13.5px] leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
        {description}
      </p>
    </div>
  );
}
