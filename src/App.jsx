import { Post } from './Components/Post'
import { Header } from './Components/Header'
import styles from './App.module.css'
import './global.css'
import { Sidebar } from './Components/Sidebar'

const post = [
  {
    id:1,
    author:{
      avatarUrl: 'https://github.com/guiquintero.png',
      name: 'Guilherme Quintero',
      role: 'Software Engineer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galera 🫰'},
      {type: 'paragraph', content: 'Acabei de subir um projeto lá no meu gitHub'},
      {type: 'link', content: 'gui.design/slaoqmais'},
    ],
    publishedAt: new Date('2024-02-07 20:00:00'),
  },
  {
    id:2,
    author:{
      avatarUrl: 'https://github.com/Ninjaalpha01.png',
      name: 'Guilherme Quintero',
      role: 'Software Engineer'
    },
    content: [
      {type: 'paragraph', content: 'Fala cambada 🫰'},
      {type: 'paragraph', content: 'Acabei de subir um projeto lá no meu gitHub'},
      {type: 'link', content: 'gui.design/slaoqmais'},
    ],
    publishedAt: new Date('2024-02-26 12:00:00'),
  }
]




function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {post.map(post =>{
            return(
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          } 
          )}
        </main>
      </div>
    </>

  )
}

export default App
