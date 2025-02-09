"use client";
import CodeCard from "./CodeCard";
import { Inconsolata } from "next/font/google";
import { useEffect, useState } from "react";

const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("/data/projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data.projects))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <div className="h-fit flex flex-col items-start">
      <h2
        className={`${inconsolata.className} text-titlecolor text-black text-3xl mb-2`}
      >
        Projets
      </h2>
      <p className="text-justify mb-4 ">Voici une sélection de mes projets</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 self-center w-full px-4">
        {projects.map((project) => (
          <CodeCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
