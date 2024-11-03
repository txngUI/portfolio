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
import SimpleButton from "../components/simple-button";
import BoxReveal from "../components/ui/box-reveal";

export default function Experience() {
  return (
    <div className="text-justify mt-10">
      <h1 className="title">Expérience</h1>
      <Timeline>
        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <BoxReveal duration={0.5}>
              <Timeline.Time
                className={`${inconsolata.className} text-lg font-bold opacity-85 dark:text-white dark:opacity-60`}
              >
                Août 2023 - En cours
              </Timeline.Time>
            </BoxReveal>
            <BoxReveal duration={0.5}>
              <Timeline.Title
                className={`${titanOne.className} text-2xl text-gray-500 opacity-85`}
              >
                Alternance Développeur Web / VBA
              </Timeline.Title>
            </BoxReveal>
            <BoxReveal duration={0.5}>
              <Timeline.Body
                className={`${inconsolata.className} text-sm opacity-80`}
              >
                Développement du site internet au sein de
                l&apos;agence <b>Transport CHABAS FRAÎCHEUR</b> de{" "}
                <u>Saint Fulgent (85)</u>
                &nbsp; et automatisation de tâches récurrentes. La technologie
                utilisée a d&apos;abord été PHP puis NextJS.
              </Timeline.Body>
            </BoxReveal>
            <BoxReveal duration={0.5}>
              <SimpleButton
                title="Voir l'entreprise"
                link="https://groupe-chabas.com/fraicheur/"
              />
            </BoxReveal>
          </Timeline.Content>
        </Timeline.Item>

        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <BoxReveal duration={0.5}>
              <Timeline.Time
                className={`${inconsolata.className} text-lg font-bold opacity-85 dark:text-white dark:opacity-60`}
              >
                Ete 2023
              </Timeline.Time>
            </BoxReveal>
            <BoxReveal duration={0.5}>
              <Timeline.Title
                className={`${titanOne.className} text-2xl text-gray-500 opacity-85`}
              >
                Agent de quai
              </Timeline.Title>
            </BoxReveal>
            <BoxReveal duration={0.5}>
              <Timeline.Body
                className={`${inconsolata.className} text-sm opacity-80`}
              >
                agence <b>Transport CHABAS FRAÎCHEUR</b> de{" "}
                <u>Saint Fulgent (85)</u><br />
                - Vider / Charger les camions de leur marchandise <br />
                - Ranger les colis par destinations <br />
              </Timeline.Body>
            </BoxReveal>
            <BoxReveal duration={0.5}>
              <SimpleButton
                title="Voir l'entreprise"
                link="https://groupe-chabas.com/fraicheur/"
              />
            </BoxReveal>
          </Timeline.Content>
        </Timeline.Item>

        <Timeline.Item>
          <Timeline.Point />
          <Timeline.Content>
            <BoxReveal duration={0.5}>
              <Timeline.Time
                className={`${inconsolata.className} text-lg font-bold opacity-85 dark:text-white dark:opacity-60`}
              >
                Ete 2022
              </Timeline.Time>
            </BoxReveal>
            <BoxReveal duration={0.5}>
              <Timeline.Title
                className={`${titanOne.className} text-2xl text-gray-500 opacity-85`}
              >
                Agent de reception
              </Timeline.Title>
            </BoxReveal>
            <BoxReveal duration={0.5}>
              <Timeline.Body
                className={`${inconsolata.className} text-sm opacity-80`}
              >
                site <b>ID Logistics</b> aux{" "}
                <u>Herbiers (85)</u><br />
                - Viders les camions de leur marchandise <br />
                - Faire l'inventaire des colis <br />
              </Timeline.Body>
            </BoxReveal>
            <BoxReveal duration={0.5}>
              <SimpleButton
                title="Voir l'entreprise"
                link="https://www.id-logistics.com/fr/"
              />
            </BoxReveal>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </div>
  );
}
