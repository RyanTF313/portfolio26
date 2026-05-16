import { projects } from '../../data/projects';
import { ProjectCard } from './ProjectCard';
import styles from './Projects.module.css';

export function Projects() {
  return (
    <section
      className={styles.projects}
      id="projects"
      aria-labelledby="projects-heading"
    >
      <div className={styles.container}>
        <h2 id="projects-heading" className={styles.heading}>
          Projects
        </h2>
        <p className={styles.subheading}>
          A selection of recent work showcasing React, UI craft, and attention
          to detail.
        </p>
        <ul className={styles.grid}>
          {projects.map((project) => (
            <li key={project.id} className={styles.gridItem}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
