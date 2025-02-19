"use client";

import { Inconsolata } from "next/font/google";
import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";
import { ExternalLink } from "lucide-react";
import { redirect } from "next/dist/server/api-utils";
import TimelineItem from "./TimelineItem";
import SkillChip from "./SkillChip";
import Image from "next/image";

const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Career() {
  return (
    <div className="h-fit flex flex-col items-start mt-10">
      <h2
        className={`${inconsolata.className} text-titlecolor text-black text-3xl mb-2`}
      >
        Carrière professionnelle
      </h2>
      <Timeline horizontal className="w-full mt-8">
        <TimelineItem
          time={"Aout 2023 - En cours"}
          title={"Alternance Développeur Fullstack"}
          subtitle={"Transports CHABAS FRAICHEUR - Saint Fulgent (85)"}
          body={
            <p className="leading-7 text-neutral-500 dark:text-neutral-400 motion-preset-slide-right-smw">
              Conception et implémentation de l&apos;application web intranet de
              l&apos;agence à l&apos;aide du framework{" "}
              <span className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100">
                <Image
                  key="NextJS"
                  src="/icones/nextjs.png"
                  alt="NextJS"
                  width={16}
                  height={16}
                  className="mx-1"
                />
                NextJS
              </span>
              , basé sur{" "}
              <span className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100">
                <Image
                  key="ReactJS"
                  src="/icones/react.png"
                  alt="NextJS"
                  width={16}
                  height={16}
                  className="mx-1"
                />
                NextJS
              </span>{" "}
              et{" "}
              <span className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100">
                <Image
                  key="TypeScript"
                  src="/icones/typescript.png"
                  alt="NextJS"
                  width={16}
                  height={16}
                  className="mx-1"
                />
                TypeScript
              </span>
              , afin de faciliter la saisie et l&apos;analyse des données de
              l&apos;agence.
            </p>
          }
          link={"https://groupe-chabas.com/"}
          linkTitle="Voir l'entreprise"
        />
        <TimelineItem
          time={"Ete 2023 - 2 mois"}
          title={"Agent de Quai"}
          subtitle={"Transports CHABAS FRAICHEUR - Saint Fulgent (85)"}
          body={
            <ul>
              <li>- Décharger / Charger les camions</li>
              <li>- Trier et stocker les palettes de marchandises</li>
            </ul>
          }
          link={"https://groupe-chabas.com/"}
          linkTitle="Voir l'entreprise"
        />
        <TimelineItem
          time={"Octobre 2021"}
          title={"Stage Chef de Projet Marketing Digital"}
          subtitle={"NOVEA ENERGIES - BEAUCOUZE (49)"}
          body={
            <ul>
              <li>- Communication avec les clients</li>
              <li>- Planning des évènements et des projets</li>
              <li>- Création de maquettes de publicité pour les meetings</li>
            </ul>
          }
          link={"https://www.novea-energies.com/"}
          linkTitle="Voir l'entreprise"
        />
      </Timeline>
    </div>
  );
}
