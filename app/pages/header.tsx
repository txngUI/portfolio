import { Inconsolata } from '@next/font/google';
import Image from 'next/image';
import profileLightMode from '@/public/images/profile-light-mode.png';

const inconsolata = Inconsolata({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function Header() {
  return (
    <div className="flex justify-center items-center">
      <Image
        alt="profile light mode"
        src={profileLightMode}
        width={150}
        height={150}
        className="mr-8"
      />
      <div className="flex flex-col justify-center items-center text-center">
        <p className="font-['Ink_Free'] text-6xl mb-4 text-black opacity-50">Tanguy DAVID</p>
        <p className={`${inconsolata.className} text-2xl text-black opacity-50`}>Développeur web & mobile</p>
      </div>
    </div>
  );
}
