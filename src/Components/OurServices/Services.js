import React from "react";
import styles from "./Services.module.css";
import Card from "../Card/Card";
import { serviceData } from "./ServicesData";  

const Services = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.conatiner}>
        <div className={styles.title}>
          <h1>Our services</h1>
          <p>
            We provide to you the best choiches for you. Adjust it to your
            health needs and make sure your undergo treatment with our highly
            qualified doctors you can consult with us which type of service is
            suitable for your health
          </p>
        </div>
      </div>
      <div className={styles.card_sec}>
        {serviceData.map((data, i) => {
          return (
            <Card key={i}>
              <img src={data.icon} alt="icon" />
              <h3>{data.heading}</h3>
              <p>{data.text}</p>
            </Card>
          );
        })}
        <div>
          <button className="secondary_btn">Learn more</button>
        </div>
      </div>
    </div>
  );
};

export default Services;
