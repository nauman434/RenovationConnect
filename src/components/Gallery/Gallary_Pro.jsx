import React from 'react';
import styles from '../../style';
import { img3, img4, img5, img6, img7 } from "../../asset";

const Gallary_Pro = () => {
  return (
    <section className="flex flex-col gap-[30px]">
      <div className="flex flex-col gap-[20px] items-start text-start">
        <h2 className={`${styles.heading2}`}>Gallery</h2>
      </div>
      <div className="flex flex-col gap-[30px]">
        <div className="flex md:flex-row flex-col gap-[30px] items-center justify-center flex-wrap">
          <div><img src={img5} alt="" /></div>
          <div><img src={img6} alt="" /></div>
          <div><img src={img7} alt="" /></div>
          <div><img src={img5} alt="" /></div>
          <div><img src={img6} alt="" /></div>
          <div><img src={img7} alt="" /></div>
        </div>
      </div>
    </section>
  )
}

export default Gallary_Pro