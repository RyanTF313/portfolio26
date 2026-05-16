import { ContactForm } from './ContactForm';
import styles from './Contact.module.css';

export function Contact() {
  return (
    <section
      className={styles.contact}
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className={styles.container}>
        <h2 id="contact-heading" className={styles.heading}>
          Contact Me
        </h2>
        <p className={styles.subheading}>
          Have a project in mind or want to collaborate? Drop me a message and
          I&apos;ll get back to you soon.
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
