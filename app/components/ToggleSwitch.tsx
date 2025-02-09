"use client";
import { useRouter, usePathname } from "next/navigation";

export default function ToggleSwitch() {
  const router = useRouter();
  const pathname = usePathname(); // Récupère l'URL actuelle

  const isPortfolioActive = pathname === "/";
  const isUniversityActive = pathname === "/portfolio-universitaire";

  return (
    <div className="flex mb-10 border-2 border-bordercolor bg-foreground rounded-full p-1 w-fit h-fit mx-auto">
      <button
        onClick={() => router.push("/")}
        className={`flex-1 px-4 py-1 text-center rounded-full transition whitespace-nowrap ${
          isPortfolioActive ? "bg-background shadow-md border-2 border-bordercolor" : "text-gray-500"
        }`}
      >
        Portfolio
      </button>
      <button
        onClick={() => router.push("/portfolio-universitaire")}
        className={`flex-1 px-4 py-1 text-center rounded-full transition whitespace-nowrap ${
          isUniversityActive ? "bg-background shadow-md border-2 border-bordercolor" : "text-gray-500"
        }`}
      >
        Portfolio universitaire
      </button>
    </div>
  );
}
