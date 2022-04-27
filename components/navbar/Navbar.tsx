import { NextPage } from "next";
import React from "react";

import styles from "./Navbar.module.css";

const Navbar: NextPage = () => {
  return (
    <div className={styles.container}>
      <h2>Cedric Heijlman</h2>
      <div className={styles.rightNav}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
        <img src="./githubIcon.svg" />
        <img src="./linkedinIcon.svg" />
      </div>
    </div>
  );
};

export default Navbar;
