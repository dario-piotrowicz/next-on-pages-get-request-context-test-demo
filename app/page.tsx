import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
        <a
          href="/api/hello"
          className={styles.card}
        >
          <h2>
            /api/hello <span>-&gt;</span>
          </h2>
          <p>
            Example of <code>getRequestContext</code> in an api route
          </p>
        </a>

        <a
          href="/client"
          className={styles.card}
        >
          <h2>
            /client <span>-&gt;</span>
          </h2>
          <p>
            Example of <code>getRequestContext</code> not working in client components
          </p>
        </a>

        <a
          href="/server"
          className={styles.card}
        >
          <h2>
            /server <span>-&gt;</span>
          </h2>
          <p>
            Example of <code>getRequestContext</code> working in server components
          </p>
        </a>
    </main>
  )
}
