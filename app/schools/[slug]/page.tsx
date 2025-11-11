import { slugify } from "@/utility/slugify";
import { School } from "@/types";
import { Metadata } from "next";

const schools: School[] = [
  { name: "Greenwood High", city: "Bangalore", students: 1200 },
  { name: "Delhi Public School", city: "Delhi", students: 1800 },
  { name: "St. Xavier's", city: "Mumbai", students: 1500 },
   {
    name:"Al Karim Mission",city:"Cooch Behar",students:25
  },
];

interface SchoolPageProps {
  params: Promise<{ slug: string }>; // 👈 params is now async
}

export async function generateStaticParams() {
  return schools.map((school) => ({
    slug: slugify(school.name),
  }));
}

// ✅ Must be async + await params
export async function generateMetadata(
  { params }: SchoolPageProps
): Promise<Metadata> {
  const { slug } = await params; // 👈 await params
  const school = schools.find((s) => slugify(s.name) === slug);

  if (!school) {
    return { title: "School Not Found" };
  }

  return {
   title: `${school.name} - ${school.city}`,
  description: `Get complete information about ${school.name} located in ${school.city}. Total students: ${school.students}.`,
  keywords: [`${school.name}`, "school", `${school.city}`, "education"],
  openGraph: {
    title: school.name,
    description: `${school.students} students in ${school.city}`,
    url: `https://aqsatech.in/schools/${slug}`,
    type: "article",
  },
  };
}

// ✅ Also make the component async + await params
export default async function SchoolPage({ params }: SchoolPageProps) {
  const { slug } = await params; // 👈 await params
  const school = schools.find((s) => slugify(s.name) === slug);

  if (!school) {
    return <h1 className="text-xl p-6">School not found</h1>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{school.name}</h1>
      <p className="mt-2">📍 City: {school.city}</p>
      <p>👨‍🎓 Students: {school.students}</p>
    </div>
  );
}
