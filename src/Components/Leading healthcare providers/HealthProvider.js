import React from "react";
import styles from "./HealthProvider.module.css";  
import HealthProvider_img from "../../Assets/Images/trafalgar-illustration sec02 1.png";
import HealthProvider_sec_img from "../../Assets/Images/trafalgar-illustration sec03 1.png";
import Download_img from "../../Assets/Images/Downloading.png";
const HealthProvider = () => {
  return (
    <>
      <div className={`${styles.healthprovider_wrapper} container`}>
        <div className={styles.img_wrapper}>
          <img src={HealthProvider_img} alt="HealthProvider_img" />
        </div>
        <div className={styles.healthprovider_text_sec}>
          <h1>Leading healthcare providers</h1>
          <p>
            Trafalgar provides progressive, and affordable healthcare,
            accessible on mobile and online for everyone. To us, it’s not just
            work. We take pride in the solutions we deliver
          </p>
          <div>
            <button className="primary_btn">Learn more</button>
          </div>
        </div>
      <div className={styles.second_sec}>
        <div className={styles.second_sec_text_sec}>
          <h1>Download our mobile apps</h1>
          <p>
            Our dedicated patient engagement app and web portal allow you to
            access information instantaneously (no tedeous form, long calls, or
            administrative hassle) and securely
          </p>
          <div className={styles.download_btn}>
            <button className='secondary_btn'>
              <h3>Download</h3>
              <img src={Download_img} alt="Download_img" />
            </button>
          </div>
        </div>
        <div className={styles.Sec_img_wrapper}>
          <img src={HealthProvider_sec_img} alt="HealthProvider_img" />
        </div>
      </div>
      </div>
    </>
  );
};

export default HealthProvider;
