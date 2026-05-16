import { FiArrowRight } from 'react-icons/fi';
import type { Project } from '../../data/projects';
import styles from './ProjectCard.module.css';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={project.image}
          alt=""
          className={styles.image}
          loading="lazy"
          width={600}
          height={400}
        />
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
        <a
          href={project.url}
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          See more
          <FiArrowRight aria-hidden="true" className={styles.arrow} />
        </a>
      </div>
    </article>
  );
}
