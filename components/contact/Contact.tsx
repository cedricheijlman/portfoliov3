import { NextPage } from "next";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";
import { FormEvent } from "react";

const Contact: NextPage = () => {
  const form: any = useRef<HTMLFormElement | undefined>();

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        String(process.env.NEXT_PUBLIC_SERVICE_ID),
        String(process.env.NEXT_PUBLIC_TEMPLATE_ID),
        form.current,
        String(process.env.NEXT_PUBLIC_PUBLIC_KEY)
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
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
        <form ref={form} onSubmit={sendEmail} className={styles.form}>
          <label>Name</label>
          <input
            type="text"
            name="user_name"
            placeholder="First and Last Name"
          />
          <label>Email</label>
          <input type="email" name="user_email" placeholder="Email Address" />
          <label>Message</label>
          <textarea name="message" placeholder="Your message here. " />
          <div>
            <button className={styles.submitButton}>Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
