import { Inconsolata } from "@next/font/google";
import Image from "next/image";
import GithubLightMode from "/public/icones/github.png";
import GithubDarkMode from "/public/icones/github_darkmode.png";

type SeeMoreButtonProps = {
  link: string;
  darkMode: boolean;
};

const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function SeeMoreButton({ link, darkMode }: SeeMoreButtonProps) {
  return (
    <a
      href={link || "#"}
      target={link ? "_blank" : "_self"}
      rel={link ? "noopener noreferrer" : ""}
    >
      <button
        className={` ${inconsolata.className} flex items-center border
         dark:text-white dark:text-opacity-50 dark:border-opacity-25 dark:border-slate-600 dark:hover:border-slate-900 dark:shadow-[0_0_5px_5px_rgba(128,128,128,0.3)] dark:hover:shadow-[0_0_5px_5px_rgba(128,128,128,0.2)]
         border-gray-50 rounded-md px-3 py-1 shadow-[0_0_1px_1px_rgba(156,163,175,0.5)] hover:shadow-[0_0_5px_5px_rgba(156,163,175,0.5)] transition duration-300 mb-2`}
      >
        <Image
          alt="Voir plus"
          src={darkMode ? GithubDarkMode : GithubLightMode}
          width={25}
          height={25}
          className="mr-2 opacity-60"
        />
        Voir plus
      </button>
    </a>
  );
}
