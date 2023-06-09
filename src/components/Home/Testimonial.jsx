import React from 'react';
import styles from '../../style';
import { img9 } from "../../asset";

const Testimonial = () => {
  return (
    <section>
      <div className='flex md:flex-row flex-col gap-[10px] justify-evenly items-center'>
        <div>
          <img src={img9} alt="" />
        </div>
        <div className='md:w-[650px] w-full flex flex-col gap-[10px]'>
          <p className={`${styles.para}`}>We specialize in providing exceptional home renovation services tailored to meet your unique needs. Whether you're looking to transform your kitchen, upgrade your bathroom, or renovate your entire home, we are here to bring your vision to life. Our team of experienced professionals combines craftsmanship, attention to detail, and innovative design solutions to create spaces that are both functional and visually stunning. With a focus on quality and customer satisfaction, we strive to exceed your expectations at every step of the renovation process. Trust us to handle your project with care, professionalism, and a commitment to delivering exceptional results. Let us help you turn your house into your dream home.</p>
          <p className='text-[#ED5F10]'>⭐⭐⭐⭐⭐ 5.0</p>
          <h4 className={`${styles.heading4}`}>Ben Hook</h4>
        </div>
      </div>
    </section>
  )
}

export default Testimonial