import { Post } from './Components/Post'
import { Header } from './Components/Header'
import styles from './App.module.css'
import './global.css'
import { Sidebar } from './Components/Sidebar'

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Ignite"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum repellat natus quidem fuga temporibus, vel deleniti doloremque blanditiis maiores tenetur obcaecati eum magnam aliquid pariatur odio explicabo asperiores saepe dolores."
          />
          <Post
            author="Ignite"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum repellat natus quidem fuga temporibus, vel deleniti doloremque blanditiis maiores tenetur obcaecati eum magnam aliquid pariatur odio explicabo asperiores saepe dolores."
          />
        </main>
      </div>
    </>

  )
}

export default App
