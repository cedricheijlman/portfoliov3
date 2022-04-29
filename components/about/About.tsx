import { NextPage } from "next";
import React from "react";
import styles from "./About.module.css";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";

const About: NextPage = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.title}>
        <h1>About Me</h1>
      </div>
      <div className={styles.bio}>
        <div className={styles.left}>
          <p>
            Hello i'm Cedric, 16 years old and I live in the Netherlands. I'm
            currently a Software Development Student at ROC MBO Flevoland.
            September 2021 I started my coding journey with no prior coding
            skills, firstly started learning HTML, CSS and Javascript, after
            that I learned some backend languages to be able to make full-stack
            MAMP applications. 2021 December - 2021 Februari I started learning
            the frontend framework React and learning the full MERN Stack.
          </p>
        </div>
        <div className={styles.right}>
          <div className={styles.iconInfo}>
            <LocationOnOutlinedIcon className={styles.icon} />
            <p>Almere, Netherlands</p>
          </div>
          <div className={styles.iconInfo}>
            <GitHubIcon className={styles.icon} />
            <p>cedricheijlman</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
