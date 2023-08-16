import React from "react";
import styles from "./Card.module.css";

const Card = ({ title, content, userImg, userName, userDesc }) => {
  return (
    <div className={styles.card}>
      <h2>{title}</h2>
      <div className={styles.user_details}>
        <div className={styles.user_details_wrapper}>
          <img src={userImg} alt="user_img" />
          <div className={styles.username}>
            <h3>{userName}</h3>
            <span>{userDesc}</span>
          </div>
        </div>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Card;
