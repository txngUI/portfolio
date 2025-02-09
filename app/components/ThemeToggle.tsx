"use client";
import { useTheme } from "@/app/hooks/useTheme";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import LightModeIcon from "@mui/icons-material/LightMode";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed right-6 top-6 px-2 py-2 bg-foreground rounded "
    >
      {theme === "dark" ? <LightModeIcon  className="text-white"/> :  <ModeNightIcon className="text-gray-600" />}
    </button>
  );
}
