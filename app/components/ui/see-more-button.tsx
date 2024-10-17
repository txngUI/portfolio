import { Inconsolata } from "@next/font/google";
import Image from "next/image";

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
        className={` ${inconsolata.className} flex items-center border border-gray-50 rounded-md px-3 py-1 shadow-[0_0_10px_1px_rgba(156,163,175,0.5)] hover:shadow-[0_0_10px_5px_rgba(156,163,175,0.5)] transition duration-300 mb-2`}
      >
        <Image
          alt="Voir plus"
          src="/icones/github.png"
          width={25}
          height={25}
          className="mr-2 opacity-60"
        />
        Voir plus
      </button>
    </a>
  );
}
