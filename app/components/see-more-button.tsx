import { Inconsolata } from "@next/font/google";
import Image from "next/image";
import GithubLightMode from "/public/icones/github.png";
// import GithubDarkMode from "/public/icones/github_darkmode.png";

type SeeMoreButtonProps = {
  link: string;
};

const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function SeeMoreButton({ link }: SeeMoreButtonProps) {
  return (
    <a
      href={link || "#"}
      target={link ? "_blank" : "_self"}
      rel={link ? "noopener noreferrer" : ""}
    >
      <button
        style={{ borderRadius: "10px" }}
        className={` ${inconsolata.className} flex items-center border
         dark:text-white dark:text-opacity-50 dark:border-opacity-25 dark:border-slate-600 dark:hover:border-slate-900 dark:shadow-[0_0_5px_5px_rgba(128,128,128,0.3)] dark:hover:shadow-[0_0_5px_5px_rgba(128,128,128,0.2)]
         border-gray-300 hover:bg-gray-100 px-3 py-1 transition duration-300 mb-2 w-30 h-8`}
      >
        <Image
          alt="Voir plus"
          src={GithubLightMode}
          width={20}
          height={20}
          className="mr-2 opacity-60"
        />
        <span
          className={`${inconsolata.className} font-medium text-gray-500 text-base`}
        >
          Voir plus
        </span>
      </button>
    </a>
  );
}
