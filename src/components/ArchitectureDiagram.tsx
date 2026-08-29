import { Globe, Shield, Boxes, Layers, Server, Cpu, Database, HardDrive, FolderArchive } from "lucide-react";
import ArchNode from "./ArchNode";
import Connector from "./Connector";

export default function ArchitectureDiagram() {
  return (
    <div className="card p-6 sm:p-10">
      <div className="flex flex-col items-center">
        <ArchNode label="Internet" icon={<Globe size={13} />} />
        <Connector />
        <ArchNode
          label="Application Load Balancer"
          icon={<Shield size={13} />}
          description="Routes and balances incoming HTTPS traffic across ECS tasks."
          accent
        />
        <Connector />

        <div
          className="w-full max-w-2xl rounded-lg border-2 border-dashed p-5 sm:p-7"
          style={{ borderColor: "var(--color-border-strong)" }}
        >
          <p className="section-label mb-4 flex items-center gap-2">
            <Boxes size={13} /> AWS ECS
          </p>
          <div className="grid sm:grid-cols-3 gap-3">
            <ArchNode
              label="React Frontend"
              icon={<Layers size={13} />}
              description="Single-page application served to the browser."
              size="sm"
            />
            <ArchNode
              label="Django Backend"
              icon={<Server size={13} />}
              description="REST API handling business logic and authentication."
              size="sm"
            />
            <ArchNode
              label="Celery Worker"
              icon={<Cpu size={13} />}
              description="Processes asynchronous and background tasks."
              size="sm"
            />
          </div>
        </div>

        <Connector />

        <div className="grid grid-cols-1 xs:grid-cols-3 gap-3 w-full max-w-2xl">
          <ArchNode
            label="RDS · PostgreSQL"
            icon={<Database size={13} />}
            description="Managed relational database for case and evidence records."
          />
          <ArchNode
            label="Redis"
            icon={<HardDrive size={13} />}
            description="Caching layer and message broker for Celery."
          />
          <ArchNode
            label="S3"
            icon={<FolderArchive size={13} />}
            description="Object storage for uploaded documents and evidence files."
          />
        </div>
      </div>

      <div className="mt-9 pt-7 border-t" style={{ borderColor: "var(--color-border)" }}>
        <p className="section-label mb-4">Supporting infrastructure</p>
        <div className="flex flex-wrap gap-2.5">
          <ArchNode label="ECR" size="sm" description="Stores versioned Docker images built by CI/CD." />
          <ArchNode label="Terraform" size="sm" description="Defines and provisions all infrastructure as code." />
          <ArchNode label="CloudWatch" size="sm" description="Centralized logs, metrics and alarms." />
          <ArchNode label="IAM" size="sm" description="Least-privilege roles and access policies." />
          <ArchNode label="GitHub Actions" size="sm" description="Builds, tests and deploys on every change." />
        </div>
      </div>
    </div>
  );
}
