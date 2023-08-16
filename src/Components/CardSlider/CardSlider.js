// src/components/CardSlider.js
import React, { useState } from "react";
import Card from "./Card";
import styles from "./CardSlider.module.css";
import { cardData } from "./CardData";
import Left_arrow from "../../Assets/Images/left_arrow.png";
import Right_arrow from "../../Assets/Images/right_arrow.png";

const CardSlider = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const nextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % cardData.length);
  };

  const prevCard = () => {
    setCurrentCardIndex(
      (prevIndex) => (prevIndex - 1 + cardData.length) % cardData.length
    );
  };

  return (
    <div className={styles.cardSlider}>
      <Card
        title={cardData[currentCardIndex].title}
        content={cardData[currentCardIndex].content}
        userImg={cardData[currentCardIndex].userImg}
        userName={cardData[currentCardIndex].userName}
        userDesc={cardData[currentCardIndex].userDesc}
      />

      <div className={styles.navigation}>
        <img src={Left_arrow} alt="Left_arrow" />

        <div className={`${styles.dots}`}>
          {cardData.map((_, index) => (
            <span
              key={index}
              className={
                index === currentCardIndex ? styles.activeDot : styles.dot
              }
              onClick={() => setCurrentCardIndex(index)}
            />
          ))}
        </div>

        <img src={Right_arrow} alt="Right_arrow" onClick={nextCard} />
      </div>
    </div>
  );
};

export default CardSlider;
