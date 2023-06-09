import React from "react";
import styles from "../../style";
import { arrow } from "../../asset";
import { NavLinks } from "../../constants";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col gap-[30px]">
        <div className="flex md:flex-row flex-col items-center justify-between gap-[30px] ">
          <div className="flex justify-between">
            <div className="flex flex-col md:items-start items-center ">
              <h3 className={`${styles.heading3} text-background`}>
                get in touch
              </h3>
              <div className="flex border-b-2 w-[350px] justify-between">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="input_letter"
                />
                <img src={arrow} alt="" className="text-background" />
              </div>
            </div>
          </div>
          <div className="md:flex hidden h-[110px] w-[1px] bg-background" />
          <div className="flex md:flex-row flex-col justify-between w-[600px] gap-[30px]">
            <div className="flex items-center justify-center">
              <h2 className={`${styles.heading2}  text-background`}>
                RC
              </h2>
            </div>

            <div className="flex md:flex-row flex-col font-Quicksand gap-[30px] items-center text-background">
              {NavLinks.map((item, index) => (
                <NavLink to={item.link} key={index}>
                  <div>{item.name}</div>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
        <div className="h-[1px] bg-background" />
        <div className="flex md:flex-row flex-col md:gap-[40px] gap-[10px] md:items-start items-center">
          <p className={`${styles.para} text-background`}>
            47 W 13th St, New York, NY 10011, USA
          </p>
          <p className={`${styles.para} text-background`}>+ 1 (213) 555-3890</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
