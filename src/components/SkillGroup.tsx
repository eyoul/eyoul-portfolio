import type { SkillGroup as SkillGroupType } from "../data/skills";

export default function SkillGroup({ category, items }: SkillGroupType) {
  return (
    <div className="py-5 border-b" style={{ borderColor: "var(--color-border)" }}>
      <div className="grid sm:grid-cols-[220px_1fr] gap-3 sm:gap-8">
        <p className="section-label pt-0.5">{category}</p>
        <div className="flex flex-wrap gap-2">
          {items.map((item) => (
            <span key={item} className="tag">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
