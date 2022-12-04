import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';

import './global.css';

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Glauber Bandeira"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ducimus delectus provident. Rerum fugiat architecto odit ex, esse hic harum culpa facilis? Nesciunt, repellendus quis ad pariatur molestias natus voluptatum."
          />
          <Post
            author="Glauber Bandeira"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ducimus delectus provident. Rerum fugiat architecto odit ex, esse hic harum culpa facilis? Nesciunt, repellendus quis ad pariatur molestias natus voluptatum."
          />
        </main>
      </div>
    </div>
  )
}

