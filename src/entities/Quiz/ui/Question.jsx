import PropTypes from "prop-types";
import { FormControlLabel, Radio, Button } from "@mui/material";
import styles from "@/entities/Quiz/style/Question.module.scss";
const Question = ({
  question,
  selectedOption,
  onOptionChange,
  onNextQuestion,
  currentQuestionIndex,
  totalQuestion,
  onPreviousQuestion
}) => {
  const progressPercentage = ((currentQuestionIndex + 1) / totalQuestion) * 100;

  return (
    <div className={styles.Question}>
      <div className="container">
        <div className={styles.Question__flex}>
          <p>{`${currentQuestionIndex + 1} из ${totalQuestion}`}</p>
          <div className={styles.Question__polosa}>
            <div
              className={styles.Question__progress}
              style={{
                width: `${progressPercentage}%`,
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className={styles.Question__content}>
        <h2>{question.question}</h2>
        <ul>
          {question.options.map((option) => (
            <div className={styles.Question__border} key={option.value}>
              <li>
                <FormControlLabel
                  control={
                    <Radio
                      checked={selectedOption === option.value}
                      onChange={onOptionChange}
                      value={option.value}
                      sx={{
                        color: "#005b50",
                        "&.Mui-checked": {
                          color: "#005b50",
                        },
                      }}
                    />
                  }
                  label={option.text}
                />
              </li>
            </div>
          ))}
        </ul>
        <div className={styles.Question__buttons}>
          <Button
            onClick={onPreviousQuestion}
            disabled={currentQuestionIndex === 0}
            variant="contained"
            sx={{
              background: "#005b50",
              borderRadius: "20px",
              padding: "10px 70px",
            }}
          >
            Назад
          </Button>
          <Button
            onClick={onNextQuestion}
            disabled={!selectedOption}
            variant="contained"
            sx={{
              background: "#005b50",
              borderRadius: "20px",
              padding: "10px 70px",
            }}
          >
            {currentQuestionIndex === totalQuestion - 1
              ? "Показать результат"
              : "Далее"}
          </Button>
        </div>
      </div>
    </div>
  );
};

Question.propTypes = {
  question: PropTypes.shape({
    question: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
  selectedOption: PropTypes.string,
  onOptionChange: PropTypes.func.isRequired,
  onNextQuestion: PropTypes.func.isRequired,
  onPreviousQuestion: PropTypes.func.isRequired,
  currentQuestionIndex: PropTypes.number.isRequired,
  totalQuestion: PropTypes.number.isRequired,
};

export default Question;
