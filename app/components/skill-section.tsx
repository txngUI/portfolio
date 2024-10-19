import { Inconsolata } from "@next/font/google";
import SkillChip from "./skill-chip";

type SkillSectionProps = {
  title: string;
  skills: { name: string; icon: string }[];
};

const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function SkillSection({ title, skills }: SkillSectionProps) {
  return (
    <div className="mt-6">
      <h1 className={`${inconsolata.className}  text-gray-500 opacity-85`}>
        ... {title}
      </h1>
      <div className="flex justify-start mt-4 ml-10">
        {skills.map((skill, index) => (
          <SkillChip key={index} title={skill.name} icon={skill.icon} />
        ))}
      </div>
    </div>
  );
}
