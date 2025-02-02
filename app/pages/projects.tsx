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
        <div className="grid grid-cols-1 bg-white md:grid-cols-2 lg:grid-cols-2 gap-y-8 gap-x-4 justify-items-center rounded-3xl p-3">
          <ProjectCard
            image="/images/recipe_hub.png"
            title="Recipe Hub"
            description="Application web avec espace compte permettant de gérer efficacement toutes  les facettes de votre cuisine. Elle centralise vos recettes, répertorie vos équipements,  organise vos listes d'achats et planifie vos courses ainsi que vos repas. J'ai appris à développer avec Spring Boot en autodidacte. "
            link="https://github.com/txngUI/recipehub"
            icones={[
              { src: "/icones/java.png", alt: "Java" },
              { src: "/icones/spring.png", alt: "Spring" },
              { src: "/icones/angular.png", alt: "Angular" },
            ]}
          />
          <ProjectCard
            image="/images/champsAndCie.png"
            title="Champs & Cie"
            description="Champs&Cie est une application mobile permettant de visualiser tous les personnagesb du jeu vidéo League of Legends. Vous pouvez rechercher un champion en fonction de son rôle dans le jeu ou de son type d'énergie. Une fois trouvé, vous aurez accès à des informations détaillées sur lui ainsi qu'à des conseils pour le jouer."
            link="https://github.com/txngUI/ChampsEtCie"
            icones={[{ src: "/icones/java.png", alt: "Java" }]}
          />
          <ProjectCard
            image="/images/pokedex.png"
            title="Pokedex"
            description="Ce projet web fait partie des projets effectués dans le cadre de mon BUT Informatique afin de prendre en main la bibliothèque React JS. L'application utilise l'API Pokémon et permet aux utilisateurs de se connecter, de rechercher un Pokémon, de l'ajouter à leur Pokédex ou de le visualiser."
            link="https://github.com/txngUI/Pokedex"
            icones={[{ src: "/icones/react.png", alt: "React" }]}
          />

          <ProjectCard
            image="/images/talkmate.png"
            title="TalkMate"
            description="Talkmate est une application web et mobile conçue pour mettre en relation des correspondants étrangers afin de favoriser l’apprentissage des langues. Son atout principal réside dans la mise en relation des utilisateurs en fonction de leurs centres d’intérêt communs. Actuellement, le projet en est encore au stade de maquettage et n’a pas encore été lancé en raison de sa complexité et de l’ampleur du développement nécessaire."
            link=""
          />
        </div>
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
      </ShineBorder>
    </div>
  );
}
