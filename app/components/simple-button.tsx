import { Inconsolata } from "@next/font/google";
import Image from "next/image";

type SimpleButtonProps = {
  title: string;
  link: string;
};

const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function SimpleButton({ title, link }: SimpleButtonProps) {
  return (
    <a
      href={link || "#"}
      target={link ? "_blank" : "_self"}
      rel={link ? "noopener noreferrer" : ""}
    >
      <button
        className={` ${inconsolata.className} bg-white flex items-center border dark:text-white dark:hover:text-opacity-70 text-slate-500 border-gray-300 rounded-md px-3 py-1  hover:shadow-[0_0_10px_1px_rgba(156,163,175,0.5)] transition duration-500 mb-2`}
      >
        {title}
        <Image
          alt="Voir l'entreprise"
          src="/icones/link.png"
          width={20}
          height={20}
          className="ml-2 opacity-60"
        />
      </button>
    </a>
  );
}
