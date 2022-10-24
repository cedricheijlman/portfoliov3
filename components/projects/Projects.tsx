import { NextPage } from "next";
import Link from "next/link";
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
          <img
            alt="Discord Wallpaper"
            className={styles.imgContainer}
            src="https://wallpapers.com/images/hd/discord-dark-purple-vector-fbwpgfkg8zpjmuvh.jpg"
          />

          <div className={styles.projectText}>
            <h3>Discord Clone</h3>
            <p>I made an discord clone with the MERN Stack.</p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://discordcloneee.netlify.app/register"
            >
              <button>Open Site</button>
            </a>
          </div>
        </div>
        <div className={styles.rowItem}>
          <img
            alt="Movie Wallpaper"
            className={styles.imgContainer}
            src="https://c4.wallpaperflare.com/wallpaper/862/449/162/jack-reacher-star-wars-interstellar-movie-john-wick-wallpaper-preview.jpg"
          />
          <div className={styles.projectText}>
            <h3>Movie Finder Site</h3>
            <p>A site where you can find info about any movie or tv show.</p>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://reactmoviefinder3.netlify.app/"
            >
              <button>Open Site</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
