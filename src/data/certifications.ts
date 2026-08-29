export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verificationUrl?: string;
}

export const certifications: Certification[] = [
  {
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "Expires Jun 2028",
  },
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Expires Jun 2028",
  },
  {
    name: "AWS Academy Graduate – Cloud Architecting",
    issuer: "AWS Training and Certification",
    date: "Apr 2025",
  },
  {
    name: "AWS Educate Machine Learning Foundations",
    issuer: "AWS Training and Certification",
    date: "Aug 2025",
  },
  {
    name: "Software Engineering",
    issuer: "ALX Africa",
    date: "",
    verificationUrl: "https://savanna.alxafrica.com/certificates/sEYCm6nhzx",
  },
  {
    name: "CCNA: Enterprise Networking, Security, and Automation",
    issuer: "Cisco Networking Academy",
    date: "Mar 2023",
  },
  {
    name: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco Networking Academy",
    date: "Dec 2022",
  },
  {
    name: "CCNA: Introduction to Networks",
    issuer: "Cisco Networking Academy",
    date: "May 2022",
  },
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "Jul 2022",
  },
];
