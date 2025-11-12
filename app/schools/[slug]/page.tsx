import { slugify } from "@/utility/slugify";
import { School } from "@/types";
import { Metadata } from "next";

const schools: School[] = [
  { name: "Greenwood High", city: "Bangalore", students: 1200 },
  { name: "Delhi Public School", city: "Delhi", students: 1800 },
  { name: "St. Xavier's", city: "Mumbai", students: 1500 },
  { name: "Al Karim Mission", city: "Cooch Behar", students: 25 },
];

interface SchoolPageProps {
  params: Promise<{ slug: string }>; // ✅ async now
}

export async function generateStaticParams() {
  return schools.map((school) => ({
    slug: slugify(school.name),
  }));
}

export async function generateMetadata(
  { params }: SchoolPageProps
): Promise<Metadata> {
  const { slug } = await params; // ✅ await it
  const school = schools.find((s) => slugify(s.name) === slug);

  if (!school) {
    return {
      title: "School Not Found | Aqsa Tech",
      description: "The school you are looking for does not exist.",
    };
  }

  return {
    title: `${school.name} | School in ${school.city} | Aqsa Tech`,
    description: `${school.name} is one of the top schools in ${school.city}, known for its commitment to quality education, discipline, and student growth. Learn more at Aqsa Tech.`,
    keywords: [school.name, "school", school.city, "education"],
    openGraph: {
      title: `${school.name} | School in ${school.city}`,
      description: `${school.name} is one of the top schools in ${school.city}.`,
      url: `https://aqsatech.in/schools/${slug}`,
      type: "article",
    },
    alternates: {
      canonical: `https://aqsatech.in/schools/${slug}`,
    },
  };
}

export default async function SchoolPage({ params }: SchoolPageProps) {
  const { slug } = await params; // ✅ also await here
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
