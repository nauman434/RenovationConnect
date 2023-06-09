import React from "react";
import styles from "../../style";
import { img10, img11 } from "../../asset";

const Stories = () => {
  return (
    <section>
      <div className="flex md:flex-row flex-col justify-between gap-[30px]">
        <div className="relative">
          <h2 className={`${styles.heading2}`}>
            Latest <br /> Stories
          </h2>
          <div className="w-[120px] h-[60px] bg-accent rounded-bl-full rounded-br-full absolute ss:top-[80px] top-[45px] -z-10 ss:-left-14 -left-20" />
        </div>
        <div className="flex gap-[30px]">
        <div className="w-full flex flex-col gap-[20px]">
          <img src={img10} alt="" />
          <div className="h-[1px] bg-highlight" />
          <p className="text-[18px] font-Quicksand font-semibold text-highlight">
            Kitchen of the Week: White and Wood for a Busy Family
          </p>
          <p className={`${styles.para}`}>
            A designer helps a couple to renovate their home according to their
            certain lifestyle...{" "}
            <span className="underline text-accent"> Read more</span>
          </p>
        </div>
        <div className="w-full flex flex-col gap-[20px]">
          <img src={img10} alt="" />
          <div className="h-[1px] bg-highlight" />
          <p className="text-[18px] font-Quicksand font-semibold text-highlight">
            Kitchen of the Week: White and Wood for a Busy Family
          </p>
          <p className={`${styles.para}`}>
            A designer helps a couple to renovate their home according to their
            certain lifestyle... {" "}
            <span className="underline text-accent"> Read more</span>
          </p>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Stories;
