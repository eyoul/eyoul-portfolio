import { Users, Shield, Server, Database, Layers, HardDrive } from "lucide-react";
import Connector from "./Connector";

const nodeBase =
  "flex items-center gap-2 rounded-md border font-mono text-[11px] px-3 py-2";

export default function HeroArchitecture() {
  return (
    <div
      className="relative card p-6 sm:p-8 overflow-hidden"
      aria-hidden="true"
    >
      <div
        className="absolute -top-24 -right-24 h-56 w-56 rounded-full opacity-[0.12] blur-3xl"
        style={{ background: "var(--color-accent)" }}
      />
      <p className="section-label mb-6">Request path</p>

      <div className="flex flex-col items-center relative z-10">
        <div
          className={nodeBase}
          style={{ borderColor: "var(--color-border-strong)", backgroundColor: "var(--color-surface-2)" }}
        >
          <Users size={13} style={{ color: "var(--color-text-muted)" }} />
          Users
        </div>

        <Connector height={22} />

        <div
          className={nodeBase}
          style={{ borderColor: "var(--color-accent)", backgroundColor: "var(--color-accent-soft)", color: "var(--color-accent)" }}
        >
          <Shield size={13} />
          Application Load Balancer
        </div>

        <Connector height={22} />

        <div className="grid grid-cols-2 gap-3 w-full max-w-xs">
          <div className={`${nodeBase} justify-center`} style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-surface)" }}>
            <Layers size={13} style={{ color: "var(--color-blue)" }} />
            React
          </div>
          <div className={`${nodeBase} justify-center`} style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-surface)" }}>
            <Server size={13} style={{ color: "var(--color-blue)" }} />
            Django
          </div>
        </div>

        <Connector height={22} />

        <div className="grid grid-cols-3 gap-2 w-full max-w-xs">
          {[
            { label: "RDS", icon: Database },
            { label: "Redis", icon: HardDrive },
            { label: "S3", icon: HardDrive },
          ].map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-1.5 rounded-md border py-2.5 font-mono text-[10.5px]"
              style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-surface)", color: "var(--color-text-muted)" }}
            >
              <Icon size={13} />
              {label}
            </div>
          ))}
        </div>
      </div>

      <p className="section-label mt-7 pt-5 border-t" style={{ borderColor: "var(--color-border)" }}>
        AWS · ECS · Terraform-managed
      </p>
    </div>
  );
}
