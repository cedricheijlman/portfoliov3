import { NextPage } from "next";
import React from "react";
import styles from "./Contact.module.css";

const Contact: NextPage = () => {
  return (
    <section className={styles.section}>
      <div className={styles.title}>
        <h1>Contact</h1>
      </div>

      <div className={styles.contactRow}>
        <div className={styles.contactText}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, et
            odit. Voluptate non nisi laborum! Accusamus corrupti eos in
            incidunt!
          </p>
        </div>
        <form className={styles.form}>
          <label>Name</label>
          <input placeholder="First and Last Name" />
          <label>Email</label>
          <input placeholder="Email Address" />
          <label>Message</label>
          <textarea placeholder="Your message here. " />
          <div>
            <button className={styles.submitButton}>Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
