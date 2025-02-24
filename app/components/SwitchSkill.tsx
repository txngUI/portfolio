"use client";

import { useParamsUniversityStore } from "@/lib/store";
import { useRouter } from "next/navigation";
import abilitiesJson from "@/public/data/abilities.json";
import { useEffect, useState } from "react";

export default function SwitchSkill({
  academicYear,
  skill,
}: {
  academicYear: number;
  skill: number;
}) {
  const { setSkill } = useParamsUniversityStore();
  const router = useRouter();
  const abilities = abilitiesJson.abilities;

  // Stocker localement la compétence pour éviter des problèmes de rendu
  const [selectedSkill, setSelectedSkill] = useState(skill);

  useEffect(() => {
    // Vérifier si la compétence actuelle est valide pour l'année sélectionnée
    const isSkillValid = abilities.some(
      (e) => e.id === selectedSkill && e.year.includes(academicYear)
    );

    if (!isSkillValid) {
      setSelectedSkill(1); // Mettre à jour l'état local
      setSkill(1); // Mettre à jour le store global
    }
  }, [academicYear, selectedSkill, setSkill, abilities]);

  return (
    <div className="w-5/6">
      <div className="w-full flex justify-evenly items-center mt-6">
        {abilities.map(
          (e) =>
            e.year.includes(academicYear) && (
              <button
                key={e.id}
                onClick={() => {
                  setSelectedSkill(e.id); // Met à jour localement
                  setSkill(e.id); // Met à jour dans le store global
                  router.refresh();
                }}
                className={`flex items-center w-fit h-fit text-sm px-4 py-2 border-[1px] border-bordercolor rounded-md bg-background hover:bg-bordercolor hover:border-background transition-colors ${
                  selectedSkill === e.id ? "bg-bordercolor border-none" : ""
                }`}
              >
                {e.ability}
              </button>
            )
        )}
      </div>
     
    </div>
  );
}
