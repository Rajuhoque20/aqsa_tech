import { slugify } from "@/utility/slugify";
import { Metadata } from "next";
import AllPages from "./allPages";
import { schools } from "@/constant";




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
    title: `${school.name} | Educational Institute in ${school.city}`,
    description: `${school.name} is one of the top educational institute in ${school.city}, known for its commitment to quality education, discipline, and student growth. Learn more.`,
    keywords: [school.name, "school", school.city, "education"],
    icons: {
      icon: "/ansar_fav.ico",
    },
    openGraph: {
      title: `${school.name} | School in ${school.city}`,
      description: `${school.name} is one of the top schools in ${school.city}.`,
      url: `https://aqsatech.in/schools/${slug}`,
      type: "article",
      images: [
    {
      url: "/ansar_opengraph.png",   // must be absolute path or CDN
      width: 1200,
      height: 630,
      alt: `${school.name} banner`,
    },
  ],
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
    <div className="flex flex-col h-max overflow-y-auto overflow-x-hidden w-full min-h-screen">
       <AllPages school={school}/>
    </div>
  );
}
