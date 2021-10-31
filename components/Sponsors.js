import styles from '@/sass/main.module.sass';
import { faDoubleAngleLeft, faDoubleAngleRight } from 'react-icons';

export default function Sponsors() {
  return (
    <div className={styles.sponsors}>
      <h1>Sponsors</h1>
      <section className={styles.sponsors__carosel}>
        <a href='#' className={styles.sponsors__caroselBack}>
          <faDoubleAngleLeft />
        </a>
        <div className={styles.sponsors__sponsor}>placeholder</div>
        <div className={styles.sponsors__sponsor}>placeholder</div>
        <div className={styles.sponsors__sponsor}>placeholder</div>
        <div className={styles.sponsors__sponsor}>placeholder</div>
        <div className={styles.sponsors__sponsor}>placeholder</div>
        <div className={styles.sponsors__sponsor}>placeholder</div>
        <div className={styles.sponsors__sponsor}>placeholder</div>
        <a href='#' className={styles.sponsors__caroselNext}>
          <faDoubleAngleRight />
        </a>
      </section>
    </div>
  );
}
