import { NextPage } from "next";
import React from "react";
import styles from "./Contact.module.css";

const Contact: NextPage = () => {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.title}>
        <h1>Contact</h1>
      </div>

      <div className={styles.contactRow}>
        <div className={styles.contactText}>
          <p>
            I'd love to hear from you. Have thoughts? Comments? Ideas? Whatever
            your doubt may be, I'm here to listen.
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
