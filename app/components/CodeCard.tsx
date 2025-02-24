import Image from "next/image";
import { Baloo_Bhai_2 } from "next/font/google";
import GithubLink from "./GithubLink";

const baloo = Baloo_Bhai_2({
  subsets: ["latin"],
  weight: ["400", "700"],
});

type CodeCardProps = {
  project: Project;
};

export default function CodeCard({ project }: CodeCardProps) {
  return (
    <div className="flex flex-col items-center max-w-64 w-full border-2 border-bordercolor rounded-[10px]">
      <Image
        src={project.image}
        alt={project.name}
        width={256}
        height={256}
        className="rounded-t-[8px]"
      />
      <h4
        className={`${baloo.className} text-left w-full px-2 mt-2 font-bold text-lg`}
      >
        {project.name}
      </h4>
      <p className="text-justify text-sm px-2">{project.description}</p>
      <div className="flex flex-row justify-between items-center w-full h-fit p-2">
        <GithubLink link={project.link} />
        <div className="flex items-center">
          {project.icones.map((icone) => (
            <Image
              key={icone.name}
              src={icone.image}
              alt={icone.name}
              width={24}
              height={24}
              className="mx-1"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
