import { NextPage } from "next";
import React from "react";

import styles from "./Navbar.module.css";

const Navbar: NextPage = () => {
  return (
    <div className={styles.container}>
      <h2>Cedric Heijlman</h2>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Projects</li>
        <button>Contact</button>
      </ul>
    </div>
  );
};

export default Navbar;
