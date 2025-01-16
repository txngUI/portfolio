import { Inconsolata } from "@next/font/google";
import Image from "next/image";
import profileLightMode from "@/public/images/profile-light-mode.png";
// import profileDarkMode from "@/public/images/profile-dark-mode.png";
import TypingAnimation from "../components/ui/typing-animation";

const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function Header() {
  return (
    <div className="flex flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row 2xl:flex-row justify-center items-center">
      <Image
        alt="profile light mode"
        src={profileLightMode}
        width={150}
        height={150}
        className="2xl:mr-8 xl:mr-8 mb-2"
      />
      <div className="flex flex-col xl:w-3/5 2xl:w-3/5 justify-center items-center text-center sm:w-full md:w-full lg:w-full">
        <p className="font-['Ink_Free'] text-6xl mb-4 dark:text-white dark:opacity-100 text-black opacity-50">
          Tanguy DAVID
        </p>
        <TypingAnimation
          className={`${inconsolata.className} text-2xl dark:text-white text-black opacity-50 font-thin`}
          text="Développeur Fullstack"
        />
        <div className="flex flex-col sm:flex-row sm:justify-center items-center md:flex-row lg:flex-row md:justify-evenly lg:justify-evenly xl:justify-evenly 2xl:justify-evenly w-full mt-4">
          <a href="mailto:tanguy.davidpro85@gmail.com">
            <span className="mt-4 w-fit inline-flex items-center align-middle rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100">
              <Image
                alt="Email"
                src="/icones/mail.png"
                width={20}
                height={20}
                className="mr-2 opacity-60"
              />
              <p className="text-neutral-500">tanguy.davidpro85@gmail.com</p>
            </span>
          </a>
          <a
            href="https://github.com/txngUI"
            target="_blank"
            rel="https://github.com/txngUI"
          >
            <span className="mt-4 w-fit inline-flex items-center align-middle rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100">
              <Image
                alt="Next.Js"
                src="/icones/github.png"
                width={20}
                height={20}
                className="mr-2 opacity-60"
              />
              <p className="text-neutral-500">@txngUI</p>
            </span>
          </a>
          <a href="/documents/cv.pdf" target="_blank" rel="/documents/cv.pdf">
            <span className="mt-4 w-fit inline-flex items-center align-middle rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100">
              <Image
                alt="Next.Js"
                src="/icones/download.png"
                width={20}
                height={20}
                className="mr-2 opacity-60"
              />
              <p className="text-neutral-500">Mon CV</p>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
