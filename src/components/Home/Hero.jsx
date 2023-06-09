import React from "react";
import styles from "../../style";
import { img } from "../../asset";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="flex flex-col gap-[40px]">
      <div className="flex md:flex-row flex-col md:gap-0 gap-[10px] justify-between items-start">
        <div className="md:w-[730px] w-full flex flex-col gap-[10px]">
          <h1 className={`${styles.heading1}`}>
            make your dream remodel a reality
          </h1>
          <p className={`${styles.para}`}>
            We specialize in the living room and kitchen remodeling with a focus
            whole home renovation. Our commercial work includes light
            remodeling, build outs and tenant improvements
          </p>
        </div>
        <Link to='/request-a-quote'>
              <button className="px-[40px] py-[20px] text-background bg-accent">
                Request a Quote
              </button>
            </Link>
      </div>
      <img src={img} alt="" className="w-full h-[490px] bg-cover bg-no-repeat object-cover"/>
    </section>
  );
};

export default Hero;
