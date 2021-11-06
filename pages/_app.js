import styles from '@/sass/main.module.sass';

function MyApp({ Component, pageProps }) {
  return <Component className={styles.app} {...pageProps} />;
}

export default MyApp;
