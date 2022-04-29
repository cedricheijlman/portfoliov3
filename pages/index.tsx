import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import About from "../components/about/About";
import Home from "../components/home/Home";
import Skills from "../components/skills/Skills";
import styles from "../styles/Home.module.css";

const Index: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio Cedric Heijlman</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
      <About />
      <Skills />
    </div>
  );
};

export default Index;
