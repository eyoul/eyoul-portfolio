import { Cloud, Github, Linkedin, Mail, Download } from "lucide-react";
import { site } from "../data/site";

export default function Footer() {
  return (
    <footer className="border-t" style={{ borderColor: "var(--color-border)" }}>
      <div className="container-page py-14 grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span
              className="flex h-7 w-7 items-center justify-center rounded"
              style={{ backgroundColor: "var(--color-surface-2)", border: "1px solid var(--color-border)" }}
            >
              <Cloud size={15} style={{ color: "var(--color-accent)" }} />
            </span>
            <span className="font-semibold">{site.name}</span>
          </div>
          <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
            {site.role}
          </p>
          <p className="font-mono text-xs mt-2" style={{ color: "var(--color-text-faint)" }}>
            AWS · Terraform · Docker · Django · React
          </p>
        </div>

        <div>
          <p className="section-label mb-3">Connect</p>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a href={site.linkedin} className="inline-flex items-center gap-2 link-underline" style={{ color: "var(--color-text-muted)" }}>
                <Linkedin size={14} /> LinkedIn
              </a>
            </li>
            <li>
              <a href={site.github} className="inline-flex items-center gap-2 link-underline" style={{ color: "var(--color-text-muted)" }}>
                <Github size={14} /> GitHub
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 link-underline" style={{ color: "var(--color-text-muted)" }}>
                <Mail size={14} /> Email
              </a>
            </li>
          </ul>
        </div>

        <div>
          <p className="section-label mb-3">Resume</p>
          <a href={site.resumeUrl} download className="inline-flex items-center gap-2 text-sm link-underline" style={{ color: "var(--color-text-muted)" }}>
            <Download size={14} /> Download Resume
          </a>
        </div>
      </div>

      <div className="border-t" style={{ borderColor: "var(--color-border)" }}>
        <div className="container-page py-5 flex flex-col sm:flex-row justify-between gap-2 text-xs" style={{ color: "var(--color-text-faint)" }}>
          <span>© {site.year} {site.name}. All rights reserved.</span>
          <span className="font-mono">Designed &amp; built with React · TypeScript · Tailwind</span>
        </div>
      </div>
    </footer>
  );
}
