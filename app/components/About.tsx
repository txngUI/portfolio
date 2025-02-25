"use client";
import { Mail } from "lucide-react";
import { Github } from "lucide-react";
import { ArrowDownToLine } from "lucide-react";
import { Inconsolata } from "next/font/google";
import ContactButton from "./ContactButton";
import Image from "next/image";

const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function About() {
  return (
    <div className="h-fit flex flex-col items-start">
      <h2
        className={`${inconsolata.className} text-titlecolor text-center text-3xl mb-2`}
      >
        A propos
      </h2>
      <p className="text-justify leading-10">
        Étudiant en troisième année de BUT Informatique à l&apos;IUT de Laval,
        j&apos;ai 21 ans et suis actuellement à la recherche d&apos;une
        alternance sur Rennes afin de préparer mon admission au Mastère
        Développement Full Stack à Sup de Vinci.
      </p>
      <p className="mt-10 text-justify leading-10">
        Passionné par le développement informatique depuis plusieurs années, je
        me spécialise dans la conception et la réalisation d&apos;applications
        web et logicielles. Côté back-end, j&apos;exploite principalement
        le langage{" "}
        <span className="inline-flex translate-y-1 items-center justify-between rounded border border-neutral-200 bg-neutral-50 mr-1 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100">
          <Image
            key="Java"
            src="/icones/java.png"
            alt="Java"
            width={24}
            height={24}
            className="mr-2"
          />
          Java
        </span> et son écosystème, tandis que pour le front-end, j&apos;utilise les langages  <span className="inline-flex translate-y-1 items-center rounded border border-neutral-200 bg-neutral-50 mr-1 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100">
          <Image
            key="React"
            src="/icones/react.png"
            alt="React"
            width={24}
            height={24}
            className="mr-2"
          />
          React
        </span> et
        <span className="inline-flex translate-y-1 items-center rounded border border-neutral-200 bg-neutral-50 p-1 mr-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100">
          <Image
            key="Angular"
            src="/icones/angular.png"
            alt="Angular"
            width={24}
            height={24}
            className="mr-2"
          />
          Angular
        </span> et l&apos;outil <span className="inline-flex translate-y-1 items-center rounded border border-neutral-200 bg-neutral-50 p-1 mr-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100">
          <Image
            key="Tailwind"
            src="/icones/tailwindcss.png"
            alt="Tailwind"
            width={24}
            height={24}
            className="mr-2"
          />
          Tailwind
        </span> afin de concevoir des interfaces
        modernes et performantes. J&apos;utilise également des technologies tel
        que <span className="inline-flex translate-y-1 items-center rounded border border-neutral-200 bg-neutral-50 p-1 mr-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100">
          <Image
            key="Git"
            src="/icones/git.png"
            alt="Git"
            width={24}
            height={24}
            className="mr-2"
          />
          Git
        </span> et <span className="inline-flex translate-y-1 items-center rounded border border-neutral-200 bg-neutral-50 p-1 mr-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100">
          <Image
            key="Docker"
            src="/icones/docker.png"
            alt="Docker"
            width={24}
            height={24}
            className="mr-2"
          />
          Docker
        </span> pour la gestion de versions et le déploiements de mes
        solutions digitales. Motivé et curieux, j&apos;ai à cœur de monter en
        compétences afin d&apos;élargir mon expertise en développement
        fullstack.
      </p>
      <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row justify-evenly w-full mt-4">
        <ContactButton
          text="tanguy.davidpro85@gmail.com"
          link="mailto:tanguy.davidpro85@gmail.com"
          icon={<Mail size={20} />}
        />
        <ContactButton
          text="@txngUI"
          link="https://github.com/txngUI"
          icon={<Github size={20} />}
        />
        <ContactButton
          text="Mon CV"
          link="/documents/cv.pdf"
          icon={<ArrowDownToLine size={20} />}
        />
      </div>
    </div>
  );
}
