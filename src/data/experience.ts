export interface ExperienceEntry {
  position: string;
  organization: string;
  dates: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
}

// NOTE: Replace these placeholders with your real employment history.
// Nothing here is fabricated — update each field with your actual details.
export const experience: ExperienceEntry[] = [
  {
    position: "[ADD YOUR JOB TITLE]",
    organization: "[ADD YOUR COMPANY]",
    dates: "[ADD DATES]",
    responsibilities: [
      "[ADD YOUR INFORMATION]",
      "[ADD YOUR INFORMATION]",
    ],
    achievements: ["[ADD YOUR INFORMATION]"],
    technologies: ["AWS", "Terraform", "Django", "React"],
  },
];
