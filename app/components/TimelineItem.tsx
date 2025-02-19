import { Button, Timeline } from "flowbite-react";
import { HiCalendar } from "react-icons/hi";

type TimelineItemProps = {
    time: string;
    title: string;
    subtitle: string;
    body: React.ReactNode;
    link: string;
    linkTitle: string;
};

export default function TimelineItem({ time, title, subtitle, body, link, linkTitle } : TimelineItemProps) {
  return (
    <Timeline.Item className="w-full">
      <Timeline.Point icon={HiCalendar} />
      <Timeline.Content className="mt-6">
        <Timeline.Time>{time}</Timeline.Time>
        <Timeline.Title>{title}</Timeline.Title>
        <Timeline.Body>
          {subtitle}
        </Timeline.Body>
        <Timeline.Body className="text-justify text-sm">
          {body}
        </Timeline.Body>
        <Button color="gray">
          <a href={link} target="_blank">
            {linkTitle}
          </a>
        </Button>
      </Timeline.Content>
    </Timeline.Item>
  );
}
