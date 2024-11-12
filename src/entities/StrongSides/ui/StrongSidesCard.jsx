import React from "react";
import {  skillToProfessions } from "@/features/StrongSides/model/StrongSideData";
import styles from "@/entities/StrongSides/style/StrongSides.module.scss";

const StrongSidesCard = ({ profession, score }) => {
  const sides = skillToProfessions[profession] || [];

  return (
    <div className={styles.StrongSides_flex}>
      <div className={styles.StrongSides__card}>
        <h3 className={styles.StrongSides__h3Adaptive}>
          {profession} - {score}%
        </h3>

        <p>Рекомендуемые навыки для этой профессии:</p>
        <ul className={styles.StrongSides__ul}>
          {sides.map((side, sideIndex) => (
            <li key={sideIndex} className={styles.StrongSides__skill__card}>
              <h4>{side}</h4>
            </li>
          ))}
        </ul>
        <p>
          Эта профессия подходит для вас, так как она включает в себя важные
          аспекты, такие как {sides.join(", ")}.
        </p>
      </div>
    </div>
  );
};

export default StrongSidesCard;
