import React from 'react';
import { HomeGallery, Hero, Provide, Services,  Testimonial } from "../components/Home";
import { Stories } from "../components/Global";
import styles from '../style';

const Home = () => {
  return (
    <section>
      <div className={`${styles.paddingX} ${styles.paddingY}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero/>
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.paddingY}`}>
        <div className={`${styles.boxWidth}`}>
          <Provide/>
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.paddingY}`}>
        <div className={`${styles.boxWidth}`}>
          <HomeGallery/>
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.paddingY} bg-accent_gr`}>
        <div className={`${styles.boxWidth}`}>
          <Services/>
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.paddingY} `}>
        <div className={`${styles.boxWidth}`}>
          <Testimonial/>
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.paddingY} `}>
        <div className={`${styles.boxWidth}`}>
          <Stories/>
        </div>
      </div>
    </section>
  )
}

export default Home