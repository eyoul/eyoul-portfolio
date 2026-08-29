import { Cloud, GitBranch, Container, Workflow } from "lucide-react";
import Reveal from "../components/Reveal";
import ArchitectureDiagram from "../components/ArchitectureDiagram";
import PipelineDiagram from "../components/PipelineDiagram";
import ArchNode from "../components/ArchNode";
import Connector from "../components/Connector";

export default function Architecture() {
  return (
    <div className="container-page py-20 sm:py-28">
      <Reveal>
        <p className="eyebrow mb-4">Architecture</p>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight max-w-2xl">
          How I design cloud infrastructure
        </h1>
        <p className="mt-5 text-[15px] max-w-xl leading-relaxed" style={{ color: "var(--color-text-muted)" }}>
          Infrastructure defined as code, containerized workloads, and an
          automated path from commit to production.
        </p>
      </Reveal>

      {/* AWS Architecture */}
      <section className="mt-20">
        <Reveal>
          <p className="section-label mb-2 flex items-center gap-2">
            <Cloud size={13} /> AWS Architecture
          </p>
          <h2 className="text-xl font-semibold mb-8">Application &amp; data layer</h2>
        </Reveal>
        <Reveal delay={80}>
          <ArchitectureDiagram />
        </Reveal>
      </section>

      {/* Infrastructure as Code */}
      <section className="mt-20">
        <Reveal>
          <p className="section-label mb-2 flex items-center gap-2">
            <GitBranch size={13} /> Infrastructure as Code
          </p>
          <h2 className="text-xl font-semibold mb-8">Provisioning with Terraform</h2>
        </Reveal>
        <Reveal delay={80}>
          <div className="card p-8 flex flex-col items-center gap-0 max-w-sm">
            <ArchNode label="Terraform" description="Declarative configuration for every AWS resource the platform uses." />
            <Connector />
            <ArchNode label="AWS Infrastructure" accent description="ECS, RDS, S3, ALB, IAM and networking, provisioned and versioned together." />
          </div>
        </Reveal>
      </section>

      {/* Containerization */}
      <section className="mt-20">
        <Reveal>
          <p className="section-label mb-2 flex items-center gap-2">
            <Container size={13} /> Containerization
          </p>
          <h2 className="text-xl font-semibold mb-8">From image to running service</h2>
        </Reveal>
        <Reveal delay={80}>
          <div className="card p-8 flex flex-col items-center gap-0 max-w-sm">
            <ArchNode label="Docker" description="Application is packaged into a portable container image." />
            <Connector />
            <ArchNode label="ECR" description="Image is stored in a private, versioned registry." />
            <Connector />
            <ArchNode label="ECS" accent description="Registry image is deployed and run as a managed service." />
          </div>
        </Reveal>
      </section>

      {/* CI/CD */}
      <section className="mt-20">
        <Reveal>
          <p className="section-label mb-2 flex items-center gap-2">
            <Workflow size={13} /> CI/CD
          </p>
          <h2 className="text-xl font-semibold mb-8">Commit to production</h2>
        </Reveal>
        <Reveal delay={80}>
          <PipelineDiagram />
        </Reveal>
      </section>
    </div>
  );
}
