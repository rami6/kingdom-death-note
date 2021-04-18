import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kingdom Death Note</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
