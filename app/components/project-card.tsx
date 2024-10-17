import { Inconsolata } from "@next/font/google";
import { Titan_One } from "@next/font/google";
import Image from "next/image";
import SeeMoreButton from "./ui/see-more-button";

type ProjectCardProps = {
  image: string;
  title: string;
  description: string;
  link: string;
};

const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const titanOne = Titan_One({
  subsets: ["latin"],
  weight: ["400"],
});

export default function ProjectCard({
  image,
  title,
  description,
  link,
}: ProjectCardProps) {
  return (
    <div className="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg border-gray-500 shadow-[0_0_10px_1px_rgba(156,163,175,0.5)] hover:shadow-[0_0_10px_5px_rgba(156,163,175,0.5)] transition duration-300 rounded-2xl flex flex-col">
      <div className="relative w-full">
        <Image
          alt={title}
          src={image}
          layout="responsive"
          width={100}
          height={50}
          className="mr-2" //opacity-60
        />
      </div>
      <div className="px-4 py-2 flex-grow">
        <p className={`${titanOne.className} text-gray-500 opacity-85`}>
          {title}
        </p>
        <p className={`${inconsolata.className} text-sm opacity-80`}>
          {description}
        </p>
      </div>
      <div className="px-4 py-2"> 
        <SeeMoreButton link={link} />
      </div>
    </div>
  );
}
