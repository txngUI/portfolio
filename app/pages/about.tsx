import { Inconsolata } from "@next/font/google";
import NumberTicker from "../components/ui/number-ticker";
import Image from "next/image";

const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function About({ darkMode }: { darkMode: boolean }) {
  const birthday = new Date(2004, 0, 2);
  const today = new Date();

  let age = today.getFullYear() - birthday.getFullYear();
  const monthDifference = today.getMonth() - birthday.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthday.getDate())
  ) {
    age--;
  }

  return (
    <div className="text-justify mt-10 flex flex-col justify-center items-center">
      <h1 className="title w-full">A propos de moi</h1>
      <p
        className={`${inconsolata.className} dark:text-white text-black text-opacity-50`}
      >
        Âgé de{" "}
        <NumberTicker
          delay={2}
          className="text-black text-opacity-50"
          value={age}
        />{" "}
        ans, je suis actuellement en troisième année de BUT Informatique, où je
        me spécialise dans la réalisation d'applications, englobant la
        conception, le développement et la validation. Ma passion pour le
        développement s'est développée au fil des années, me poussant à
        approfondir mes connaissances et mes compétences dans ce domaine.
        <br />
        <br />
        Je suis actuellement en alternance dans une entreprise, où je me forme
        au développement web (FullStack) avec le framework{" "}
        <span className="inline-flex items-center align-middle rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100">
          <Image
            alt="Next.Js"
            src="/icones/nextjs.png"
            width={20}
            height={20}
            className="mr-2"
          />
          NextJs
        </span>{" "}
        et les technologies telles que{" "}
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
        ,{" "}
        <span className="inline-flex items-center align-middle rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100">
          <Image
            alt="React"
            src="/icones/typescript.png"
            width={20}
            height={20}
            className="mr-2"
          />
          TypeScript
        </span>{" "}
        ainsi que{" "}
        <span className="inline-flex items-center align-middle rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100">
          <Image
            alt="React"
            src="/icones/prisma.png"
            width={20}
            height={20}
            className="mr-2"
          />
          Prisma
        </span>{" "}
        et{" "}
        <span className="inline-flex items-center align-middle rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100">
          <Image
            alt="React"
            src="/icones/postgresql.png"
            width={20}
            height={20}
            className="mr-2"
          />
          PostgreSQL
        </span>{" "}
        pour la gestion de base de données.
      </p>
    </div>
  );
}
