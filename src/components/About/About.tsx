import { FiDownload } from 'react-icons/fi';
import { aboutContent } from '../../data/about';
import styles from './About.module.css';

export function About() {
  return (
    <section
      className={styles.about}
      id="about"
      aria-labelledby="about-heading"
    >
      <div className={styles.container}>
        <h2 id="about-heading" className={styles.heading}>
          About Me
        </h2>
        <p className={styles.blurb}>{aboutContent.blurb}</p>
        <a
          href={aboutContent.resumePath}
          download={aboutContent.resumeDownloadName}
          className={styles.resumeLink}
        >
          Download Resume
          <FiDownload aria-hidden="true" className={styles.icon} />
        </a>
      </div>
    </section>
  );
}
