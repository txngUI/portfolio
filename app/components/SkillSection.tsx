import SkillChip from "./SkillChip";

type SkillSectionProps = {
  title: string;
  chips: Skill[];
};

export default function SkillSection({ title, chips }: SkillSectionProps) {
  return (
    <div className="w-full mb-6">
      <p className="text-fontcolor text-xl mb-2">{title}</p>
      <div className="flex flex-wrap justify-start gap-x-4 gap-y-4 mt-2">
        {chips.map((chip) => (
          <SkillChip key={chip.title} chip={chip} />
        ))}
      </div>
    </div>
  );
}
