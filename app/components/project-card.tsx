import { Inconsolata } from "@next/font/google";
import { Titan_One } from "@next/font/google";
import Image from "next/image";
import SeeMoreButton from "./see-more-button";

type ProjectCardProps = {
  image: string;
  title: string;
  description: string;
  link: string;
  icones?: Icone[];
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
  icones,
}: ProjectCardProps) {
  return (
    <div className="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg border-gray-500 shadow-[0_0_10px_1px_rgba(156,163,175,0.5)] dark:shadow-[0_0_4px_4px_rgba(128,128,128,0.1)] dark:hover:shadow-[0_0_4px_4px_rgba(128,128,128,0.2)] hover:shadow-[0_0_10px_5px_rgba(156,163,175,0.5)] transition duration-300 rounded-2xl flex flex-col">
      <div className="relative w-full">
        <Image
          alt={title}
          src={image}
          layout="responsive"
          width={100}
          height={50}
          className="mr-2 dark:opacity-40 rounded-t-2xl"
        />
      </div>
      <div className="px-4 py-2 flex-grow">
        <p
          className={`${titanOne.className} text-justify dark:text-white dark:opacity-80 text-gray-500 opacity-85`}
        >
          {title}
        </p>
        <p
          className={`${inconsolata.className} text-gray-400 font-light text-justify dark:ext-white dark:opacity-40 text-xs normal-case`}
        >
          {description}
        </p>
      </div>
      {link && (
        <div className="px-4 py-2 flex justify-between items-center">
          <SeeMoreButton link={link} />
          <div className="flex">
            {icones &&
              icones.map((icone) => (
                <Image
                  key={icone.src}
                  alt={icone.alt}
                  src={icone.src}
                  width={20}
                  height={20}
                  className="mr-2"
                />
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
