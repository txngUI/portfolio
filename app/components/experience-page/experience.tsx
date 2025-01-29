import Image from "next/image";

import { Timeline } from "flowbite-react";
import { ExperienceSection } from "@/app/components/experience-page/experience-section";

export default function Experience() {
  const descriptionTCSandwichCourse: JSX.Element = (
    <>
      <p>
        Conception et implémentation de l&apos;application web intranet de
        l&apos;agence Vendée permettant la saisie et l&apos;analyse de données
        de l&apos;entreprise.
        <br />- Développement du site sous le framework {" "}
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
        avec{" "}
        <span className="inline-flex items-center align-middle rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100">
          <Image
            alt="React"
            src="/icones/react.png"
            width={20}
            height={20}
            className="mr-2"
          />
          React
        </span>
        {" "}et{" "}
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
        <br />- Réalisation des maquettes de l&apos;interface utilisateur avec{" "}
        <span className="inline-flex items-center align-middle rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100">
          <Image
            alt="Figma"
            src="/icones/figma.png"
            width={20}
            height={20}
            className="mr-2"
          />
          Figma
        </span>
        <br />- Gestion de la base de données avec {" "}
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
        et l&apos;ORM{" "}
        <span className="inline-flex items-center align-middle rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100">
          <Image
            alt="Prisma"
            src="/icones/prisma.png"
            width={20}
            height={20}
            className="mr-2"
          />
          Prisma
        </span>
        . J&apos;ai également eu l&apos;occasion de me former à{" "}
        <span className="inline-flex items-center align-middle rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100">
          <Image
            alt="PowerBI"
            src="/icones/power_bi.png"
            width={20}
            height={20}
            className="mr-2"
          />
          Power BI
        </span>
        .
      </p>
    </>
  );

  const descriptionNovea: JSX.Element = (
    <>
      <b>NOVEA Energies </b> à <u>Beaucouzé (49)</u>
      <br />
      - Communication avec les clients <br />
      - Planning des évènements et des projets <br />
      - Création de maquettes de publicité pour les meetings <br />
    </>
  );

  const descriptionTCQuai: JSX.Element = (
    <>
      agence <b>Transports CHABAS Fraîcheur</b> de <u>Saint Fulgent (85)</u>
      <br />
      - Décharger les camions <br />
      - Trier et stocker les palettes de marchandises <br />
    </>
  );

  return (
    <div className="text-justify mt-10">
      <h1 className="title">Expérience</h1>
      <Timeline>
        <ExperienceSection
          date="Août 2023 - En cours"
          title="Alternance Développeur Web / VBA"
          description={descriptionTCSandwichCourse}
          link="https://groupe-chabas.com/fraicheur/"
        />

        <ExperienceSection
          date="Octobre 2021 - 1 semaine"
          title="Stage Chef de Projet Marketing Digital"
          description={descriptionNovea}
          link="https://www.novea-energies.com/"
        />

        <ExperienceSection
          date="Ete 2023 - 2 mois"
          title="Agent de quai"
          description={descriptionTCQuai}
          link="https://groupe-chabas.com/fraicheur/"
        />
      </Timeline>
    </div>
  );
}
