import React from 'react';
import styles from '../../style';
import { cross } from "../../asset";


const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-background p-16 w-full md:mx-32 mx-16 relative">
        <span className="absolute top-4 right-4 cursor-pointer" onClick={onClose}>
          <img src={cross} alt="" />
        </span>
        <h2 className={`${styles.heading2} text-center`}>contact us</h2>
        <div className='flex flex-col gap-3 mt-10'>
        <p className={`${styles.para} text-center`}>Contact: 726 888 3369, Las Vegas, US</p>
        <p className={`${styles.para} text-center`}>Email: remodeling@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
