import SkillSection from "../components/skill-section";

export default function Skills({ darkMode }: { darkMode: boolean }) {
  const slugs = [
    "typescript",
    "javascript",
    "dart",
    "java",
    "react",
    "flutter",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "sonarqube",
    "figma",
  ];

  const data_skills = [
    {
      name_skill: "en développement web",
      skills: [
        {
          name: "PHP",
          icon: "/icones/php.png",
          description:
            "PHP est un langage de script côté serveur, utilisé pour créer des pages web dynamiques. Facile à apprendre, il s'intègre bien avec des bases de données comme MySQL. Il est compatible avec la plupart des serveurs et a une grande communauté active, fournissant de nombreux outils et frameworks.",
        },
        {
          name: "TypeScript",
          icon: "/icones/typescript.png",
          description:
            "TypeScript est un sur-ensemble de JavaScript qui ajoute un typage statique, facilitant la détection des erreurs dès le développement. Il améliore la lisibilité et la maintenabilité du code.",
        },
        {
          name: "NextJS",
          icon: "/icones/nextjs.png",
          description:
            "Next.js est un framework React qui permet de créer des applications web optimisées avec rendu côté serveur (SSR) et génération de sites statiques (SSG). Il offre un routage simplifié, une meilleure performance et un SEO amélioré. Avec des fonctionnalités comme l'internationalisation et les API intégrées, il est idéal pour les applications modernes et scalables.",
        },
        {
          name: "JavaScript",
          icon: "/icones/javascript.png",
          description:
            "JavaScript est un langage de programmation essentiel pour le développement web, permettant de créer des interfaces interactives et dynamiques. Il fonctionne côté client dans tous les navigateurs, rendant les sites plus réactifs. Polyvalent, il est utilisé aussi bien pour le front-end que le back-end (avec Node.js).",
        },
        {
          name: "TailwindCSS",
          icon: "/icones/tailwindcss.png",
          description:
            "Tailwind CSS est un framework utilitaire qui facilite le stylage des interfaces en fournissant des classes prédéfinies directement dans le HTML. Il permet une personnalisation rapide et maintenable, sans écrire de CSS manuel. Flexible et léger, il réduit la redondance et la taille des fichiers CSS.",
        },
        {
          name: "React",
          icon: "/icones/react.png",
          description:
            "React est une bibliothèque JavaScript développée pour créer des interfaces utilisateur dynamiques. Elle repose sur des composants réutilisables et gère efficacement l'état des applications.",
        },
        {
          name: "Vite Js",
          icon: "/icones/vitejs.png",
          description:
            "Vite.js est un outil de construction moderne pour les applications web qui offre un développement rapide grâce à un rechargement instantané. Compatible avec divers frameworks comme Vue et React, Vite simplifie la configuration et accélère le flux de travail des développeurs.",
        },
        {
          name: "Node JS",
          icon: "/icones/nodejs.png",
          description:
            "Node.js est un environnement d'exécution JavaScript côté serveur. Il utilise un modèle asynchrone et événementiel, optimisant la gestion des connexions simultanées. Avec un vaste écosystème de packages via npm, Node.js facilite le développement d'applications full-stack et d'API REST.",
        },
        {
          name: "HTML",
          icon: "/icones/html.png",
          description:
            "HTML (HyperText Markup Language) est le langage standard de balisage pour créer des pages web. Il structure le contenu en utilisant des éléments comme des titres, des paragraphes et des images.",
        },
        {
          name: "CSS",
          icon: "/icones/css.png",
          description:
            "CSS (Cascading Style Sheets) est un langage de style utilisé pour décrire l'apparence et la mise en page des documents HTML. Il permet de séparer le contenu de la présentation, facilitant ainsi la gestion du design.",
        },
      ],
    },
    {
      name_skill: "en programmation orienté objet",
      skills: [
        {
          name: "Java",
          icon: "/icones/java.png",
          description:
            "Java est un langage de programmation polyvalent et orienté objet, largement utilisé pour le développement d'applications d'entreprise, mobiles et web. Sa portabilité est assurée par la machine virtuelle Java (JVM), permettant d'exécuter des applications sur différentes plateformes. ",
        },
        {
          name: "C++",
          icon: darkMode ? "/icones/c++_darkmode.png" : "/icones/c++.png",
          description:
            "C++ est un langage de programmation polyvalent et performant, dérivé du langage C, qui prend en charge la programmation orientée objet. Utilisé pour le développement de logiciels systèmes, d'applications performantes et de jeux vidéo. Sa capacité à gérer la mémoire font de lui un choix idéal pour des projets nécessitant efficacité et vitesse.",
        },
        {
          name: "Python",
          icon: "/icones/python.png",
          description:
            "Python est un langage de programmation polyvalent et facile à apprendre, reconnu pour sa syntaxe claire et sa lisibilité. Utilisé dans divers domaines, tels que l'analyse de données, l'intelligence artificielle, l'automatisation, et le développement web, Python dispose d'une vaste bibliothèque standard et d'un écosystème riche. ",
        },
      ],
    },
    {
      name_skill: "en base de données et ORM",
      skills: [
        {
          name: "Prisma",
          icon: darkMode
            ? "/icones/prisma_dark_mode.png"
            : "/icones/prisma.png",
          description:
            "Prisma est un ORM (Object-Relational Mapping) moderne pour Node.js et TypeScript, facilitant l'interaction avec les bases de données. Il offre un modèle de données typé et génère automatiquement des requêtes SQL, ce qui améliore la productivité des développeurs. Prisma supporte plusieurs bases de données et inclut des fonctionnalités avancées comme la migration des schémas.",
        },
        {
          name: "PowerBI",
          icon: "/icones/power_bi.png",
          description:
            "Power BI est un outil d'analyse de données de Microsoft, permettant de créer des rapports interactifs et des tableaux de bord à partir de très grandes base de données avec un traitement rapide et efficace. Il facilite la visualisation des données et la prise de décisions éclairées.",
        },
        {
          name: "MongoDB",
          icon: "/icones/mongodb.png",
          description:
            "MongoDB est une base de données NoSQL orientée documents, conçue pour stocker des données non structurées et évolutives. Elle utilise un format JSON pour représenter les données, facilitant les requêtes flexibles et la manipulation des données.",
        },
        {
          name: "SQL",
          icon: darkMode ? "/icones/sql_darkmode.png" : "/icones/sql.png",
          description:
            "SQL (Structured Query Language) est un langage standard pour gérer et interroger des bases de données relationnelles. Il permet de créer, modifier et manipuler des données",
        },
        {
          name: "PostgreSQL",
          icon: "/icones/postgresql.png",
          description:
            "PostgreSQL est un système de gestion de bases de données relationnelles open-source. Il supporte des fonctionnalités avancées comme les types de données personnalisés et les requêtes JSON, étant idéal pour les applications nécessitant performances et scalabilité.",
        },
      ],
    },
    {
      name_skill: "en gestion de projet",
      skills: [
        {
          name: "Github",
          icon: darkMode
            ? "/icones/github_darkmode.png"
            : "/icones/github_x48.png",
          description:
            "GitHub est une plateforme de gestion de versions basée sur Git, permettant aux développeurs de stocker, partager et collaborer sur des projets de code. Elle facilite les pull requests, les revues de code et offre des outils d'intégration continue",
        },
        {
          name: "Jira",
          icon: "/icones/jira.png",
          description:
            "Jira est un outil de gestion de projets, conçu principalement pour les équipes agiles. Il permet de planifier, suivre et gérer les tâches, les sprints et les bugs, facilitant la collaboration au sein des équipes. Avec des tableaux Kanban et Scrum, Jira optimise la productivité et la transparence des projets.",
        },
        {
          name: "Trello",
          icon: "/icones/trello.png",
          description:
            "Trello est un outil de gestion de projets visuel basé sur le concept de tableaux, cartes et listes. Il permet aux équipes d'organiser et de suivre des tâches de manière intuitive et collaborative. Avec ses fonctionnalités de glisser-déposer, Trello facilite la planification et la priorisation des projets tout en offrant une vue d'ensemble claire.",
        },
        {
          name: "Figma",
          icon: "/icones/figma.png",
          description:
            "Figma est un outil de conception d'interface et de prototypage basé sur le cloud, permettant la collaboration en temps réel. Il offre des fonctionnalités de conception vectorielle, de création de prototypes interactifs et de gestion des composants.",
        },
      ],
    },
    {
      name_skill: "autres",
      skills: [
        {
          name: "Flutter",
          icon: "/icones/flutter.png",
          description:
            "Flutter est un framework open-source de développement d'applications mobiles et web, créé par Google. Il permet de créer des interfaces utilisateur nativement compilées à partir d'une seule base de code. Avec sa riche bibliothèque de widgets et son architecture réactive, Flutter facilite la création d'applications performantes et esthétiques pour Android et iOS.",
        },
        {
          name: "Docker",
          icon: "/icones/docker.png",
          description:
            "Docker est une plateforme de virtualisation qui permet de créer, déployer et exécuter des applications dans des conteneurs légers. Docker facilite la gestion des applications, améliore la portabilité et simplifie le déploiement dans des environnements de production.",
        },
        {
          name: "Blender",
          icon: "/icones/blender.png",
          description:
            "Blender est un logiciel open-source de création 3D, utilisé pour la modélisation, l'animation, le rendu et la simulation.",
        },
      ],
    },
  ];

  return (
    <div className="text-justify mt-10 w-full">
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
