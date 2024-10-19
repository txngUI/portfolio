import { Inconsolata } from "@next/font/google";
import Image from 'next/image';

type LinkButtonProps = {
  text: string;
  icon: string;  // Le chemin de l'icône, peut être une image locale dans public/
  link: string;  // Le lien vers lequel rediriger
};

const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function LinkButton({ text, icon, link }: LinkButtonProps) {
  return (
    <a
      href={link || "#"} 
      target={link ? "_blank" : "_self"} 
      rel={link ? "noopener noreferrer" : ""} 
    >
      <button className="mr-6 ml-6 flex items-center border border-gray-50 rounded-md px-3 py-1 shadow-[0_0_10px_1px_rgba(156,163,175,0.5)] hover:shadow-[0_0_10px_5px_rgba(156,163,175,0.5)] transition duration-300">
        {icon && (
          <Image
            alt={text}
            src={icon} 
            width={25}
            height={25} 
            className="mr-2 opacity-60"
          />
        )}
        <span className={`${inconsolata.className} font-medium text-gray-500`}>
          {text}
        </span>
      </button>
    </a>
  );
}
