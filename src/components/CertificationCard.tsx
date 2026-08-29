import { BadgeCheck, ExternalLink } from "lucide-react";
import type { Certification } from "../data/certifications";

export default function CertificationCard({ cert }: { cert: Certification }) {
  return (
    <div className="card p-6 flex flex-col gap-3">
      <div className="flex items-start justify-between gap-3">
        <div
          className="flex h-9 w-9 items-center justify-center rounded-md shrink-0"
          style={{ backgroundColor: "var(--color-accent-soft)" }}
        >
          <BadgeCheck size={17} style={{ color: "var(--color-accent)" }} />
        </div>
        {cert.verificationUrl && (
          <a
            href={cert.verificationUrl}
            className="text-[11px] font-mono flex items-center gap-1 link-underline shrink-0"
            style={{ color: "var(--color-text-faint)" }}
          >
            Verify <ExternalLink size={11} />
          </a>
        )}
      </div>
      <div>
        <h3 className="font-semibold text-[15px] leading-snug">{cert.name}</h3>
        <p className="text-[13px] mt-1" style={{ color: "var(--color-text-muted)" }}>
          {cert.issuer}
        </p>
      </div>
      <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-[11px] pt-2 border-t" style={{ borderColor: "var(--color-border)", color: "var(--color-text-faint)" }}>
        <span>Issued {cert.date}</span>
        {cert.credentialId && <span>ID: {cert.credentialId}</span>}
      </div>
    </div>
  );
}
