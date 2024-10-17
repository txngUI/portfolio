import { Inconsolata } from "@next/font/google";
import LinkButton from "../components/ui/link-button";

const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function About() {
  const birthday = new Date(2004, 0, 2);
  const today = new Date();

  const age = today.getFullYear() - birthday.getFullYear();

  if (today.getMonth() < birthday.getMonth()) {
    return age - 1;
  }

  if (
    today.getMonth() === birthday.getMonth() &&
    today.getDate() < birthday.getDate()
  ) {
    return age - 1;
  }

  return (
    <div className="text-justify mt-10">
      <h1 className="title">A propos de moi</h1>
      <p className={`${inconsolata.className} text-black opacity-50`}>
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
      <div className=" flex justify-center mt-6">
        <LinkButton
          text="txngUI"
          icon="/icones/github.png"
          link="https://github.com/txngUI"
        />
        <LinkButton text="CV" icon="/icones/download.png" link="/documents/cv.pdf" />
        <LinkButton text="CV Vidéo" icon="/icones/video.png" link="https://www.youtube.com/@TanguyDavid85" />
      </div>
    </div>
  );
}
