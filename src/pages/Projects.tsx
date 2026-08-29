import ProjectCard from "../components/ProjectCard";
import Reveal from "../components/Reveal";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <div className="container-page py-20 sm:py-28">
      <Reveal>
        <p className="eyebrow mb-4">Work</p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight max-w-2xl">
          Projects &amp; engineering work
        </h1>
        <p className="mt-5 text-[15px] max-w-xl leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
          A curated set of systems I've designed and built — spanning cloud
          infrastructure, backend architecture and application engineering.
        </p>
      </Reveal>

      <div className="mt-14 flex flex-col gap-6">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 80}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
