import { Inconsolata } from '@next/font/google';
import Image from 'next/image';
import profileLightMode from '@/public/images/profile-light-mode.png';
import profileDarkMode from '@/public/images/profile-dark-mode.png';

const inconsolata = Inconsolata({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function Header({darkMode} : {darkMode: boolean}) {
  return (
    <div className="flex flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row 2xl:flex-row justify-center items-center">
      <Image
      alt="profile light mode"
      src={ darkMode ? profileDarkMode : profileLightMode}
      width={150}
      height={150}
      className="2xl:mr-8 xl:mr-8 mb-2"
      />
      <div className="flex flex-col justify-center items-center text-center ">
        <p className="font-['Ink_Free'] text-6xl mb-4 dark:text-white dark:opacity-100 text-black opacity-50">Tanguy DAVID</p>
        <p className={`${inconsolata.className} text-2xl dark:text-white text-black opacity-50`}>Développeur web & mobile</p>
      </div>
    </div>
  );
}
