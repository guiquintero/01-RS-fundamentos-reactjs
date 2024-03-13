import { format, formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"

import styles from "./Post.module.css"
import { Comment } from "./Comment"
import { Avatar } from "./Avatar"
import { useState } from "react"

export function Post({ author, publishedAt, content }) {

  const [commets, setComments] = useState([])

  const [newCommentText, setNewCommentText] = useState('')

  const publishedDataFormatted = format(publishedAt, "d 'de' LLLL 'as' HH:mm'h'", { locale: ptBR })

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true })

  function handleCreateNewComment() {
    event.preventDefault();

    setComments([...commets, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value);
  }

  function handleNewCommentInvalid() {
    event.target.setCustomValidity('Por favor, preencha o campo de comentário');
  }

  function deleteComment(commentToDelete) {
    const commentsWithoutDeletedOne = commets.filter(comment => {
      return comment !== commentToDelete;
    })
    setComments(commentsWithoutDeletedOne)
  }

  const isNewCommentEmpty = newCommentText.length===0;

  return (
    <article className={styles.post}>

      <header>

        <div className={styles.author}>

          <Avatar src={author.avatarUrl} />

          <div className={styles.authorInfo}>

            <strong>{author.name}</strong>
            <span>{author.role}</span>

          </div>

        </div>

        <time title={publishedDataFormatted} datatime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>

      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === 'link') {
            return <p key={line.content}><a>{line.content}</a></p>;
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>

        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Deixe seu comentario"
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Comentar
          </button>
        </footer>

      </form>

      <div className={styles.commentList}>
        {commets.map(comment => {
          return (
            <Comment
              content={comment}
              key={comment}
              onDeleteComment={deleteComment}
            />
          )
        })}
      </div>

    </article>
  )
}