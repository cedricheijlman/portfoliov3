import { NextPage } from "next";
import React from "react";

import styles from "./Projects.module.css";

const Projects: NextPage = () => {
  return (
    <section id="projects" className={styles.section}>
      <div className={styles.title}>
        <h1>Projects</h1>
      </div>

      <div className={styles.row}>
        <div className={styles.rowItem}>Row Item 1</div>
        <div className={styles.rowItem}>Row Item 2</div>
        <div className={styles.rowItem}>Row Item 3</div>
      </div>
    </section>
  );
};

export default Projects;
