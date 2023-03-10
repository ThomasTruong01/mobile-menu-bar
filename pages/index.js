import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import MenuBar from '../component/menu-bar/Menu'

export default function Home () {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mobile Menu Bar</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Mobile Menu Bar</h1>

        <p className={styles.description}>Lorem ipsum dolor sit amet.</p>

        <div className={styles.grid}>
          <a href='#' className={styles.card}>
            <h2>Lorem, ipsum &rarr;</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus, excepturi. Quia consectetur reprehenderit commodi.
              Sint.
            </p>
          </a>

          <a href='#' className={styles.card}>
            <h2>Lorem, ipsum dolor &rarr;</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, odit
              facere. Ipsum reiciendis ullam ea. Obcaecati, earum, magnam
              doloremque possimus odit accusamus quod iste corrupti saepe
              adipisci qui totam placeat!
            </p>
          </a>

          <a href='#' className={styles.card}>
            <h2>Examples &rarr;</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </a>

          <a
            href='#'
            target='_blank'
            rel='noopener noreferrer'
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam
              adipisci libero harum atque incidunt accusantium hic molestias
              optio, excepturi blanditiis vero, ex, in sed? Ullam voluptatum
              animi nisi dolorum cumque!
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href='#' target='_blank' rel='noopener noreferrer'>
          Powered by{' '}
          <span className={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
