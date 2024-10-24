import { Inconsolata } from "@next/font/google";
import SkillChip from "./skill-chip";

type SkillSectionProps = {
  title: string;
  skills: { name: string; icon: string, description: string }[];
};

const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function SkillSection({ title, skills }: SkillSectionProps) {
  return (
    <div className="mt-6">
      <h1 className={`${inconsolata.className}  text-gray-500 opacity-85 dark:text-white dark:opacity-60`}>
        ... {title}
      </h1>
      <div className="grid grid-cols-2 gap-4 mt-4 ml-10 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {skills.map((skill, index) => (
          <SkillChip key={index} title={skill.name} icon={skill.icon} description={skill.description}/>
        ))}
      </div>
    </div>
  );
}
