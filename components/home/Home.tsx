import { NextPage } from "next";
import React from "react";

import styles from "./Home.module.css";

const Home: NextPage = () => {
  return (
    <section className={styles.section}>
      <div className={styles.hero}>
        <h2>Cedric Heijlman</h2>
        <p>Software Developer Student</p>
      </div>
    </section>
  );
};

export default Home;
