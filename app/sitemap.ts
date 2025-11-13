import { slugify } from "@/utility/slugify";
import { schools } from "@/constant";

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
