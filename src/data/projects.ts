export interface Project {
  slug: string;
  name: string;
  subtitle: string;
  problem: string;
  solution: string;
  technology: string[];
  hasCaseStudy: boolean;
  githubUrl?: string;
  primary?: boolean;
}

export const projects: Project[] = [
  {
    slug: "fcms",
    name: "Fraud Case Management System",
    subtitle: "Enterprise Fraud Investigation & Case Management Platform",
    problem:
      "Fraud teams need a single system of record to move a case from intake through investigation, decision, appeal and follow-up — without losing evidence, approvals or audit history along the way.",
    solution:
      "A Django and React platform that models the full case lifecycle: intake, assignment, investigation, evidence handling, approvals, decisions, appeals and reporting, deployed on AWS with infrastructure defined in Terraform.",
    technology: [
      "AWS",
      "ECS",
      "ECR",
      "RDS",
      "S3",
      "ALB",
      "Redis",
      "Terraform",
      "Docker",
      "Django",
      "React",
      "PostgreSQL",
      "Celery",
      "GitHub Actions",
    ],
    hasCaseStudy: true,
    primary: true,
  },
];
