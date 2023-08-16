import React from "react";
import styles from "./HealthCareSection.module.css";
import HealthCare_img from "../../Assets/Images/trafalgar-header illustration 1.png";

const HealthCare = () => {
  return (
    <div className={`${styles.wrapper} container`}>
      <div className={styles.text_sec}>
        <h1>Virtual healthcare for you</h1>
        <p>
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone
        </p>
        <div className={styles.consult_btn}>
          <button className="primary_btn">Consult today</button>
        </div>
      </div>
      <div className={styles.img_wrapper}>
        <img src={HealthCare_img} alt="HealthCare_img" />
      </div>
    </div>
  );
};

export default HealthCare;
