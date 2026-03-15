import { Header } from "./components/Header.jsx";
import { Post } from "./Post.jsx";

import styles from "./App.module.css";

import "./global.css";
import { Sidebar } from "./components/Sidebar.jsx";

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Diego Fernandes"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus repudiandae cum velit iure qui modi. Reiciendis debitis suscipit consequuntur culpa, cupiditate molestias eveniet, harum quibusdam, itaque neque quod totam mollitia!"
          />
          <Post author="Gabriel Buzzi" content="Um novo post muito legal" />
        </main>
      </div>
    </div>
  );
}
