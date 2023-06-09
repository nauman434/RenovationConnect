import React from "react";
import styles from "../../style";
import { FeaturedGallery } from "../../constants";
import { Link } from "react-router-dom";

const HomeGallery = () => {
  return (
    <section className="flex flex-col gap-[30px]">
      <div className="flex flex-col gap-[20px] items-center text-center">
        <h2 className={`${styles.heading2}`}>featured gallery</h2>
        <p className={`${styles.para} md:w-[550px] w-full`}>
          Remodeling your home is about making your fantasy a reality. It is
          achievable we can help!
        </p>
      </div>
      <div className="flex flex-col gap-[30px]">
        <div className="flex md:flex-row flex-col gap-[30px] items-center justify-center flex-wrap">
          {FeaturedGallery.map((item)=>(
            <div>
              <img src={item.img} alt="" />
            </div>
          ))}
        </div>
      </div>
      <div className="flex md:flex-row flex-col gap-5 justify-between md:px-10 px-0 ">
        <p
          className={`${styles.para} md:w-[550px] w-full border-l-2 pl-3 border-highlight`}
        >
          “We specialize in the living room and kitchen remodeling with a focus
          whole home renovation. Our commercial work includes light remodeling,
          build outs and tenant improvements”{" "}
        </p>
        <Link to='/gallery'>
          <button
            className={`${styles.para} px-[40px] py-[20px] bg-accent text-white flex items-center justify-center w-[210px]`}
          >
            More inspirations
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HomeGallery;
