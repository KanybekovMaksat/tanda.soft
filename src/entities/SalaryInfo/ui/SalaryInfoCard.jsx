import React from "react";
import som from "../../../../public/images/SalaryInfo/som.png";
import { Button } from "@mui/material";
import styles from "@/entities/SalaryInfo/style/SalaryInfo.module.scss";
const SalaryInfoCard = ({ profession }) => {
  return (
    <div>
      <div className={styles.SalaryInfo__card}>
        <h3>{profession.title}</h3>
        <div className={styles.SalaryInfo__newbie}>
          <img src={som} alt="" />
          <div className={styles.newbie__text}>
            <p>
              <span>{profession.salaryBeginner} сом</span>
              <br />
              <strong>Заработок новичка</strong>
            </p>
          </div>
        </div>
        <div className={styles.SalaryInfo__professional}>
          <img src={som} alt="" />
          <div className={styles.professional__text}>
            <p>
              <span>{profession.salaryPro} сом</span>
              <br />
              <strong>Заработок профессионала</strong>
            </p>
          </div>
        </div>
        <p className={styles.SalaryInfo__description}>
          {profession.description}
        </p>
        <div className={styles.SalaryInfo__btn}>
          <Button 
            variant="contained"
            sx={{
              background: "#005b50",
              width: "85%",
              position: "relative",
              bottom: "0",
              "&:hover": {
                backgroundColor: "#00796b",
                transform: "scale(1.05)",
                transition: "all 0.3s ease",
              },
            }}
            onClick={() => window.open(profession.link, "_blank")}
            
          >
            Читать далее
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SalaryInfoCard;
