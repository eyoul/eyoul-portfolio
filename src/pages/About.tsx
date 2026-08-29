import Reveal from "../components/Reveal";
import SkillGroup from "../components/SkillGroup";
import ExperienceTimeline from "../components/ExperienceTimeline";
import CertificationCard from "../components/CertificationCard";
import { skillGroups } from "../data/skills";
import { experience } from "../data/experience";
import { certifications } from "../data/certifications";
import { education } from "../data/education";

export default function About() {
  return (
    <div className="container-page py-20 sm:py-28">
      <Reveal>
        <p className="eyebrow mb-4">About</p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight max-w-2xl">
          Cloud &amp; Software Engineer
        </h1>
        <div className="mt-6 max-w-2xl space-y-4 text-[15px] leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
          <p>
            I'm a cloud and software engineer focused on building secure,
            scalable enterprise systems.
          </p>
          <p>
            My work combines AWS cloud architecture, infrastructure
            automation, backend engineering and modern web applications. I
            work primarily with AWS, Terraform, Docker, Python, Django,
            React and PostgreSQL.
          </p>
          <p>
            My project work includes designing and building an enterprise
            Fraud Case Management System covering case intake, investigation
            workflows, evidence management, approvals, reporting, audit
            trails and analytics, and AuditGuard, a retrieval-augmented
            chatbot that answers audit and compliance questions from policy
            documents with cited sources.
          </p>
          <p>
            I enjoy solving complex business problems through well-structured
            software architecture and cloud infrastructure.
          </p>
        </div>
      </Reveal>

      <section id="skills" className="mt-20">
        <Reveal>
          <p className="eyebrow mb-3">Skills</p>
          <h2 className="text-2xl font-bold tracking-tight mb-10">Technical capabilities</h2>
        </Reveal>
        <Reveal delay={80}>
          <div>
            {skillGroups.map((group) => (
              <SkillGroup key={group.category} {...group} />
            ))}
          </div>
        </Reveal>
      </section>

      {experience.length > 0 && (
        <section className="mt-20">
          <Reveal>
            <p className="eyebrow mb-3">Experience</p>
            <h2 className="text-2xl font-bold tracking-tight">Where I've worked</h2>
          </Reveal>
          <ExperienceTimeline entries={experience} />
        </section>
      )}

      <section className="mt-20">
        <Reveal>
          <p className="eyebrow mb-3">Education</p>
          <h2 className="text-2xl font-bold tracking-tight mb-8">Academic background</h2>
        </Reveal>
        <div className="flex flex-col">
          {education.map((edu, i) => (
            <Reveal key={edu.degree} delay={i * 60}>
              <div className="grid sm:grid-cols-[160px_1fr] gap-3 sm:gap-10 py-6 border-t" style={{ borderColor: "var(--color-border)" }}>
                <p className="font-mono text-[12px]" style={{ color: "var(--color-text-faint)" }}>
                  {edu.date}
                </p>
                <div>
                  <p className="font-semibold text-[15px]">{edu.degree}</p>
                  <p className="text-[13.5px] mt-1" style={{ color: "var(--color-text-muted)" }}>
                    {edu.institution}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <Reveal>
          <p className="eyebrow mb-3">Certifications</p>
          <h2 className="text-2xl font-bold tracking-tight mb-10">Credentials</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-4">
          {certifications.map((cert, i) => (
            <Reveal key={cert.name} delay={i * 60}>
              <CertificationCard cert={cert} />
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
