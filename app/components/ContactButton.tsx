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
    <a rel={link} href={link} target="_blank">
      <span className="flex items-center my-2 py-1 px-2 border-2 border-bordercolor rounded-md bg-foreground">
        {icon}
        <p className="ml-2  whitespace-nowrap">{text}</p>
      </span>
    </a>
  );
}
