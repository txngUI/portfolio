"use client";

import { useParamsUniversityStore } from "@/lib/store";
import { useRouter } from "next/navigation";

type Skill = {
  id: number;
  ability: string;
  name: string;
  year: number[];
};

export default function SwitchSkill() {
  const { academicYear, skill, setSkill } = useParamsUniversityStore();

  const router = useRouter();

  const skills: Skill[] = [
    {
      id: 1,
      ability: "Compétence 1",
      name: "Compétence 1 : Réaliser un développement d'application",
      year: [1, 2, 3],
    },
    {
      id: 2,
      ability: "Compétence 2",
      name: "Compétence 2 : Optimiser des applications informatiques",
      year: [1, 2, 3],
    },
    {
      id: 3,
      ability: "Compétence 3",
      name: "Compétence 3 : Administrer des systèmes informatiques communicants complexes",
      year: [1, 2],
    },
    {
      id: 4,
      ability: "Compétence 4",
      name: "Compétence 4 : Gérer des données de l’information",
      year: [1, 2],
    },
    {
      id: 5,
      ability: "Compétence 5",
      name: "Compétence 5 : Conduire un projet",
      year: [1, 2],
    },
    {
      id: 6,
      ability: "Compétence 6",
      name: "Compétence 6 : Travailler dans une équipe informatique",
      year: [1, 2, 3],
    },
    {
      id: 7,
      ability: "Compétence 7",
      name: "Compétence 7 : Culture Générale",
      year: [1, 2, 3],
    },
  ];

  return (
    <div className="w-full flex justify-between items-center mt-8">
      {skills.map(
        (e) =>
          e.year.includes(academicYear) && (
            <button
              key={e.id}
              onClick={() => {
                setSkill(e.id);
                router.refresh();
              }}
              className={`flex items-center w-fit h-fit text-sm px-4 py-2 border-[1px] border-bordercolor rounded-md bg-background hover:bg-bordercolor hover:border-background transition-colors ${
                skill === e.id ? "bg-bordercolor border-none" : ""
              }`}
            >
              {e.ability}
            </button>
          )
      )}
    </div>
  );
}
