import { slugify } from "@/utility/slugify";
import { School } from "@/types";

const schools: School[] = [
  { name: "Greenwood High", city: "Bangalore", students: 1200 },
  { name: "Delhi Public School", city: "Delhi", students: 1800 },
  { name: "St. Xavier's", city: "Mumbai", students: 1500 },
];

export default function sitemap() {
  const baseUrl = "https://aqsatech.in";

  const staticRoutes = [
    "",
    "/schools",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  const dynamicRoutes = schools.map((school) => ({
    url: `${baseUrl}/schools/${slugify(school.name)}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...dynamicRoutes];
}
