import React from 'react';
import styles from '../style';
import Form from "../components/RequestQuote/Form";

const RequestQuote = () => {
  return (
    <div>
      <div className={`${styles.paddingX} ${styles.paddingY}`}>
        <div className={`${styles.boxWidth}`}>
          <Form />
        </div>
      </div>
    </div>
  )
}

export default RequestQuote