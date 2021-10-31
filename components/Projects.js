import styles from '@/sass/main.module.sass';
import Link from 'next/link';

export default function Projects() {
  return (
    <div className={styles.projects}>
      <h1>Projects</h1>
      <section className={styles.projects__container}>
        <div className={styles.projects__info}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam
          viverra orci sagittis eu volutpat odio facilisis mauris. Vel quam
          elementum pulvinar etiam non. Dolor sit amet consectetur adipiscing.
          Vulputate eu scelerisque felis imperdiet proin fermentum leo vel.
          Pharetra magna ac placerat vestibulum. Nibh sit amet commodo nulla.
          Tortor pretium viverra suspendisse potenti nullam. Suspendisse in est
          ante in nibh mauris cursus mattis molestie. Consequat mauris nunc
          congue nisi vitae suscipit tellus. Varius sit amet mattis vulputate.
          Nibh sit amet commodo nulla facilisi nullam vehicula ipsum.
        </div>
        <Link href='whatWeDo'>
          <a>Learn More</a>
        </Link>
      </section>
      <section className={styles.projects__image}>PLACEHOLDER -- IMAGE</section>
    </div>
  );
}
