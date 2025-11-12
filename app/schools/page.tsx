import Link from "next/link";
import { slugify } from "@/utility/slugify";
import { School } from "@/types";

const schools: School[] = [
  { name: "Al Ansar Mission", city: "Cooch Behar", students: 1500 },
  { name: "Al Karim Mission", city: "Cooch Behar", students: 25 },
];

export default function SchoolsPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Schools List</h1>
      <ul className="space-y-2">
        {schools.map((school) => (
          <li key={school.name}>
            <Link
              href={`/schools/${slugify(school.name)}`}
              className="text-blue-600 hover:underline"
            >
              {school.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
