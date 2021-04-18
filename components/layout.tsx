import Head from 'next/head';
import styles from '../styles/Layout.module.scss';

export default function Layout({ children, pageTitle = 'Default Page Title' }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kingdom Death Note</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h2 className={styles.pageTitle}>{pageTitle}</h2>
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
