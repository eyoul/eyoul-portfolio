import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, GitBranch, Compass, Eye } from "lucide-react";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import SkillGroup from "../components/SkillGroup";
import PrincipleCard from "../components/PrincipleCard";
import ArchitectureDiagram from "../components/ArchitectureDiagram";
import ExperienceTimeline from "../components/ExperienceTimeline";
import CertificationCard from "../components/CertificationCard";
import ContactSection from "../components/ContactSection";
import Reveal from "../components/Reveal";
import { projects } from "../data/projects";
import { skillGroups } from "../data/skills";
import { experience } from "../data/experience";
import { certifications } from "../data/certifications";

const principles = [
  {
    icon: ShieldCheck,
    title: "Security First",
    description: "Least privilege, authentication, authorization and auditability.",
  },
  {
    icon: GitBranch,
    title: "Infrastructure as Code",
    description: "Reproducible and version-controlled infrastructure.",
  },
  {
    icon: Compass,
    title: "Architecture Before Code",
    description:
      "Understand business requirements, boundaries, data flow and security before implementation.",
  },
  {
    icon: Eye,
    title: "Observability",
    description:
      "Logs, monitoring and operational visibility are part of the system, not an afterthought.",
  },
];

export default function Home() {
  return (
    <>
      <Hero />

      <section className="container-page pb-24 sm:pb-32">
        <Reveal>
          <ProjectCard project={projects[0]} />
        </Reveal>
      </section>

      <section id="capabilities" className="container-page pb-24 sm:pb-32">
        <Reveal>
          <p className="eyebrow mb-3">Engineering Capabilities</p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-10 max-w-xl">
            A full-stack, cloud-native toolset
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <div>
            {skillGroups.map((group) => (
              <SkillGroup key={group.category} {...group} />
            ))}
          </div>
        </Reveal>
      </section>

      <section className="container-page pb-24 sm:pb-32">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <p className="eyebrow mb-3">Architecture</p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight max-w-xl">
                How the systems are put together
              </h2>
            </div>
            <Link to="/architecture" className="btn-secondary">
              View Architecture
              <ArrowRight size={15} />
            </Link>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <ArchitectureDiagram />
        </Reveal>
      </section>

      <section className="container-page pb-24 sm:pb-32">
        <Reveal>
          <p className="eyebrow mb-3">How I Engineer Systems</p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-10 max-w-xl">
            Engineering Principles
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
              <PrincipleCard {...p} />
            </Reveal>
          ))}
        </div>
      </section>

      <section id="about" className="container-page pb-24 sm:pb-32">
        <Reveal>
          <div className="grid lg:grid-cols-[280px_1fr] gap-10">
            <p className="eyebrow">About</p>
            <div className="max-w-2xl space-y-4 text-[15px] leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
              <p>
                I'm a cloud and software engineer focused on building secure,
                scalable enterprise systems.
              </p>
              <p>
                My work combines AWS cloud architecture, infrastructure
                automation, backend engineering and modern web applications.
                I work primarily with AWS, Terraform, Docker, Python, Django,
                React and PostgreSQL.
              </p>
              <p>
                My project work includes designing and building an enterprise
                Fraud Case Management System covering case intake,
                investigation workflows, evidence management, approvals,
                reporting, audit trails and analytics, and AuditGuard, a
                retrieval-augmented chatbot that answers audit and compliance
                questions from policy documents with cited sources.
              </p>
              <p>
                I enjoy solving complex business problems through
                well-structured software architecture and cloud
                infrastructure.
              </p>
              <Link to="/about" className="inline-flex items-center gap-1.5 font-medium link-underline" style={{ color: "var(--color-text)" }}>
                More about me
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>

      {experience.length > 0 && (
        <section id="experience" className="container-page pb-24 sm:pb-32">
          <Reveal>
            <p className="eyebrow mb-3">Experience</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight max-w-xl">
              Where I've worked
            </h2>
          </Reveal>
          <ExperienceTimeline entries={experience} />
        </section>
      )}

      <section id="certifications" className="container-page pb-24 sm:pb-32">
        <Reveal>
          <p className="eyebrow mb-3">Certifications</p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight mb-10 max-w-xl">
            Credentials
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-4">
          {certifications.map((cert, i) => (
            <Reveal key={cert.name} delay={i * 60}>
              <CertificationCard cert={cert} />
            </Reveal>
          ))}
        </div>
      </section>

      <ContactSection />
    </>
  );
}
