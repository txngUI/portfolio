import { Github } from "lucide-react";

type GithubLinkProps = {
    link: string;
}

export default function GithubLink({ link }: GithubLinkProps) {
  return (
    <a rel={link} href={link} target="_blank">
      <span className="flex items-center px-2 py-1 border-[1px] border-bordercolor rounded-md bg-background">
        {<Github size={16} />}
        <p className="ml-2  whitespace-nowrap text-sm">Voir le code</p>
      </span>
    </a>
  );
}
