import ThemeToggle from "@/app/components/ThemeToggle";
import Announce from "@/app/components/Announce";
import ToggleSwitch from "@/app/components/ToggleSwitch";
import SwitchYear from "../components/SwitchYear";
import { cookies } from "next/headers";
import SwitchSkill from "../components/SwitchSkill";
import SkillContent from "../components/SkillContent";
import Footer from "../components/Footer";

export default async function Home() {
  const cookiesStorage = await cookies();

  const academicYear = parseInt(
    cookiesStorage.get("params-university-store|state|academicYear")?.value ||
      "3"
  );
  const skill = parseInt(
    cookiesStorage.get("params-university-store|state|skill")?.value || "1"
  );

  return (
    <div>
      <Announce />
      <ThemeToggle />
      <main className="w-4/5 mx-auto">
        <ToggleSwitch />
        <div className="w-full flex flex-col items-center justify-center">
          <SwitchYear year={academicYear} />
          <SwitchSkill academicYear={academicYear} skill={skill} />
          <SkillContent academicYear={academicYear} skill={skill} />
          <Footer />
        </div>
      </main>
    </div>
  );
}
