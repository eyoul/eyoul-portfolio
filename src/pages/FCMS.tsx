import { Github, ArrowUpRight, Lock, KeyRound, FileCheck, ShieldAlert } from "lucide-react";
import Reveal from "../components/Reveal";
import ArchitectureDiagram from "../components/ArchitectureDiagram";
import PipelineDiagram from "../components/PipelineDiagram";
import { projects } from "../data/projects";

const workflow = [
  { step: "Intake", desc: "A new fraud case is logged with source details and supporting documentation." },
  { step: "Assignment", desc: "The case is routed to an investigator based on type and workload." },
  { step: "Investigation", desc: "The investigator gathers evidence and records findings against the case." },
  { step: "Evidence Management", desc: "Supporting files are attached, versioned and stored securely." },
  { step: "Approvals", desc: "Findings move through a defined approval chain before a decision is recorded." },
  { step: "Decision", desc: "A resolution is logged: substantiated, unsubstantiated, or referred onward." },
  { step: "Appeals", desc: "A decision can be appealed and re-reviewed through a separate workflow." },
  { step: "Follow-up & Analytics", desc: "Closed cases feed reporting and trend analysis across the case portfolio." },
];

const challenges = [
  {
    title: "Modeling a multi-stage workflow",
    desc: "Cases move through intake, investigation, approval, decision and appeal — each with different permissions and valid state transitions. The data model and API needed to enforce those transitions explicitly rather than leaving them to the frontend.",
  },
  {
    title: "Evidence and document handling",
    desc: "Investigation evidence is uploaded, versioned and linked to specific cases and findings, backed by S3 with access scoped to the case's assigned investigators.",
  },
  {
    title: "Background processing",
    desc: "Notifications, report generation and long-running analysis run asynchronously through Celery and Redis so the request/response cycle stays fast.",
  },
  {
    title: "Auditability",
    desc: "Every state change, approval and decision is recorded as an immutable audit entry, since investigations need a defensible history of what happened and when.",
  },
];

const security = [
  { icon: KeyRound, title: "Authentication & RBAC", desc: "Role-based access control scopes what each user can view, edit or approve." },
  { icon: FileCheck, title: "Audit Trails", desc: "State changes, approvals and decisions are logged as immutable audit records." },
  { icon: Lock, title: "Least-Privilege IAM", desc: "AWS IAM roles are scoped per service, following least-privilege principles." },
  { icon: ShieldAlert, title: "Secure Evidence Storage", desc: "Case evidence is stored in access-controlled S3 buckets, isolated by case." },
];

