import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import styles from './App.module.css'

import './global.css'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            autor="Vagner Nerves"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi doloribus, corrupti enim dolore at perferendis soluta fuga porro illo maxime, quis ullam alias quos ratione delectus commodi possimus expedita. Voluptatum."
          />

          <Post
            autor="Vagner Nerves"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi doloribus, corrupti enim dolore at perferendis soluta fuga porro illo maxime, quis ullam alias quos ratione delectus commodi possimus expedita. Voluptatum."
          />
        </main>
      </div>
    </div>
  )
}
