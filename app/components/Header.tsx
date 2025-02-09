import Image from "next/image";
import ProfileImg from "@/public/images/profile.png";
import { Inconsolata } from "next/font/google";

const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Header() {
  return (
    <div className="flex items-center justify-center w-full">
      <Image
        src={ProfileImg}
        alt="Tanguy DAVID"
        width={150}
        height={150}
        className="rounded-full"
      />
      <div className="ml-4 text-center">
        <h1 className="text-center font-['Ink_Free'] text-6xl">
          Tanguy DAVID
        </h1>
        <p className={`${inconsolata.className} text-2xl mt-2 font-thin`}>
          Développeur fullstack
        </p>
      </div>
    </div>
  );
}
