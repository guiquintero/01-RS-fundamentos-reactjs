import styles from "./Post.module.css"

export function Post({ author, content }) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/guiquintero.png" alt="" />
          <div className={styles.authorInfo}>
            <strong>Guilherme Quintero</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="7 de fevereiro as 11:13" dataTime="2024-02-07"></time>
      </header>
      <div className={styles.content}></div>
      <p>Fala galera 🫰</p>
      <p>Acabei de subir um projeto lá no meu gitHub</p>

      <p>👉 <a href="">gui.design/slaoqmais</a></p>

      <p>
        <a href="">#novoprojeto</a> {''}
        <a href="">#tmj</a>
      </p>
    </article>
  )
}