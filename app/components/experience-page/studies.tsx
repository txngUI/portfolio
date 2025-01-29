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

import { Timeline } from "flowbite-react";
//import SimpleButton from "../components/simple-button";

export default function Studies() {
  return (
    <div className="text-justify mt-10">
      <h1 className="title">Etudes</h1>
      <Timeline>
        <Timeline.Item>
          <Timeline.Point />

          <Timeline.Content>
            
              <Timeline.Time
                className={`${inconsolata.className} text-lg font-bold opacity-85 dark:text-white dark:opacity-60`}
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
                Obtention du diplôme BUT Informatique à{" "}
                <u>l&apos;IUT de Laval (53)</u>
                &nbsp; spécialisé dans la réalisation d&apos;applications
                (conception, développement, validation). 
                <ul>
                  <li>
                  <br />- <b>Réaliser</b> un développement d’application
                  </li>
                  <li>
                    - <b>Optimiser</b> des applications informatiques
                  </li>
                  <li>
                    - <b>Administrer</b> des systèmes informatiques communicants complexes
                  </li>
                  <li>
                    - <b>Gérer</b> des données de l’information
                  </li>
                  <li>
                    - <b>Conduire</b> un projet 
                  </li>
                  <li>
                    - <b>Travailler</b> dans une équipe informatique
                  </li>
                </ul>
              </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>

        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
              <Timeline.Time
                className={`${inconsolata.className} text-lg font-bold opacity-85 dark:text-white dark:opacity-60`}
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
                Mathématique, Numérique et Sciences de l&apos;Informatique ainsi
                que Physique Chimie au <b>Lycée Jean 23</b>&nbsp; aux{" "}
                <u>Herbiers (85)</u>&nbsp;.
              </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </div>
  );
}
