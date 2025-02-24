import Image from "next/image";
import { Baloo_Bhai_2 } from "next/font/google";
import FigmaLink from "./FigmaLink";

const baloo = Baloo_Bhai_2({
  subsets: ["latin"],
  weight: ["400", "700"],
});

type PrototypeCardProps = {
  project: Project;
};

export default function PrototypeCard({ project }: PrototypeCardProps) {
  return (
      <div className="flex flex-col items-center border-2 border-bordercolor rounded-[10px]">
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
        <div className="flex justify-between items-center w-full p-2">
          <FigmaLink link={project.link} />
        </div>
      </div>
    );
}
