import React from "react";
import StrongSidesCard from "@/entities/StrongSides/ui/StrongSidesCard";
import { useStrongSides } from "@/features/StrongSides/model/useStrongSides";
import styles from "@/entities/StrongSides/style/StrongSides.module.scss";
import { skillToProfessions } from "@/features/StrongSides/model/StrongSideData";

const StrongSides = ({ results }) => {
  const { topSkills, recommendedProfessions } = useStrongSides(results);

  if (!results || topSkills.length === 0) {
    return <p>Результаты теста пока недоступны?</p>;
  }

  return (
    <div className={styles.StrongSides}>
      <div className="container">
        <div className={styles.StrongSides__content}>
          <h2>Ваши сильные стороны</h2>
          {topSkills.map((item, index) => {
            const professionsForSkill = skillToProfessions[item.skill] || [];
            return (
              <div key={index} className={styles.StrongSides__skill}>
                <h3>{item.skill} - {item.score}%</h3>
                <p>С этим навыком вы можете рассмотреть следующие профессии:</p>
                <ul>
                  {professionsForSkill.map((profession, idx) => (
                    <li key={idx}>{profession}</li>
                  ))}
                </ul>
                <p>
                  Например, с навыком <strong>{item.skill}</strong> вы можете
                  пойти в следующие профессии, потому что этот навык идеально
                  подходит для их выполнения.
                </p>
              </div>
            );
          })}


        </div>
      </div>
    </div>
  );
};

export default StrongSides;
