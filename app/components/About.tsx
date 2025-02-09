"use client";
import { Mail } from "lucide-react";
import { Github } from "lucide-react";
import { ArrowDownToLine } from "lucide-react";
import { Inconsolata } from "next/font/google";
import ContactButton from "./ContactButton";

const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function About() {
  return (
    <div className="h-fit flex flex-col items-start">
      <h2 className={`${inconsolata.className} text-titlecolor text-center text-3xl mb-2`}>
        A propos
      </h2>
      <p className="text-justify">
        Je me passionne pour le développement informatique depuis maintenant
        quelques années. Étudiant en troisième année de BUT Informatique à l’IUT
        de Laval, spécialisé en conception et développement d’applications, je
        me prépare à intégrer le mastère en développement fullstack de Sup de
        Vinci à Rennes.
      </p>
      <div className="flex justify-evenly w-full mt-4">
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
