import React from "react";
import styles from "./LatestArticle.module.css";
import { ArticleData } from "./ArticleData";
import Card from "../Card/Card";
import Right_arrow from "../../Assets/Images/small_right_arrow.png";

const LatestArticle = () => {
  return (
    <div className={styles.article_wrapper}>
      <h1 className={styles.article_title}>Check out our latest article</h1>
      <div className={styles.artical_cotainer}>
        {ArticleData.map((data, i) => {
          return (
            <Card className={styles.article_card} key={i}>
              <img src={data.articleImg} alt={data.articleImg} />
              <div className={styles.content_wrapper}>
                <h2>{data.articleTitle}</h2>
                <p>{data.articleContent}</p>
                <div className={styles.readmore_btn}>
                  <button>Read more</button>
                  <img src={Right_arrow} alt="Right_arrow" />
                </div>
              </div>
            </Card>
          );
        })}
        <div className={styles.viewall_btn}>
          <button className="secondary_btn">View all</button>
        </div>
      </div>
    </div>
  );
};

export default LatestArticle;
