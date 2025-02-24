import abilitiesJson from "@/public/data/abilities.json";
import PrototypeCard from "./PrototypeCard";
import CodeCard from "./CodeCard";

type Icon = {
  name: string;
  image: string;
};

type Project = {
  id: number;
  name: string;
  description: string;
  image: string;
  link: string;
  type: string;
  icones: Icon[];
};

type Ability = {
  id: number;
  ability: string;
  name: string;
  year: number[];
  targets: string[];
  criticals_learnings: string[][];
  content: (string[] | Project[])[][];
};

export default function SkillContent({
  academicYear,
  skill,
}: {
  academicYear: number;
  skill: number;
}) {
  const abilities: Ability[] = abilitiesJson.abilities;

  // Vérifier si la compétence actuelle est valide pour l'année sélectionnée
  const isSkillValid = abilities.some(
    (e) => e.id === skill && e.year.includes(academicYear)
  );

  // Si la compétence n'est pas valide, prendre la première compétence disponible pour l'année
  const validSkill = isSkillValid
    ? skill
    : abilities.find((e) => e.year.includes(academicYear))?.id || 1;

  const abilitySelected = abilities.find((e) => e.id === validSkill);

  if (!abilitySelected) {
    return <p className="text-center text-red-500">Compétence non trouvée</p>;
  }

  const { name, targets, criticals_learnings, content } = abilitySelected;
  const yearIndex = academicYear - 1;
  const target = targets[yearIndex] || "Objectif non défini";
  const learnings = criticals_learnings?.[yearIndex] || [];
  const yearContent = content[yearIndex] || [];

  return (
    <div className="w-full flex flex-col items-center justify-center mb-8">
      <p className="w-full text-center mt-4 text-2xl">{name}</p>

      <div className="w-full mt-4">
        <p className="text-center mb-4">L&apos;objectif est : {target}</p>

        {learnings.length > 0 && (
          <div>
            {learnings.map((learning, i) => (
              <p key={i}>
                - <b>Apprentissage critique {i + 1} :</b> {learning}
              </p>
            ))}
          </div>
        )}
      </div>

      <table className="w-full text-sm mt-4 border-collapse border border-bordercolor table-fixed">
        <thead>
          <tr className="bg-foreground">
            <th className="border border-bordercolor text-fontcolor p-2 w-1/3">
              Acquis
            </th>
            <th className="border border-bordercolor text-fontcolor p-2 w-1/3">
              En cours d'acquisition
            </th>
            <th className="border border-bordercolor text-fontcolor p-2 w-1/3">
              Non acquis
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-bordercolor p-2 w-1/3">
              <ul>
                {yearContent[0].map(
                  (e, i) => typeof e === "string" && <li key={i}> - {e}</li>
                )}
              </ul>
            </td>
            <td className="border border-bordercolor p-2 w-1/3">
              <ul>
                {yearContent[1].map(
                  (e, i) => typeof e === "string" && <li key={i}> - {e}</li>
                )}
              </ul>
            </td>
            <td className="border border-bordercolor p-2 w-1/3">
              <ul>
                {yearContent[2].map(
                  (e, i) => typeof e === "string" && <li key={i}> - {e}</li>
                )}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
      <p className="text-xl mt-8 mb-8 text-left w-full">Traces : </p>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 self-center w-full px-4">
          {yearContent[3].map((e) => {
            const project = e as Project;
            if (project.type === "prototype") {
              return <PrototypeCard key={project.id} project={project} />;
            } else if (project.type === "code" || project.type === "project") {
              return <CodeCard key={project.id} project={project} />;
            }
          })}
        </div>
        <div className="mt-4">
          {yearContent[3].map((e) => {
            const project = e as Project;
            if (project.type === "simple") {
              return (
                <p key={project.id}>
                  <b>{project.name}</b> : {project.description}
                </p>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
