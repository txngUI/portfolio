import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import { useMounted } from "../hooks/use-mounted";

type SkillChipProps = {
  chip: Skill;
};

export default function SkillChip({ chip }: SkillChipProps) {
  const { theme, systemTheme } = useTheme();
  const isMounted = useMounted();

  const isDark =
    theme === "dark" || (theme === "system" && systemTheme === "dark");

  if (!isMounted) return null;

  return (
    <div className="flex flex-row items-center w-fit justify-center p-1 border-[1px] border-bordercolor rounded-md bg-background transition-colors">
      <Image
        alt={chip.title}
        src={isDark ? `/icones/${chip.iconedarkmode}` : `/icones/${chip.icone}`}
        width={20}
        height={20}
        className="mr-2"
      />
      <p className="text-sm mr-1">{chip.title}</p>
    </div>
  );
}
