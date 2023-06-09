import React from 'react';
import styles from '../../style';
import { img2 } from "../../asset";
import { Link } from "react-router-dom";

const Provide = () => {
  return (
    <section>
      <div className='flex md:flex-row flex-col-reverse justify-around items-center gap-[30px]'>
        <div>
          <img src={img2} alt="" />
        </div>
        <div className='flex flex-col gap-[20px] md:w-[650px] w-full'>
          <h2 className={`${styles.heading2}`}>what we provide?</h2>
          <p className={`${styles.para}`}>We specialize in providing exceptional home renovation services tailored to meet your unique needs. Whether you're looking to transform your kitchen, upgrade your bathroom, or renovate your entire home, we are here to bring your vision to life. Our team of experienced professionals combines craftsmanship, attention to detail, and innovative design solutions to create spaces that are both functional and visually stunning. With a focus on quality and customer satisfaction, we strive to exceed your expectations at every step of the renovation process. Trust us to handle your project with care, professionalism, and a commitment to delivering exceptional results. Let us help you turn your house into your dream home.</p>
          <Link
            to='/services'
          className={`${styles.para} flex items-center justify-center px-[40px] py-[20px] bg-accent text-white w-[175px]`}
        >
          Read More
        </Link>
        </div>
      </div>
    </section>
  )
}

export default Provide