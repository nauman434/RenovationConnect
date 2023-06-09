import React from "react";
import styles from "../../style";
import { img8 } from "../../asset";
import { ServiceHome } from "../../constants";

const Services = () => {
  return (
    <section className="flex flex-col gap-[40px]">
      <div className="flex md:flex-row flex-col md:gap-0 gap-[10px] justify-between items-start">
        <div className="md:w-[730px] w-full flex flex-col gap-[10px]">
          <h2 className={`${styles.heading2} text-background`}>
            Services We Provide
          </h2>
          <p className={`${styles.para} text-background`}>
            Great design is the construction of who we are
          </p>
        </div>
        <button
          className={`${styles.para} px-[40px] py-[20px] border border-background text-white `}
        >
          Explore our services
        </button>
      </div>
      <div className="flex justify-between gap-5 flex-wrap">
        {ServiceHome.map((item) => (
          <div className="ss:w-[370px] w-full h-[370px] relative flex items-center justify-center">
            <img
              src={item.img}
              alt="Background Image"
              className="w-full h-full object-cover"
            />
            <div className="bg-black opacity-50 w-full h-full absolute top-0 left-0" />
            <div className="absolute">
              <h3 className={`${styles.heading4} text-center text-background`}>
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
