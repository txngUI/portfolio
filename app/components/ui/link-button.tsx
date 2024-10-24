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
      <button className="mr-6 ml-6 flex items-center mb-4 sm:mb-4 md:mb-4 lg:mb-4 xl:mb-0 2xl:mb-0 sm:w-34 md:w-34 lg:w-34 dark:text-white dark:opacity-100 border border-gray-50 dark:border-gray-500 rounded-md px-3 py-1 shadow-[0_0_10px_1px_rgba(156,163,175,0.5)] hover:shadow-[0_0_10px_5px_rgba(156,163,175,0.5)] dark:shadow-[0_0_10px_1px_rgba(128,128,128,0.5)] dark:hover:shadow-[0_0_10px_1px_rgba(128,128,128,0.8)] transition duration-300">
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