export default function FCMS() {
  const project = projects.find((p) => p.slug === "fcms")!;

  return (
    <div>
      <div className="container-page pt-20 pb-16 sm:pt-28 sm:pb-20">
        <Reveal>
          <p className="eyebrow mb-4">Case Study</p>
          <h1 className="text-3xl sm:text-[2.6rem] font-bold tracking-tight leading-tight max-w-3xl">
            {project.name}
          </h1>
          <p className="mt-4 text-[16px] max-w-2xl" style={{ color: "var(--color-accent)" }}>
            {project.subtitle}
          </p>
          <p className="mt-5 text-[15px] leading-relaxed max-w-2xl" style={{ color: "var(--color-text-muted)" }}>
            {project.problem}
          </p>

          <div className="flex flex-wrap gap-2 mt-8">
            {project.technology.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>

          {project.githubUrl && (
            <a href={project.githubUrl} className="btn-secondary mt-8">
              <Github size={15} />
              View on GitHub
            </a>
          )}
        </Reveal>
      </div>

      {/* Business Problem */}
      <section className="container-page pb-20 sm:pb-24">
        <Reveal>
          <div className="grid lg:grid-cols-[280px_1fr] gap-10">
            <p className="section-label">01 — Business Problem</p>
            <div className="max-w-2xl space-y-4 text-[15px] leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
              <p>
                Fraud investigation teams handle cases that touch intake,
                investigation, evidence, approvals, reporting, audit trails,
                follow-up and analytics. When those steps live in spreadsheets,
                email threads and shared drives, cases lose context, evidence
                goes untracked, and there's no defensible record of who
                approved what and when.
              </p>
              <p>
                A centralized case management system gives every case a
                single source of truth: one place to track status, evidence,
                approvals and outcomes, with a full audit history behind it.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Solution */}
      <section className="container-page pb-20 sm:pb-24">
        <Reveal>
          <div className="grid lg:grid-cols-[280px_1fr] gap-10">
            <p className="section-label">02 — Solution</p>
            <p className="max-w-2xl text-[15px] leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
              {project.solution}
            </p>
          </div>
        </Reveal>
      </section>

      {/* Architecture */}
      <section className="container-page pb-20 sm:pb-24">
        <Reveal>
          <p className="section-label mb-8">03 — Architecture</p>
        </Reveal>
        <Reveal delay={80}>
          <ArchitectureDiagram />
        </Reveal>
      </section>

      {/* Technology Stack */}
      <section className="container-page pb-20 sm:pb-24">
        <Reveal>
          <div className="grid lg:grid-cols-[280px_1fr] gap-10">
            <p className="section-label">04 — Technology Stack</p>
            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-5 max-w-2xl">
              <div>
                <p className="font-mono text-[11px] mb-2" style={{ color: "var(--color-text-faint)" }}>CLOUD</p>
                <p className="text-[14px]" style={{ color: "var(--color-text-muted)" }}>AWS · ECS · ECR · RDS · S3 · ALB</p>
              </div>
              <div>
                <p className="font-mono text-[11px] mb-2" style={{ color: "var(--color-text-faint)" }}>INFRASTRUCTURE</p>
                <p className="text-[14px]" style={{ color: "var(--color-text-muted)" }}>Terraform · Docker · GitHub Actions</p>
              </div>
              <div>
                <p className="font-mono text-[11px] mb-2" style={{ color: "var(--color-text-faint)" }}>BACKEND</p>
                <p className="text-[14px]" style={{ color: "var(--color-text-muted)" }}>Django · Django REST Framework · Celery</p>
              </div>
              <div>
                <p className="font-mono text-[11px] mb-2" style={{ color: "var(--color-text-faint)" }}>FRONTEND &amp; DATA</p>
                <p className="text-[14px]" style={{ color: "var(--color-text-muted)" }}>React · PostgreSQL · Redis</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* Workflow */}
      <section className="container-page pb-20 sm:pb-24">
        <Reveal>
          <p className="section-label mb-8">05 — Workflow</p>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-4">
          {workflow.map((w, i) => (
            <Reveal key={w.step} delay={i * 50}>
              <div className="card p-5 flex gap-4">
                <span className="font-mono text-[12px] pt-0.5" style={{ color: "var(--color-accent)" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="font-semibold text-[14px] mb-1">{w.step}</p>
                  <p className="text-[13px] leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                    {w.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Engineering Challenges */}
      <section className="container-page pb-20 sm:pb-24">
        <Reveal>
          <p className="section-label mb-8">06 — Engineering Challenges</p>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-4">
          {challenges.map((c, i) => (
            <Reveal key={c.title} delay={i * 60}>
              <div className="card p-6">
                <p className="font-semibold text-[14.5px] mb-2">{c.title}</p>
                <p className="text-[13.5px] leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                  {c.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Cloud Infrastructure recap + CI/CD */}
      <section className="container-page pb-20 sm:pb-24">
        <Reveal>
          <p className="section-label mb-8">07 — CI/CD</p>
        </Reveal>
        <Reveal delay={80}>
          <PipelineDiagram />
        </Reveal>
      </section>

      {/* Security */}
      <section className="container-page pb-20 sm:pb-24">
        <Reveal>
          <p className="section-label mb-8">08 — Security</p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {security.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <div className="card p-6 h-full">
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-md mb-4"
                  style={{ backgroundColor: "var(--color-accent-soft)" }}
                >
                  <s.icon size={16} style={{ color: "var(--color-accent)" }} />
                </div>
                <p className="font-semibold text-[13.5px] mb-2">{s.title}</p>
                <p className="text-[12.5px] leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
                  {s.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Results / Impact */}
      <section className="container-page pb-24 sm:pb-32">
        <Reveal>
          <div className="grid lg:grid-cols-[280px_1fr] gap-10">
            <p className="section-label">09 — Technical Outcome</p>
            <div className="max-w-2xl space-y-4 text-[15px] leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
              <p>
                The result is a working case management platform with a clear
                separation between frontend, API and background processing
                layers, deployed on containerized AWS infrastructure defined
                entirely in Terraform and shipped through an automated
                GitHub Actions pipeline.
              </p>
              <p>
                The system supports the full case lifecycle — intake through
                investigation, approvals, decision, appeal and analytics —
                with role-based access and an audit trail behind every state
                change.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-14 flex flex-wrap gap-4">
            {project.githubUrl ? (
              <a href={project.githubUrl} className="btn-primary">
                View Source on GitHub
                <ArrowUpRight size={15} />
              </a>
            ) : (
              <p className="font-mono text-[12px]" style={{ color: "var(--color-text-faint)" }}>
                [ADD YOUR INFORMATION — GitHub link if the repository is public]
              </p>
            )}
          </div>
        </Reveal>
      </section>
    </div>
  );
}
