import Link from 'next/link';

import styles from '@/sass/main.module.sass';

export default function CallToAction() {
  return (
    <div className={styles.cta}>
      <h1>Get Involved</h1>
      <div className={styles.cta__links}>
        {/* Placeholder button styles, will make button mixins */}
        <Link href='donate' className={styles.cta__btn}>
          <a className={styles.buttonDonate}>Donate</a>
        </Link>
        <Link href='volunteer' className={styles.cta__btn}>
          <a className={styles.buttonVolunteer}>Volunteer</a>
        </Link>
      </div>
    </div>
  );
}
