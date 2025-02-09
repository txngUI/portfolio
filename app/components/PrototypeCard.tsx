import Image from "next/image";

export default function PrototypeCard() {
  return (
    <div>
      <Image
        src="/images/champs_cie.png"
        alt="Prototype"
        width={200}
        height={200}
      />
    </div>
  );
}
