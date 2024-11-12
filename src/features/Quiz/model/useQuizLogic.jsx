import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { questionsData } from "./questionsData";

export const useQuizLogic = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [results, setResults] = useState({
    "Инициативность и самостоятельность": 0,
    "Адаптивность и гибкость": 0,
    "Командная работа и координация": 0,
    "Эмпатия и понимание пользователей": 0,
    "Аналитическое мышление и работа с данными": 0,
    "Креативность и визуальное мышление": 0,
    "Планирование и организация": 0,
    "Технические навыки и программирование": 0,
    "Внимание к деталям": 0,
  });

  const [isTestFinished, setIsTestFinished] = useState(false);
  const navigate = useNavigate();

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleNextQuestion = () => {
    if (!selectedOption) {
      return;
    }

    const currentQuestion = questionsData[0].questions[currentQuestionIndex];
    const selectedOptionData = currentQuestion.options.find(
      (option) => option.value === selectedOption
    );

    if (selectedOptionData) {
      setResults((prevResults) => {
        const updatedResults = { ...prevResults };
        for (const [skill, score] of Object.entries(
          selectedOptionData.skills
        )) {
          updatedResults[skill] =
            (updatedResults[skill] || 0) + (score || 0);
        }
        return updatedResults;
      });
    }

    if (currentQuestionIndex < questionsData[0].questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    } else {
      setIsTestFinished(true);
      localStorage.setItem("quizResults", JSON.stringify(results));
      navigate("/login");
    }

    setSelectedOption("");
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  return {
    currentQuestionIndex,
    selectedOption,
    handleOptionChange,
    handleNextQuestion,
    results,
    isTestFinished,
    handlePreviousQuestion,
  };
};
