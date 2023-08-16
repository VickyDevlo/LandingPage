import React from "react";
import styles from "./Footer.module.css";
import Logo from "../../Assets/Images/logo.png";
import { footerData } from "./FooterData";
const Footer = () => {
  return (
    <div className={`${styles.footer_wrapper} `}>
      <div className={`${styles.footer_container}`}>
        <div className={styles.logo}>
          <img src={Logo} alt="Logo" />
          <div className={styles.copyright}>
            <p>
              Trafalgar provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone
            </p>
            <span>©Trafalgar PTY LTD 2020. All rights reserved</span>
          </div>
        </div>

        {footerData.map((data, i) => {
          return (
            <div className={styles.tabs} key={i}>
              <h3>{data.title}</h3>
              <ul>
                <li>{data.tab_1}</li>
                <li>{data.tab_2}</li>
                <li>{data.tab_3}</li>
                <li>{data.tab_4}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
