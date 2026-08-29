import { Github, Cog, Package, Boxes, Container, Rocket, ChevronRight } from "lucide-react";

const stages = [
  { label: "GitHub", icon: Github, desc: "Code is pushed to the repository." },
  { label: "GitHub Actions", icon: Cog, desc: "Workflow runs tests and lint checks." },
  { label: "Docker Build", icon: Package, desc: "Application image is built." },
  { label: "Amazon ECR", icon: Boxes, desc: "Image is pushed to the container registry." },
  { label: "Amazon ECS", icon: Container, desc: "Service is updated with the new image." },
  { label: "Production", icon: Rocket, desc: "Traffic is served from the new deployment." },
];

export default function PipelineDiagram() {
  return (
    <div className="card p-6 sm:p-8 overflow-x-auto">
      <div className="flex items-stretch gap-2 sm:gap-3 min-w-[720px] sm:min-w-0">
        {stages.map((stage, i) => (
          <div key={stage.label} className="flex items-stretch flex-1">
            <div
              className="flex flex-col gap-3 rounded-lg border p-4 flex-1 transition-colors duration-200 hover:border-[var(--color-accent)]"
              style={{ borderColor: "var(--color-border)", backgroundColor: "var(--color-surface)" }}
            >
              <div
                className="flex h-8 w-8 items-center justify-center rounded-md"
                style={{ backgroundColor: "var(--color-surface-2)" }}
              >
                <stage.icon size={15} style={{ color: "var(--color-accent)" }} />
              </div>
              <div>
                <p className="font-mono text-[12px] font-medium">{stage.label}</p>
                <p className="text-[11.5px] leading-snug mt-1.5" style={{ color: "var(--color-text-muted)" }}>
                  {stage.desc}
                </p>
              </div>
            </div>
            {i < stages.length - 1 && (
              <div className="flex items-center px-1.5">
                <ChevronRight size={16} style={{ color: "var(--color-text-faint)" }} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
