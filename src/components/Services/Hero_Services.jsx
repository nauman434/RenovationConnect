import React from "react";
import styles from "../../style";
import { img } from "../../asset";
import { Link } from "react-router-dom";

const Hero_Services = () => {
  return (
    <section className="flex flex-col gap-[40px]">
      <div className="flex md:flex-row flex-col md:gap-0 gap-[10px] justify-between items-start">
        <div className="md:w-[730px] w-full flex flex-col gap-[10px]">
          <h1 className={`${styles.heading1}`}>our services</h1>
          <p className={`${styles.para}`}>
            Transforming Houses into Dream Homes, One Renovation at a Time
          </p>
        </div>
        <Link to='/request-a-quote'>
              <button className="px-[40px] py-[20px] text-background bg-accent">
                Request a Quote
              </button>
            </Link>
      </div>
      <img
        src={img}
        alt=""
        className="w-full h-[490px] bg-cover bg-no-repeat object-cover"
      />
      <div>
        <p className={`${styles.para} text-center`}>
          We specialize in solar panel installation, windows installation,
          kitchen remodeling, and bathroom remodeling. Our solar panel
          installation service helps homeowners reduce their carbon footprint
          and save money on energy bills. Our windows installation service
          provides energy-efficient windows that improve the aesthetics of your
          home while reducing energy consumption. Our kitchen remodeling service
          helps you create a beautiful, functional space that reflects your
          unique style. Similarly, our remodeling service helps you transform
          your outdated bathroom into a spa-like retreat. Our highly skilled
          professionals are committed to delivering high-quality services that
          exceed your expectations. We use the latest tools and technology to
          complete each project efficiently and effectively. Contact us today to
          learn how we can help upgrade your home.
        </p>
      </div>
    </section>
  );
};

export default Hero_Services;
