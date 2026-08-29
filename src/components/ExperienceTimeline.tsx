import type { ExperienceEntry } from "../data/experience";

export default function ExperienceTimeline({ entries }: { entries: ExperienceEntry[] }) {
  return (
    <div className="flex flex-col">
      {entries.map((entry, i) => (
        <div
          key={i}
          className="grid sm:grid-cols-[160px_1fr] gap-3 sm:gap-10 py-8 border-t"
          style={{ borderColor: "var(--color-border)" }}
        >
          <p className="font-mono text-[12px]" style={{ color: "var(--color-text-faint)" }}>
            {entry.dates}
          </p>
          <div>
            <h3 className="font-semibold text-[16px]">{entry.position}</h3>
            <p className="text-[14px] mb-4" style={{ color: "var(--color-accent)" }}>
              {entry.organization}
            </p>

            <ul className="space-y-1.5 mb-4">
              {entry.responsibilities.map((r, idx) => (
                <li
                  key={idx}
                  className="text-[13.5px] leading-relaxed pl-4 relative"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  <span
                    className="absolute left-0 top-[0.6em] h-1 w-1 rounded-full"
                    style={{ backgroundColor: "var(--color-border-strong)" }}
                  />
                  {r}
                </li>
              ))}
            </ul>

            {entry.achievements.length > 0 && (
              <ul className="space-y-1.5 mb-4">
                {entry.achievements.map((a, idx) => (
                  <li
                    key={idx}
                    className="text-[13.5px] leading-relaxed pl-4 relative"
                    style={{ color: "var(--color-text)" }}
                  >
                    <span
                      className="absolute left-0 top-[0.6em] h-1 w-1 rounded-full"
                      style={{ backgroundColor: "var(--color-accent)" }}
                    />
                    {a}
                  </li>
                ))}
              </ul>
            )}

            <div className="flex flex-wrap gap-2">
              {entry.technologies.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
