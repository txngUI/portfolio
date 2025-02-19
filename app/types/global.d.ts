// types/global.d.ts
export {};

declare global {
  type Project = {
    id: number;
    name: string;
    description: string;
    image: string;
    link: string;
    icones: Icon[];
    type: string;
  };

  type Icon = {
    name: string;
    image: string;
  };

  type SkillSection = {
    skillsection: string;
    chips: Skill[];
  };

  type Skill = {
    title: string;
    icone: string;
    iconedarkmode: string;
  };
}
