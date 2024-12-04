import { Inconsolata } from "@next/font/google";
import { Titan_One } from "@next/font/google";
import Image from "next/image";

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
                Développement de l&apos;application intranet au sein de
                l&apos;agence Transport Chabas Fraîcheur de Saint Fulgent (85).
                J&apos;ai notemment développer en{" "}
                <span className="inline-flex items-center align-middle rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100">
                  <Image
                    alt="PHP"
                    src="/icones/php.png"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  PHP
                </span>{" "}
                et{" "}
                <span className="inline-flex items-center align-middle rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100">
                  <Image
                    alt="NextJS"
                    src="/icones/nextjs.png"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  NextJS
                </span>{" "}
                avec{" "} <span className="inline-flex items-center align-middle rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100">
                  <Image
                    alt="React"
                    src="/icones/react.png"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  React
                </span>,{" "}
                <span className="inline-flex items-center align-middle rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100">
                  <Image
                    alt="TypeScript"
                    src="/icones/typescript.png"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  TypeScript
                </span>
                ,{" "}
                <span className="inline-flex items-center align-middle rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100">
                  <Image
                    alt="PostgreSQL"
                    src="/icones/postgresql.png"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  PostgreSQL
                </span>{" "}
                et l&apos;{" "}ORM{" "}
                <span className="inline-flex items-center align-middle rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100">
                  <Image
                    alt="Prisma"
                    src="/icones/prisma.png"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  Prisma
                </span>. L&apos;automatisation de certaines tâches récurentes
                s&apos;est faite à l&apos;aide du langage de programmation natif
                de Microsoft, le {" "}
                <span className="inline-flex items-center align-middle rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100">
                  <Image
                    alt="VBA"
                    src="/icones/vba.png"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  VBA
                </span>. J&apos;ai également eu l&apos;ocassion de me former à {" "}
                <span className="inline-flex items-center align-middle rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100">
                  <Image
                    alt="PowerBI"
                    src="/icones/power_bi.png"
                    width={20}
                    height={20}
                    className="mr-2"
                  />
                  Power BI
                </span>.
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
                <u>Saint Fulgent (85)</u>
                <br />
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
                site <b>ID Logistics</b> aux <u>Herbiers (85)</u>
                <br />
                - Viders les camions de leur marchandise <br />
                - Faire l&apos;inventaire des colis <br />
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
