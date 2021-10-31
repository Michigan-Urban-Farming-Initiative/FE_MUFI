import styles from '@/sass/main.module.sass';

export default function Mission() {
  return (
    <div className={styles.mission}>
      <section className={styles.mission__top}>
        <h1>Mission</h1>
        <p className={styles.mission__topInfo}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada
          bibendum arcu vitae elementum curabitur vitae. A scelerisque purus
          semper eget duis at tellus. Turpis tincidunt id aliquet risus feugiat
          in ante metus. Tincidunt arcu non sodales neque sodales. Egestas quis
          ipsum suspendisse ultrices gravida dictum. Semper risus in hendrerit
          gravida rutrum quisque non. Et molestie ac feugiat sed. Dis parturient
          montes nascetur ridiculus mus mauris vitae ultricies. Dictum fusce ut
          placerat orci nulla pellentesque dignissim. Tellus cras adipiscing
          enim eu. Morbi tristique senectus et netus et malesuada fames ac.
          Aliquet bibendum enim facilisis gravida neque convallis a. Venenatis
          tellus in metus vulputate. Sagittis purus sit amet volutpat consequat
          mauris. Sapien et ligula ullamcorper malesuada proin libero nunc
          consequat interdum. Id aliquet lectus proin nibh nisl condimentum id.
          Tellus pellentesque eu tincidunt tortor aliquam. Ipsum a arcu cursus
          vitae congue mauris rhoncus. Odio euismod lacinia at quis risus sed
          vulputate odio. Vitae et leo duis ut diam quam. Faucibus interdum
          posuere lorem ipsum dolor sit. Facilisis magna etiam tempor orci eu
          lobortis. Fringilla est ullamcorper eget nulla facilisi. Nibh praesent
          tristique magna sit amet purus gravida quis. Sit amet mauris commodo
          quis imperdiet massa. Posuere ac ut consequat semper. Ultricies leo
          integer malesuada nunc vel risus commodo viverra maecenas. Accumsan in
          nisl nisi scelerisque eu ultrices vitae auctor eu. Vel orci porta non
          pulvinar.
        </p>
      </section>
      <section className={styles.mission__bottom}>
        <div className={styles.mission__goals}>
          <h1>Goals</h1>
          <p className={styles.mission__goalsInfo}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel quam
            elementum pulvinar etiam non quam. Integer malesuada nunc vel risus.
            Eget arcu dictum varius duis. Id cursus metus aliquam eleifend mi in
            nulla posuere sollicitudin. Sit amet est placerat in egestas erat.
            Fames ac turpis egestas integer. Lectus vestibulum mattis
            ullamcorper velit sed ullamcorper morbi tincidunt ornare. Ipsum
            faucibus vitae aliquet nec ullamcorper sit. Nulla aliquet porttitor
            lacus luctus accumsan tortor. Eget velit aliquet sagittis id
            consectetur purus.
          </p>
        </div>
        <div className={styles.mission__impact}>
          <h1>Impact</h1>
          <div className={styles.mission__impactInfo}>placeholder</div>
        </div>
      </section>
    </div>
  );
}
