"use client";

import { Inconsolata } from "next/font/google";
import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight, HiCalendar } from "react-icons/hi";
import TimelineItem from "./TimelineItem";

const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Studies() {
  return (
    <div className="h-fit flex flex-col items-start mt-16">
      <h2
        className={`${inconsolata.className} text-titlecolor text-black text-3xl mb-2`}
      >
        Carrière universitaire
      </h2>
      <Timeline horizontal className="w-full mt-8">
        <TimelineItem
          time={"A venir"}
          title={"Mastère Développement Fullstack"}
          subtitle={"Sup de vinci - Rennes (35)"}
          body={
            <p>
              Je recherche activement une entreprise pour effectuer mon mastère
              en a alternance aux alentours de Rennes. L'alternance est rythmée
              3 semaines en entreprise et 1 semaine à l&apos;école.
            </p>
          }
          link={"https://jean23-herbiers.com/"}
          linkTitle="Voir l'établissement"
        />
        <TimelineItem
          time={"2022 - 2025"}
          title={"BUT Informatique"}
          subtitle={"Institut Universitaire de Technologie de Laval (53)"}
          body={
            <p>
              Obtention du dîplome du Brevet Universitaire de Technologie
              spécialisé dans la réalisation d'applications (conception,
              développement, validation). Formation suivie en alternance.
            </p>
          }
          link={"https://www.univ-lemans.fr/fr/index.html"}
          linkTitle="Voir l'établissement"
        />
        <TimelineItem
          time={"2022"}
          title={"Baccalauréat Général"}
          subtitle={"Lycée Jean 23 - LES HERBIERS (85)"}
          body={
            <p>
              Obtention du diplôme du baccalauréat général spécialisé en
              Mathématique, Numérique et Sciences de l'Informatique ainsi que
              Physique Chimie.
            </p>
          }
          link={"https://jean23-herbiers.com/"}
          linkTitle="Voir l'établissement"
        />
      </Timeline>
    </div>
  );
}
