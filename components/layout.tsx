import Head from 'next/head';
import styles from '../styles/Layout.module.scss';

export default function Layout({ children, pageTitle = 'Default Page Title' }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kingdom Death Note</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className={styles.pageTitle}>
        <h2>{pageTitle}</h2>
      </div>

      <main className={styles.main}>{children}</main>
    </div>
  );
}
