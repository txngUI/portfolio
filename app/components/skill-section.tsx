import { Inconsolata } from "@next/font/google";
// import SkillChip from "./skill-chip";
import Image from "next/image";

type SkillSectionProps = {
  title: string;
  skills: { name: string; icon: string; description: string }[];
};

const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function SkillSection({ title, skills }: SkillSectionProps) {
  return (
    <div className="mt-6">
      <h1
        className={`${inconsolata.className}  text-gray-500 opacity-85 dark:text-white dark:opacity-60`}
      >
        ... {title}
      </h1>
      <div className="grid grid-cols-2 gap-4 mt-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {skills.map((skill) => (
          <>
            <span className="inline-flex items-center align-middle rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100">
              <Image
                alt={skill.name}
                src={skill.icon}
                width={20}
                height={20}
                className="mr-2"
              />
              {skill.name}
            </span>
          </>
          // <SkillChip key={index} title={} icon={} description={skill.description}/>
        ))}
      </div>
    </div>
  );
}
