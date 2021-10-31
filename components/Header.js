import Link from 'next/link';

import styles from '@/sass/main.module.sass';

export default function Header() {
  return (
    <div className={styles.header}>
      <Link href='/'>
        <a className={styles.header__link}>Home</a>
      </Link>
      <Link href='whoWeAre'>
        <a className={styles.header__link}>Who We Are</a>
      </Link>
      <Link href='whatWeDo'>
        <a className={styles.header__link}>What We Do</a>
      </Link>
      <Link href='getInvolved'>
        <a className={styles.header__link}>Get Involved</a>
      </Link>
      <Link href='donate'>
        <a className={styles.header__donate}>Donate</a>
      </Link>
      <Link href='#'>
        <a className={styles.header__social}>Facebook</a>
      </Link>
      <Link href='#'>
        <a className={styles.header__social}>LinkedIn</a>
      </Link>
      <Link href='#'>
        <a className={styles.header__social}>Instagram</a>
      </Link>
    </div>
  );
}
