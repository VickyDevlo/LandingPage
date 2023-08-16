import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../../Assets/Images/logo.png";

const Navbar = () => {
  return (
    <div className={`${styles.navbar} container`}>
      <img src={Logo} alt="logo" />
      <div className={styles.nav}>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Find a doctor</a>
          </li>
          <li>
            <a href="">Apps</a>
          </li>
          <li>
            <a href="">Testimonials</a>
          </li>
          <li>
            <a href="">About us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
