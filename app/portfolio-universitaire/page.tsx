import ThemeToggle from "@/app/components/ThemeToggle";
import Announce from "@/app/components/Announce";
import Header from "@/app/components/Header";
import ToggleSwitch from "@/app/components/ToggleSwitch";

export default function Home() {
  return (
    <div>
      <Announce />
      <ThemeToggle />
      <main className="w-1/2 mx-auto mt-10">
        <ToggleSwitch />
        <div className="w-1/3 h-6">
          <p className="text-center">Portfolio universitaire</p>
        </div>
      </main>
    </div>
  );
}
