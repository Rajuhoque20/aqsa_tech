import { slugify } from "@/utility/slugify";
import { School } from "@/types";

const schools: School[] = [
  { name: "Al Ansar Mission", city: "Cooch Behar", students: 1500 },
  { name: "Al Karim Mission", city: "Cooch Behar", students: 25 },
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
