import React from 'react';
import styles from '../style';
import { Hero_Services, Services_Provide } from "../components/Services";
import { Stories } from "../components/Global";

const Services = () => {
  return (
    <section>
      <div className={`${styles.paddingX} ${styles.paddingY}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero_Services/>
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.paddingY}`}>
        <div className={`${styles.boxWidth}`}>
          <Services_Provide/>
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

export default Services