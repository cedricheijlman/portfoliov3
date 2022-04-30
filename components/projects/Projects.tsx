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
        <div className={styles.rowItem}>
          <div className={styles.imgContainer}>Image</div>
          <div className={styles.projectText}>
            <h3>Project Name</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              molestias odio aliquid rem quos amet reprehenderit expedita
              ducimus odit illum.
            </p>
            <button>More Info</button>
          </div>
        </div>
        <div className={styles.rowItem}>
          <div className={styles.imgContainer}>Image</div>
          <div className={styles.projectText}>
            <h3>Project Name</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              molestias odio aliquid rem quos amet reprehenderit expedita
              ducimus odit illum.
            </p>
            <button>More Info</button>
          </div>
        </div>
        <div className={styles.rowItem}>
          <div className={styles.imgContainer}>Image</div>
          <div className={styles.projectText}>
            <h3>Project Name</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              molestias odio aliquid rem quos amet reprehenderit expedita
              ducimus odit illum.
            </p>
            <button>More Info</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
