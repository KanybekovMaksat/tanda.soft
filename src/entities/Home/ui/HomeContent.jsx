import { Button } from "@mui/material";
import HomeImg from "../../../../public/images/Home/HeaderImg.svg";
import questionImg from "../../../../public/images/Home/question.png";
import timeImg from "../../../../public/images/Home/time.png";
import { useNavigate } from "react-router-dom";
import styles from "../style/HomeContent.module.scss";
const HomeContent = () => {
  const navigate = useNavigate();

  const handleTestClick = () => {
    navigate("/test-page");
  };

  return (
    <div>
      <div className={styles.Home__content}>
        <img src={HomeImg} alt="" />
        <h2>
          Узнайте, какая профессия <br /> вам подходит
        </h2>
        <p>
          Получите подробный отчёт от профориентологов <br /> и найдите дело по
          душе
        </p>
        <div className={styles.Home__flex}>
          <div className={styles.Home__question}>
            <img src={questionImg} alt="" /> 12 вопросов
          </div>
          <div className={styles.Home__time}>
            <img src={timeImg} alt="" /> ~2 минут
          </div>
        </div>{" "}
        <Button
          onClick={handleTestClick}
          variant="contained"
          sx={{
            background: "#005B50",
            "@media (max-width: 360px)": {
              width: "200px",
              margin: "15px",
            },
          }}
          style={{
            borderRadius: "20px",
            fontWeighteight: "500",
            FontSize: "18px",
            padding: "15px 80px",
            margin: "30px",
            maxWidth: "100%",
          }}
        >
          Пройти тест
        </Button>
      </div>
    </div>
  );
};

export default HomeContent;
