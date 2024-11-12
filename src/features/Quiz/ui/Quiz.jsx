import  { useState, useEffect } from "react";
import Question from "@/entities/Quiz/ui/Question";
import { useQuizLogic } from "@/features/Quiz/model/useQuizLogic";
import { questionsData } from "@/features/Quiz/model/questionsData";
import ResultChart from "@/entities/ResultChart/ui/ResultChart";

const Quiz = () => {
  const {
    currentQuestionIndex,
    selectedOption,
    handleOptionChange,
    handleNextQuestion,
    results,
    isTestFinished,
    handlePreviousQuestion,
  } = useQuizLogic();
  
  const [loading, setLoading] = useState(true);
  const [quizQuestions, setQuizQuestions] = useState(questionsData[0].questions); 

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Загрузка вопросов...</div>;
  }

  if (!quizQuestions || quizQuestions.length === 0) {
    return <div>Нет доступных вопросов.</div>;
  }

  const currentQuestion = quizQuestions[currentQuestionIndex];
  return (
    <div className="quiz-container">
      {isTestFinished ? (
        <ResultChart results={results} />
      ) : (
        <Question
          question={currentQuestion}
          selectedOption={selectedOption}
          onOptionChange={handleOptionChange}
          onNextQuestion={handleNextQuestion}
          currentQuestionIndex={currentQuestionIndex}
          totalQuestion={quizQuestions.length}
          onPreviousQuestion = {handlePreviousQuestion}
        />
      )}
    </div>
  );
};

export default Quiz;
