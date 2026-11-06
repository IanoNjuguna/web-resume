interface ProfileItem {
  network: string;
  username: string;
  url: string;
}

interface DataBasics {
  name: string;
  label: string;
  email: string;
  phone: string;
  website: string;
  /** markdown; a short bio shown under the header */
  summary?: string;
  location: {
    location: string;
    postalCode: string;
    city: string;
    countryCode: string;
    region: string;
  };
  profiles: ProfileItem[];
}

interface DataWorkItem {
  company: string;
  position: string;
  summary: string;
  startDate: string;
  endDate: string;
  link?: string;
}

interface DataVolunteerItem {
  organization: string;
  position: string;
  summary: string;
  startDate: string;
  endDate: string;
}

interface DataEducationItem {
  institution: string;
  area: string;
  studyType: string;
  courses: string[];
  startDate: string;
  endDate: string;
}

interface DataSkillsItem {
  name: string;
  keywords: string[];
}

interface DataOpenSourceItem {
  forge: string;
  userRepo: string;
  description: string;
  rawDates?: string;
  /** `null`/unset means show it; `false` hides the entry */
  relevant?: boolean | null;
}

interface DataProjectItem {
  name: string;
  description: string;
  /** optional; not every project is public */
  link?: string;
  rawDates?: string;
}

interface DataPublicationItem {
  title: string;
  description: string;
}

interface ResumeData {
  basics: DataBasics;
  work: DataWorkItem[];
  volunteer: DataVolunteerItem[];
  projects: DataProjectItem[];
  certifications: string[];
  publications: DataPublicationItem[];
  languages: string[];
  education: DataEducationItem[];
  skills: DataSkillsItem[];
}

interface CoverLetterFrontmatter {
  recruiter: string;
  location: string;
  postalCode: string;
  city: string;
  countryCode: string;
  region: string;
  company: string;
}

export type {
  ProfileItem,
  DataBasics,
  DataWorkItem,
  DataVolunteerItem,
  DataEducationItem,
  DataSkillsItem,
  DataOpenSourceItem,
  DataProjectItem,
  DataPublicationItem,
  ResumeData,
  CoverLetterFrontmatter,
};
