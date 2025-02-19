"use client";
import { useTheme } from "next-themes";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useMounted } from "../hooks/use-mounted";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const isMounted = useMounted();

  if (!isMounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed right-6 top-6 px-2 py-2 bg-foreground rounded "
    >
      {theme === "dark" ? (
        <LightModeIcon className="text-white" />
      ) : (
        <ModeNightIcon className="text-gray-600" />
      )}
    </button>
  );
}
