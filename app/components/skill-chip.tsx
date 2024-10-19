import Image from 'next/image';

type SkillChipProps = {
  title: string;
  icon: string;
};

export default function SkillChip({ title, icon }: SkillChipProps) {
  return (
    <div className="flex flex-row items-center justify-between mr-10 px-2 py-2 border-2 border-gray-200 text-gray-500 rounded-md shadow-sm bg-transparent hover:shadow-md hover:cursor-pointer duration-300">
      {icon && (
      <Image
        alt={title}
        src={icon}
        width={25}
        height={25}
        className='mr-2'
      />
      )}
      <span className={`text-xs font-semibold`}>{title}</span>
    </div>
  );
}
