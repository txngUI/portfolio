"use client";
import CodeCard from "./CodeCard";
import { Inconsolata } from "next/font/google";
import { useEffect, useState } from "react";
import PrototypeCard from "./PrototypeCard";

const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [codes, setCodes] = useState<Project[]>([]);
  const [prototypes, setPrototypes] = useState<Project[]>([]);
  const [selected, setSelected] = useState<Project[]>([]);
  const [current, setCurrent] = useState<string>("projects");

  useEffect(() => {
    Promise.all([
      fetch("/data/projects.json").then((res) => res.json()),
      fetch("/data/codes.json").then((res) => res.json()),
      fetch("/data/prototypes.json").then((res) => res.json()),
    ])
      .then(([projectsData, codesData, prototypesData]) => {
        setProjects(projectsData.projects);
        setCodes(codesData.codes);
        setPrototypes(prototypesData.prototypes);
        setSelected(projectsData.projects); // Initialisation correcte
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="h-fit flex flex-col items-start">
      <h2
        className={`${inconsolata.className} text-titlecolor text-black text-3xl mb-2`}
      >
        Projets
      </h2>
      <p className="text-justify mb-4">Voici une sélection de mes projets</p>
      <div className="flex justify-evenly w-full mb-4">
        <button
          onClick={() => {
            setSelected(projects);
            setCurrent("projects");
          }}
          className={`${
            current === "projects" ? "bg-bordercolor border-none" : ""
          } flex items-center px-2 py-1 border-[1px] border-bordercolor rounded-md bg-background hover:bg-bordercolor hover:border-background transition-colors`}
        >
          Projets
        </button>
        <button
          onClick={() => {
            setSelected(codes);
            setCurrent("codes");
          }}
          className={`${
            current === "codes" ? "bg-bordercolor border-none" : ""
          } flex items-center px-2 py-1 border-[1px] border-bordercolor rounded-md bg-background hover:bg-bordercolor hover:border-background transition-colors`}
        >
          Codes
        </button>
        <button
          onClick={() => {
            setSelected(prototypes);
            setCurrent("prototypes");
          }}
          className={`${
            current === "prototypes" ? "bg-bordercolor border-none" : ""
          } flex items-center px-2 py-1 border-[1px] border-bordercolor rounded-md bg-background hover:bg-bordercolor hover:border-background transition-colors`}
        >
          Prototypes
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 self-center w-full px-4">
        {selected.map((project) =>
          project.type === "prototype" ? (
            <PrototypeCard key={project.id} project={project} />
          ) : (
            <CodeCard key={project.id} project={project} />
          )
        )}
      </div>
    </div>
  );
}
