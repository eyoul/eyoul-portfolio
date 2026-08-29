export interface ExperienceEntry {
  position: string;
  organization: string;
  dates: string;
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
}

// Intentionally empty: this portfolio focuses on cloud/software engineering
// projects and credentials rather than prior professional experience.
// Add entries here if/when there is tech-focused work history to show.
export const experience: ExperienceEntry[] = [];
