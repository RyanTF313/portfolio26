import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from 'react-icons/fa6';
import { useScrollDirection } from '../../hooks/useScrollDirection';
import { scrollToSection } from '../../utils/smoothScroll';
import styles from './Header.module.css';

const socialLinks = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://www.github.com/RyanTF313',
    icon: FaGithub,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ryantf/',
    icon: FaLinkedin,
  },
  {
    id: 'email',
    label: 'Email',
    href: 'mailto:r.tillman.french@gmail.com',
    icon: FaEnvelope,
  },
] as const;

const navLinks = [
  { id: 'about-nav', label: 'About Me', sectionId: 'about' },
  { id: 'projects-nav', label: 'Projects', sectionId: 'projects' },
  { id: 'contact-nav', label: 'Contact Me', sectionId: 'contact' },
] as const;

export function Header() {
  const { isHeaderVisible } = useScrollDirection();

  const handleNavClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    scrollToSection(sectionId);
  };

  return (
    <header
      className={`${styles.header} ${isHeaderVisible ? styles.visible : styles.hidden}`}
      role="banner"
    >
      <div className={styles.inner}>
        <nav className={styles.socialNav} aria-label="Social media links">
          <ul className={styles.socialList}>
            {socialLinks.map(({ id, label, href, icon: Icon }) => (
              <li key={id}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                  aria-label={label}
                >
                  <Icon aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className={styles.mainNav} aria-label="Main navigation">
          <ul className={styles.navList}>
            {navLinks.map(({ id, label, sectionId }) => (
              <li key={id}>
                <button
                  type="button"
                  className={styles.navLink}
                  onClick={(e) => handleNavClick(e, sectionId)}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
