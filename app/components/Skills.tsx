"use client";

import { Inconsolata } from "next/font/google";
import SkillSection from "./SkillSection";
import { useEffect, useState } from "react";

const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Skills() {
  const [skills, setSkills] = useState<SkillSection[]>([]);

  useEffect(() => {
    fetch("/data/skills.json")
      .then((res) => res.json())
      .then((data) => setSkills(data.skills))
      .catch((error) => console.error("Error fetching skills:", error));
  }, []);

  return (
    <div className="h-fit flex flex-col justify-center items-center mt-10">
      <h2
        className={`${inconsolata.className} text-titlecolor text-black text-3xl mb-2 w-full`}
      >
        Mes compétences 
      </h2>
      <div className="w-11/12 mt-6">
      {skills.map((skill) => (
        <SkillSection
          key={skill.skillsection}
          title={skill.skillsection}
          chips={skill.chips}
        />
      ))}
      </div>
    </div>
  );
}
