import ThemeToggle from "@/app/components/ThemeToggle";
import Announce from "@/app/components/Announce";
import Header from "@/app/components/Header";
import ToggleSwitch from "@/app/components/ToggleSwitch";
import SwitchYear from "../components/SwitchYear";
import { cookies } from "next/headers";
import SwitchSkill from "../components/SwitchSkill";

export default async function Home() {

  const cookiesStorage = await cookies();
  const academicYear = parseInt(
    cookiesStorage.get("params-university-store|state|academicYear")?.value || "3"
  );

  return (
    <div>
      <Announce />
      <ThemeToggle />
      <main className="w-4/5 mx-auto">
        <ToggleSwitch />
        <div className="w-full flex flex-col items-center justify-center">
          <SwitchYear />
          <SwitchSkill />
        </div>
      </main>
    </div>
  );
}
