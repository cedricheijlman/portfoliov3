import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import Image from "next/image";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Home from "../components/home/Home";
import Projects from "../components/projects/Projects";
import Skills from "../components/skills/Skills";
import styles from "../styles/Home.module.css";

const Index: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Portfolio Cedric Heijlman</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Index;
