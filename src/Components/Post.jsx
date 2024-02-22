import styles from "./Post.module.css"
import { Comment } from "./Comment"
import { Avatar } from "./Avatar"

export function Post({ author, content }) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
        <Avatar src="http://github.com/guiquintero.png"/>
          <div className={styles.authorInfo}>
            <strong>Guilherme Quintero</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="7 de fevereiro as 11:13" dataTime="2024-02-07"></time>
      </header>
      <div className={styles.content}>
        <p>Fala galera 🫰</p>
        <p>Acabei de subir um projeto lá no meu gitHub</p>

        <p>👉 <a href="">gui.design/slaoqmais</a></p>

        <p>
          <a href="">#novoprojeto</a> {''}
          <a href="">#tmj</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe seu comentario" />
        <footer>
          <button type="submit">Comentar</button>
        </footer>

      </form>
      <div className={styles.commentList}>
        <Comment/>
      </div>
    </article>
  )
}