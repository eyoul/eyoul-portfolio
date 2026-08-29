import { Linkedin, Github, Mail, Download, ArrowUpRight } from "lucide-react";
import { site } from "../data/site";

const links = [
  { label: "LinkedIn", href: site.linkedin, icon: Linkedin },
  { label: "GitHub", href: site.github, icon: Github },
  { label: "Email", href: `mailto:${site.email}`, icon: Mail },
  { label: "Resume", href: site.resumeUrl, icon: Download },
];

export default function ContactSection() {
  return (
    <section className="container-page py-20 sm:py-28">
      <div className="card p-9 sm:p-14 relative overflow-hidden">
        <div
          className="absolute -bottom-32 -left-20 h-64 w-64 rounded-full opacity-[0.08] blur-3xl"
          style={{ background: "var(--color-accent)" }}
        />
        <div className="relative z-10 max-w-2xl">
          <p className="eyebrow mb-4">Contact</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-5">
            Let's build something meaningful.
          </h2>
          <p className="text-[15px] leading-relaxed mb-10" style={{ color: "var(--color-text-muted)" }}>
            I'm interested in opportunities involving cloud architecture, AWS,
            DevOps, enterprise software and infrastructure.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {links.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                download={label === "Resume" || undefined}
                className="card flex flex-col gap-3 p-4 hover:border-[var(--color-accent)] transition-colors duration-200 group"
              >
                <div className="flex items-center justify-between">
                  <Icon size={16} style={{ color: "var(--color-text-muted)" }} />
                  <ArrowUpRight
                    size={13}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ color: "var(--color-accent)" }}
                  />
                </div>
                <span className="text-[13px] font-medium">{label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
