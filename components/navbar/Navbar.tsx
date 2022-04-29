import { NextPage } from "next";
import React from "react";

import styles from "./Navbar.module.css";
import { Link } from "react-scroll";

const Navbar: NextPage = () => {
  return (
    <div className={styles.container}>
      <h2>Cedric Heijlman</h2>
      <div className={styles.rightNav}>
        <ul>
          <li>Home</li>
          <Link smooth={true} to="about">
            <li>About</li>
          </Link>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
        <a target="_blank" href="https://github.com/cedricheijlman">
          <img src="./githubIcon.svg" />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/cedricheijlman/">
          <img src="./linkedinIcon.svg" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
