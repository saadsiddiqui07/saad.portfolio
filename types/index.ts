
interface Project {
  id: number;
  isLive: boolean;
  isWebLive: boolean;
  webURL?: string;
  iOSURL?: string;
  androidURL?: string;
  appURL?: string;
  name: string;
  status: string;
  industry: string;
  techStack: string[];
  contributions: string[];
}
export interface Experience {
  company: string;
  companyURL: string;
  logo?: any;
  role: string;
  startDate: string;
  endDate: string;
  projects?: Project[];
}
