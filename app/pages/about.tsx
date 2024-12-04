import { Inconsolata } from "@next/font/google";
import NumberTicker from "../components/ui/number-ticker";
// import Image from "next/image";

const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function About() {
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
          delay={0.5}
          className="text-black text-opacity-50"
          value={age}
        />{" "}
        ans, je suis en <b>troisième année de BUT Informatique</b> (parcours A), cursus dans lequel
        je me spécialise dans la <b>réalisation d&apos;applications</b>, englobant la
        conception, le développement et la validation. Ma <b>passion</b> pour le
        développement s&apos;est développée au fil des années, me poussant à
        approfondir mes connaissances et mes compétences dans ce domaine. Je
        porte par ailleurs un intéret spécial pour le <b>développement logiciel</b> qu&apos;il soit web, local ou mobile.
      </p>
    </div>
  );
}
