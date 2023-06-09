import React, { useState } from "react";
import { NavLinks } from "../../constants";
import { NavLink, useLocation, Link } from "react-router-dom";
import styles from "../../style";
import { menu, cross } from "../../asset";
import Modal from "../ContactUs/Modal";

const Navbar = () => {
  const location = useLocation();
  const currentPage = location.pathname;
  const [active, setAcitve] = useState("");
  const [toggle, setToggle] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <nav className="navbar flex justify-between items-center">
      <div>
        <Link to="/">
          <h2 className={`${styles.heading2}`}>RC</h2>
        </Link>
      </div>

      <div className="md:flex hidden font-Quicksand gap-[30px] items-center">
        {NavLinks.map((item, index) => (
          <NavLink to={item.link} key={index}>
            <div>{item.name}</div>
          </NavLink>
        ))}
        <button
          className="px-[20px] py-[15px] border-[1px] border-highlight"
          onClick={openModal}
        >
          Contact Us
        </button>
        {currentPage !== "/" &&
          currentPage !== "/services" &&
          currentPage !== "/request-a-quote" && ( // Render the button only if not on the homepage
            <Link to="/request-a-quote">
              <button className="px-[20px] py-[15px] text-background bg-accent">
                Request a Quote
              </button>
            </Link>
          )}
      </div>

      <div className="md:hidden flex font-Quicksand items-center gap-3">
        {currentPage !== "/" &&
          currentPage !== "/services" &&
          currentPage !== "/request-a-quote" && ( // Render the button only if not on the homepage
            <Link to="/request-a-quote">
              <button className="px-[10px] py-[2px] text-background bg-accent">
                Quote
              </button>
            </Link>
          )}
        <button
          className={`${styles.para} px-[10px] py-[2px] border-[1px] border-highlight`}
          onClick={openModal}
        >
          Contact Us
        </button>

        <img
          src={menu}
          alt=""
          className="w-[28px] h-[28px] object-contain"
          onClick={() => {
            setToggle(!toggle);
          }}
        />
        {toggle && (
          <div className="w-full h-[100vh] fixed top-0 left-0 bg-background z-10">
            <img
              src={cross}
              alt=""
              className="w-[28px] h-[28px] object-contain absolute top-[50px] left-[50px]"
              onClick={() => {
                setToggle(!toggle);
              }}
            />
            <div className="flex flex-col items-center h-[100vh] justify-center gap-10">
              {NavLinks.map((item, index) => (
                <NavLink to={item.link} key={index}>
                  <div
                    className={`${styles.heading3}`}
                    onClick={() => setToggle(false)}
                  >
                    {item.name}
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
      <Modal isOpen={modalOpen} onClose={closeModal} />
    </nav>
  );
};

export default Navbar;
