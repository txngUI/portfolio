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
      href={link || "#"} // Si le lien est vide, pas de redirection
      target={link ? "_blank" : "_self"} // Si le lien est fourni, ouverture dans un nouvel onglet
      rel={link ? "noopener noreferrer" : ""} // Rel de sécurité pour éviter les attaques de type opener
    >
      <button className="mr-6 ml-6 flex items-center border border-gray-50 rounded-md px-3 py-1 shadow-[0_0_10px_1px_rgba(156,163,175,0.5)] hover:shadow-[0_0_10px_5px_rgba(156,163,175,0.5)] transition duration-300">
        {/* Image de l'icône */}
        {icon && (
          <Image
            alt={text}
            src={icon} // Chemin vers l'icône
            width={25} // Largeur de l'image
            height={25} // Hauteur de l'image
            className="mr-2 opacity-60" // Ajustement de la marge droite pour espacement
          />
        )}
        <span className={`${inconsolata.className} font-medium text-gray-500`}>
          {text}
        </span>
      </button>
    </a>
  );
}
