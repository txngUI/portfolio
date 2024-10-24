import { Inconsolata } from "@next/font/google";
import LinkButton from "../components/ui/link-button";
import { DarkMode } from "@mui/icons-material";

const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function About({darkMode}: {darkMode: boolean}) {
  const birthday = new Date(2004, 0, 2);
  const today = new Date();

  let age = today.getFullYear() - birthday.getFullYear();
  const monthDifference = today.getMonth() - birthday.getMonth();

  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthday.getDate())) {
    age--;
  }

  return (
    <div className="text-justify mt-10">
      <h1 className="title">A propos de moi</h1>
      <p className={`${inconsolata.className} dark:text-white text-black opacity-50`}>
        Etudiant et jeune développeur de {age} ans, je me passionne dans le
        développement web et mobile mais aussi la modélisation 3D et le montage
        vidéo. <br />
        <br /> J&apos;étudie actuellement ma 3ème année en BUT Informatique
        spécialisé dans la réalisation d&apos;applications (conception,
        développement,validation). <br />
        <br /> J&apos;ai la chance de suivre cette formation en alternance dans
        une entreprise où je me forme au développement web avec le framework
        NextJS et les technologies tel que React, TypeScript ainsi que Prisma et
        PostgreSQL pour la gestion de base de données.
      </p>
      <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row 2xl:flex-row sm:items-center md:items-center lg:justify-center xl:justify-center 2xl:justify-center items-center mt-6">
        <LinkButton
          text="txngUI"
          icon={darkMode ? "/icones/github_darkmode.png" : "/icones/github.png"}
          link="https://github.com/txngUI"
        />
        <LinkButton text="CV" icon={darkMode ? "/icones/download_darkmode.png" : "/icones/download.png"} link="/documents/cv.pdf" />
        <LinkButton text="CV Vidéo" icon={darkMode ? "/icones/video_darkmode.png" : "/icones/video.png"} link="https://youtu.be/zvTgE99sYyQ" />
      </div>
    </div>
  );
}
