import { Inconsolata } from "@next/font/google";
import { Titan_One } from "@next/font/google";

const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const titanOne = Titan_One({
  subsets: ["latin"],
  weight: ["400"],
});

import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight } from "react-icons/hi";
import SeeMoreButton from "../components/ui/see-more-button";
import SimpleButton from "../components/ui/simple-button";

export default function Career() {
  return (
    <div className="text-justify mt-10">
      <h1 className="title">Mon parcours</h1>
      <Timeline>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time
              className={`${inconsolata.className} text-lg font-bold opacity-85`}
            >
              Août 2023 - En cours
            </Timeline.Time>
            <Timeline.Title
              className={`${titanOne.className} text-2xl text-gray-500 opacity-85`}
            >
              Alternance Développeur Web / VBA
            </Timeline.Title>
            <Timeline.Body
              className={`${inconsolata.className} text-sm opacity-80`}
            >
              Développement de pages web pour le site internet au sein de
              l'agence <b>Transport CHABAS FRAÎCHEUR</b> de{" "}
              <u>Saint Fulgent (85)</u>
              &nbsp; et automatisation de tâches récurrentes. La technologie
              utilisée a d'abord été PHP puis NextJS.
            </Timeline.Body>
            <SimpleButton
              title="Voir l'entreprise"
              link="https://groupe-chabas.com/fraicheur/"
            />
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time
              className={`${inconsolata.className} text-lg font-bold opacity-85`}
            >
              2022 - 2025
            </Timeline.Time>
            <Timeline.Title
              className={`${titanOne.className} text-2xl text-gray-500 opacity-85`}
            >
              BUT Informatique
            </Timeline.Title>
            <Timeline.Body
              className={`${inconsolata.className} text-sm opacity-80`}
            >
              Obtention du diplôme BUT Informatique à <u>l'IUT de Laval (53)</u>
              &nbsp; spécialisé dans la réalisation d'applications (conception,
              développement, validation).
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <Timeline.Time
              className={`${inconsolata.className} text-lg font-bold opacity-85`}
            >
              2022
            </Timeline.Time>
            <Timeline.Title
              className={`${titanOne.className} text-2xl text-gray-500 opacity-85`}
            >
              Baccalauréat Général
            </Timeline.Title>
            <Timeline.Body
              className={`${inconsolata.className} text-sm opacity-80`}
            >
              Obtention du diplôme du baccalauréat général spécialisé en
              Mathématique, Numérique et Sciences de l’Informatique ainsi que
              Physique Chimie au <b>Lycée Jean 23</b>&nbsp; aux <u>Herbiers (85)</u>&nbsp;.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </div>
  );
}
