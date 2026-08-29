export interface SkillGroup {
  category: string;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Cloud & Infrastructure",
    items: ["AWS", "ECS", "ECR", "RDS", "S3", "ALB", "IAM", "CloudWatch"],
  },
  {
    category: "Infrastructure as Code",
    items: ["Terraform"],
  },
  {
    category: "Containers",
    items: ["Docker"],
  },
  {
    category: "CI/CD",
    items: ["GitHub Actions"],
  },
  {
    category: "Backend",
    items: ["Python", "Django", "Django REST Framework", "Celery"],
  },
  {
    category: "Frontend",
    items: ["React", "JavaScript", "HTML", "CSS"],
  },
  {
    category: "Data",
    items: ["PostgreSQL", "Redis"],
  },
  {
    category: "Engineering",
    items: [
      "REST APIs",
      "RBAC",
      "Authentication",
      "Enterprise Architecture",
      "Workflow Systems",
      "Audit Logging",
    ],
  },
];
