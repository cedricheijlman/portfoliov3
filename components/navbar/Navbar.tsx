import { NextPage } from "next";
import React from "react";

import styles from "./Navbar.module.css";
import { Link } from "react-scroll";

const Navbar: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.rightNav}>
        <ul>
          <Link smooth={true} to="home">
            <li>Home</li>
          </Link>
          <Link smooth={true} to="about">
            <li>About</li>
          </Link>
          <Link smooth={true} to="skills">
            <li>Skills</li>
          </Link>
          <Link smooth={true} to="projects">
            <li>Projects</li>
          </Link>
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
