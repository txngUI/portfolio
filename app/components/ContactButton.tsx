type ContactButtonProps = {
  text: string;
  link: string;
  icon: any;
};

export default function ContactButton({
  text,
  link,
  icon,
}: ContactButtonProps) {
  return (
    <a rel={link} href={link} target="_blank" className="flex justify-center">
      <span className="flex text-sm items-center w-fit my-2 py-1 px-2 border-[1px] border-bordercolor rounded-md bg-foreground">
        {icon}
        <p className="ml-2 whitespace-nowrap">{text}</p>
      </span>
    </a>
  );
}
