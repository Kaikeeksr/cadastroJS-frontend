import styles from "../Header/Header.module.css"

export default function Header() {
  return (
    <>
      <header className={styles.header}>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="https://github.com/Kaikeeksr">Github</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/kaikerocha/">LinkedIn</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
