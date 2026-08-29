import { Link } from "react-router-dom";
import { ArrowRight, Github } from "lucide-react";
import type { Project } from "../data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="card p-7 sm:p-9">
      <p className="section-label mb-3">Selected Project</p>
      <h3 className="text-2xl sm:text-[1.7rem] font-bold tracking-tight mb-2">
        {project.name}
      </h3>
      <p className="text-[14.5px] mb-4" style={{ color: "var(--color-accent)" }}>
        {project.subtitle}
      </p>
      <p className="text-[14.5px] leading-relaxed max-w-2xl mb-6" style={{ color: "var(--color-text-muted)" }}>
        {project.solution}
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        {project.technology.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {project.hasCaseStudy && (
          <Link to={`/projects/${project.slug}`} className="btn-primary">
            Explore Case Study
            <ArrowRight size={15} />
          </Link>
        )}
        {project.githubUrl && (
          <a href={project.githubUrl} className="btn-secondary">
            <Github size={15} />
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}
