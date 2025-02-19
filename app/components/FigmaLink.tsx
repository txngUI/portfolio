import { Figma } from 'lucide-react';

type FigmaLinkProps = {
    link: string;
}

export default function FigmaLink({ link }: FigmaLinkProps) {
  return (
    <a rel={link} href={link} target="_blank">
      <span className="flex items-center px-2 py-1 border-[1px] border-bordercolor rounded-md bg-background">
        {<Figma  size={16} />}
        <p className="ml-2 whitespace-nowrap text-sm">Voir la maquette</p>
      </span>
    </a>
  );
}
