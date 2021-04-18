import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Layout({ children, pageTitle = 'Default Page Title' }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kingdom Death Note</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h2 style={{ marginTop: 30 }}>{pageTitle}</h2>
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
