import React from 'react';
import styles from "../../style";
import { img3, img4, img5, img6, img7 } from "../../asset";


const Services_Provide = () => {
  return (
    <section className="flex flex-col gap-[30px]">
      <div className="flex flex-col gap-[20px] items-center text-center">
        <h2 className={`${styles.heading2}`}>services we provide</h2>
        <p className={`${styles.para} md:w-[550px] w-full`}>
          Remodeling your home is about making your fantasy a reality. It is
          achievable we can help!
        </p>
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

export default Services_Provide