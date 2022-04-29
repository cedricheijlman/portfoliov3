import { NextPage } from "next";
import React from "react";
import styles from "./Skills.module.css";

interface Props {
  imgSrc: string;
  title: string;
}

const SkillsItem: NextPage<Props> = ({ imgSrc, title }) => {
  return (
    <div className={styles.item}>
      <img src={imgSrc} />
      <p>{title}</p>
    </div>
  );
};

export default SkillsItem;
