import React from "react";
import styles from "./Navbar.module.css";
import Logo from "../../Assets/Images/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={`${styles.navbar} container`}>
      <img src={Logo} alt="logo" />
      <div className={styles.nav}>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/finddoctor"}>Find a doctor</NavLink>
          </li>
          <li>
            <NavLink to={"/apps"}>Apps</NavLink>
          </li>
          <li>
            <NavLink to={"/testimonials"}>Testimonials</NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About us</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
