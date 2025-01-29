import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { cookieStorage } from "./cookie-storage";

interface DarkModeStore {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const useDarkModeStore = create(
  persist<DarkModeStore>(
    (set) => ({
      darkMode: false,
      toggleDarkMode: () => set((state) => ({ 
        darkMode: !state.darkMode })),
    }),
    {
      name: "dark-mode",
      storage: createJSONStorage(() => cookieStorage),
    }
  )
);
