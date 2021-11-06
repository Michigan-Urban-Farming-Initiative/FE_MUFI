import styles from '@/sass/main.module.sass';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__top}>
        <div className={styles.footer__topLeft}>FOOTER -- TOP LEFT SECTION</div>
        <div className={styles.footer__topRight}>
          FOOTER -- TOP RIGHT SECTION
        </div>
      </div>
      <div className={styles.footer__bottom}>FOOTER -- BOTTOM SECTION</div>
    </div>
  );
}
