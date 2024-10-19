import SkillSection from "../components/skill-section";

const data_skills = [
  {
    name_skill: "en développement web",
    skills: [
      { name: "PHP", icon: "/icones/php.png" },
      { name: "TypeScript", icon: "/icones/typescript.png" },
      { name: "NextJS", icon: "/icones/nextjs.png" },
      { name: "JavaScript", icon: "/icones/javascript.png" },
      { name: "TailwindCSS", icon: "/icones/tailwindcss.png" },
    ],
  },
  {
    name_skill: "en programmation orienté objet",
    skills: [
      { name: "Java", icon: "/icones/java.png" },
      { name: "C++", icon: "/icones/c++.png" },
      { name: "Python", icon: "/icones/python.png" }
    ],
  },
  {
    name_skill: "en base de données et ORM",
    skills: [
      { name: "Prisma", icon: "/icones/prisma.png" },
      { name: "PowerBI", icon: "/icones/power_bi.png" },
      { name: "MongoDB", icon: "/icones/mongodb.png" },
      { name: "SQL", icon: "/icones/sql.png" },
      { name: "PostgreSQL", icon: "/icones/postgresql.png" },
    ],
  },
  {
    name_skill: "en gestion de projet",
    skills: [
      { name: "Github", icon: "/icones/github_x48.png" },
      { name: "Jira", icon: "/icones/jira.png" },
      { name: "Trello", icon: "/icones/trello.png" },
      { name: "Figma", icon: "/icones/figma.png" }
    ],
  },
  {
    name_skill: "autres",
    skills: [
      { name: "Flutter", icon: "/icones/flutter.png" },
      { name: "Docker", icon: "/icones/docker.png" },
      { name: "Blender", icon: "/icones/blender.png" }
    ],
  },
];

export default function Skills() {
  return (
    <div className="text-justify mt-10">
      <h1 className="title">Mes compétences</h1>
      {data_skills.map((skill, index) => (
        <SkillSection
          key={index}
          title={skill.name_skill}
          skills={skill.skills}
        />
      ))}
    </div>
  );
}
