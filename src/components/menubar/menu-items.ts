export interface MenuItem {
  label: string;
  route: string;
  icon: string; 
}

export const menuItems: MenuItem[] = [
  { label: "Overview", route: "/overview", icon: "overview-icon" },
  { label: "Post a Job", route: "/post-job", icon: "post-job-icon" },
  { label: "Search CV", route: "/search-cv", icon: "search-cv-icon" },
  { label: "My Jobs", route: "/my-jobs", icon: "my-jobs-icon" },
  { label: "My Searches", route: "/my-searches", icon: "my-searches-icon" },
  { label: "My Candidates", route: "/my-candidates", icon: "my-candidates-icon" },
  { label: "Saved CVs", route: "/saved-cvs", icon: "saved-cvs-icon" },
  { label: "Screened", route: "/screened", icon: "screened-icon" },
  { label: "Interviewed", route: "/interviewed", icon: "interviewed-icon" },
  { label: "Billing & Invoices", route: "/billing-invoices", icon: "billing-invoices-icon" },
  { label: "Settings", route: "/settings", icon: "settings-icon" },
  { label: "Support", route: "/support", icon: "support-icon" },
];
