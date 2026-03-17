import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://github.com/LeRonchi.png"
          />
          <div className={styles.authorInfo}>
            <strong>Leandro Ronchi</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="16 de Março às 21:38h" dateTime="2026-03-16 21:38:01">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>👉{' '}
          <a href="">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto </a>{' '}
          <a href="">#nlw </a>{' '}
          <a href="">#rocketseat</a>

        </p>
      </div>
    </article>
  );
}
