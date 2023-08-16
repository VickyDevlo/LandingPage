import React from "react";
import styles from "./Card.module.css";

const Card = ({ children, className, ...rest }) => {
  return (
    <div className={`${styles.primary_card} ${className}`} {...rest}>
      {children}
    </div>
  );
};

export default Card;
