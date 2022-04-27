import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Home from "../components/home/Home";
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
    </div>
  );
};

export default Index;
