import { NextPage } from "next";
import React from "react";
import styles from "./Skills.module.css";

import SkillsItem from "./SkillsItem";

const skillsArr = [
  {
    title: "HTML",
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg",
  },
  {
    title: "CSS",
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg",
  },
  {
    title: "Javascript",
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg",
  },
  {
    title: "Typescript",
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg",
  },
  {
    title: "React",
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },

  {
    title: "Next JS",
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
  },
  {
    title: "Redux",
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  },
  {
    title: "Node JS",
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg",
  },
  {
    title: "Express",
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    title: "PHP",
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg",
  },
  {
    title: "Sequelize",
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg",
  },
  {
    title: "MongoDB",
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg",
  },
  {
    title: "MySQL",
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain.svg",
  },
  {
    title: "Postgres",
    imgSrc:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg",
  },
];

const Skills: NextPage = () => {
  return (
    <section id="skills" className={styles.section}>
      <div className={styles.title}>
        <h1>Skills</h1>
      </div>

      <div className={styles.row}>
        {skillsArr.map(
          (item: { title: string; imgSrc: string }, index: number) => {
            return (
              <SkillsItem title={item.title} key={index} imgSrc={item.imgSrc} />
            );
          }
        )}
      </div>
    </section>
  );
};

export default Skills;
