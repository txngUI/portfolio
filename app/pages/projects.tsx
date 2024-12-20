import { Inconsolata } from "@next/font/google";
import ProjectCard from "../components/project-card";
import ShineBorder from "../components/ui/shine-border";

const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Projects() {
  const link_github = "https://github.com/txngUI?tab=repositories";
  return (
    <div className="text-justify mt-10">
      <h1 className="title">Mes projets</h1>
      <ShineBorder
        className="text-center text-2xl font-bold capitalize"
        color="#BFBFBF"
        borderWidth={2}
        duration={5}
        borderRadius={16}
      >
        <div className="grid grid-cols-1 bg-white md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-4 justify-items-center rounded-3xl p-3">
          <ProjectCard
            image="/images/champsAndCie.png"
            title="Champs & Cie"
            description="Application mobile qui permet d’en savoir plus sur les différents personnages du jeu League Of Legends."
            link="https://github.com/txngUI/ChampsEtCie"
          />
          <ProjectCard
            image="/images/geo_minds.png"
            title="Geo Minds"
            description="Site web de quizz basé sur la géographie."
            link=""
          />
          <ProjectCard
            image="/images/pokedex.png"
            title="Pokedex"
            description="Projet web qui permet la collection des Pokémons en tant que dresseur."
            link="https://github.com/txngUI/Pokedex"
          />
          <ProjectCard
            image="/images/game_collection.png"
            title="Game Collection"
            description="Site web en PHP qui collectionne les différents jeux que vous ajouter."
            link="https://github.com/txngUI/game_collection"
          />
          <ProjectCard
            image="/images/talkmate.png"
            title="TalkMate"
            description="Application mobile qui permet de communiquer avec des étrangers pour apprendre leurs langues."
            link=""
          />
          <div className="w-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg flex text-center justify-center">
            <a
              className={`${inconsolata.className} flex flex-col justify-center font-bold text-[#BFBFBF] transition-all duration-500`}
              href={link_github}
              target={link_github ? "_blank" : "_self"}
              rel={link_github ? "noopener noreferrer" : ""}
            >
              <span className="relative inline-block pb-1 after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-current after:scale-x-0 after:origin-right hover:after:scale-x-100 hover:after:origin-left after:transition-transform after:duration-500">
                Voir plus de projets
              </span>
            </a>
          </div>
        </div>
      </ShineBorder>
    </div>
  );
}
