import React from "react";
import professia from "../../../../public/images/CardMentor/approved.png";
import experience from "../../../../public/images/CardMentor/industry.png";
import styles from "@/entities/CardMentor/style/CardMentor.module.scss";
import defaultMentor from "../../../../public/images/CardMentor/defaultMentor.png";
const MentorCard = ({ mentor }) => {
  
  return (
    <div className={styles.CardMentor__card}>
      <img
        src={mentor.image || defaultMentor}
        alt=""
        className={styles.CardMentor__avatar}
      />
      <h3>{mentor.name}</h3>
      <div className={styles.CardMentor__flex}>
        <div className={styles.CardMentor__profession}>
          <img src={professia} alt="" className={styles.CardMentor__icon} />
          {mentor.profession}
        </div>
        <div className={styles.CardMentor__experience}>
          <img src={experience} alt="" className={styles.CardMentor__icon} />
          Опыт {mentor.experience}
        </div>
      </div>
      <div className={styles.CardMentor__teacher}>
        <h4>Преподователь по:</h4>
        <p>{mentor.teacher}</p>
      </div>
      <div className={styles.CardMentor__topics}>
        <h4>Пройдете темы:</h4>
        <div className={styles.topics__list}>
          <ul>
            {mentor.topics.map((topic, idx) => (
              <li key={idx}> {topic} </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MentorCard;
