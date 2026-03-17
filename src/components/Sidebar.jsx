import {PencilLine} from 'phosphor-react';

import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover}
      src="https://images.unsplash.com/photo-1607705703571-c5a8695f18f6?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
      alt="" />

      <div className={styles.profile}>
        <img className={styles.avatar} src="https://github.com/LeRonchi.png"  />


        <strong>Leandro Ronchi</strong>
        <span>Web Developer</span>
        </div>

        <footer>
          <a href="#">
            <PencilLine size={20} />
            Editar seu perfil
            </a>
        </footer>
    </aside>
  );
}