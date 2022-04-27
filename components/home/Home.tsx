import { NextPage } from "next";
import React from "react";

import styles from "./Home.module.css";

const Home: NextPage = () => {
  return (
    <section className={styles.section}>
      <div className={styles.hero}>
        <h2>
          Hey i'm <span>Cedric Heijlman.</span>
        </h2>
        <p>Software Developer Student</p>
        <p className={styles.bio}>
          High level experience in fullstack Web development and producing
          quality work.
        </p>
      </div>
    </section>
  );
};

export default Home;
