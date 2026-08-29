export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verificationUrl?: string;
}

// NOTE: Only list certifications you actually hold.
// Replace placeholders below with your real credential details, or remove
// entries you don't hold.
export const certifications: Certification[] = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "[ADD DATE]",
    credentialId: "[ADD CREDENTIAL ID]",
    verificationUrl: "[ADD VERIFICATION URL]",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "[ADD DATE]",
    credentialId: "[ADD CREDENTIAL ID]",
    verificationUrl: "[ADD VERIFICATION URL]",
  },
];
