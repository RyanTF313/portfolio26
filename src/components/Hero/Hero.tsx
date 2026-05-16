import styles from "./Hero.module.css";

const AVATAR_URL = "./src/assets/RC_Headshot_10yrAnniversary.JPG"

export function Hero() {
  return (
    <section className={styles.hero} id="hero" aria-label="Introduction">
      <div className={styles.content}>
        <img
          src={AVATAR_URL}
          alt="Ryry's profile"
          className={styles.avatar}
          width={320}
          height={320}
        />
        <p className={styles.greeting}>Hello, I am Ryry!</p>
        <p className={styles.bio}>Friendly Neighborhood SWE</p>
      </div>
    </section>
  );
}
