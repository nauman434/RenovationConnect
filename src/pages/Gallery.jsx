import React from "react";
import styles from '../style';
import { Gallary_Pro } from "../components/Gallery";
import { Stories } from "../components/Global";

const Gallery = () => {
  return (
    <div>
      <div className={`${styles.paddingX} ${styles.paddingY}`}>
        <div className={`${styles.boxWidth}`}>
          <Gallary_Pro />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
