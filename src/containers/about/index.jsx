import React from "react";
import Image from "next/image";
import styles from "./about.module.scss";

export default function About() {
  return (
    <>
      <div className={styles.about__images}>
        <Image
          src={"/imgs/bakar_sate.jpeg"}
          alt="test"
          fill
          className={styles.about__image}
        />
      </div>
      <div className={styles.about__wrapper}>
        <div>
          <h1 className={styles.about__title}>Sate Taichan Bu Cin.</h1>
          <p className={styles.about__desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            distinctio eos error quae odio? Officia qui, corrupti,
            necessitatibus incidunt quod repudiandae illum hic voluptatem quidem
            tempore delectus pariatur officiis natus.
          </p>
        </div>
        <hr />
        <div>
          <h1 className={styles.about__title}>Apa itu Sate Taichan ?</h1>
          <p className={styles.about__desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora
            cumque quasi quos culpa quas iusto laborum recusandae soluta dolorem
            aliquid nulla libero, temporibus aperiam beatae veritatis eius
            nesciunt excepturi distinctio.
          </p>
        </div>
      </div>
    </>
  );
}
