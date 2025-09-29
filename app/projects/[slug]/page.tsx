import { notFound } from "next/navigation";
import allprojects from "@/lib/allprojects.json";  
import { Projects } from "@/components/Projects";

export default async function page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = (await params) as { slug: string };
  const project = allprojects.find((p) => p.slug === slug);

  if (!project) notFound();

  return (
    <main className="min-h-screen bg-white text-black py-16 px-6 md:px-12">
      <Projects project={project} />
    </main>
  );
}
