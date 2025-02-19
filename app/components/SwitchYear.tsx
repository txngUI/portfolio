"use client";

import { useParamsUniversityStore } from "@/lib/store";
import { useRouter } from "next/navigation";

type AcademicYear = {
  id: number;
  name: string;
};

export default function SwitchYear() {
  const { academicYear, setAcademicYear } = useParamsUniversityStore();

  const years: AcademicYear[] = [
    {
      id: 1,
      name: "1ère Année",
    },
    {
      id: 2,
      name: "2ème Année",
    },
    {
      id: 3,
      name: "3ème Année",
    },
  ];

  const router = useRouter();

  return (
    <div>
      <div className="w-full flex justify-around items-center">
        {years.map((y) => (
          <button
            key={y.id}
            onClick={() => {
              setAcademicYear(y.id);
              router.refresh();
            }}
            className={`flex items-center px-2 py-1 border-[1px] border-bordercolor rounded-md bg-background hover:bg-bordercolor hover:border-background transition-colors ${
              academicYear === y.id ? "bg-bordercolor border-none" : ""
            }`}
          >
            {y.name}
          </button>
        ))}
      </div>
    </div>
  );
}
