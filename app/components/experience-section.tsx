import { Timeline } from "flowbite-react";
import SimpleButton from "../components/simple-button";
import { Inconsolata } from "@next/font/google";
import { Titan_One } from "@next/font/google";
import BoxReveal from "../components/ui/box-reveal";

const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const titanOne = Titan_One({
  subsets: ["latin"],
  weight: ["400"],
});

type ExperienceSectionProps = {
    date: string;
    title: string;
    description: string | JSX.Element;
    link: string;
  };
  

  export const ExperienceSection = ({
    date,
    title,
    description,
    link,
  }: ExperienceSectionProps) => {
    return (
      <Timeline.Item>
        <Timeline.Point />
        <Timeline.Content>
          <BoxReveal duration={0.5}>
            <Timeline.Time
              className={`${inconsolata.className} text-lg font-bold opacity-85 dark:text-white dark:opacity-60`}
            >
              {date}
            </Timeline.Time>
          </BoxReveal>
          <BoxReveal duration={0.5}>
            <Timeline.Title
              className={`${titanOne.className} text-2xl text-gray-500 opacity-85`}
            >
              {title}
            </Timeline.Title>
          </BoxReveal>
          <BoxReveal duration={0.5}>
            <Timeline.Body
              className={`${inconsolata.className} text-sm opacity-80`}
            >
              {description}
            </Timeline.Body>
          </BoxReveal>
          <BoxReveal duration={0.5}>
            <SimpleButton title="Voir l'entreprise" link={link} />
          </BoxReveal>
        </Timeline.Content>
      </Timeline.Item>
    );
  };
  