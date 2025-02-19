import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { cookieStorage } from "@/lib/cookie-storage";

interface ParamsUniversityStore {
  academicYear: number;
  setAcademicYear: (academicYear: number) => void;
  skill: number;
  setSkill: (skill: number) => void;
}

export const useParamsUniversityStore = create(
  persist<ParamsUniversityStore>(
    (set) => ({
      academicYear: 3,
      setAcademicYear: (year: number) => set({ academicYear: year }),
      skill: 1,
      setSkill: (skill: number) => set({ skill: skill }),
    }),
    {
      name: "params-university-store",
      storage: createJSONStorage(() => cookieStorage),
    }
  )
);
