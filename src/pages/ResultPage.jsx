import TestReset from "@/widgets/TestReset/ui/TestReset";
import ResultChart from "@/entities/ResultChart/ui/ResultChart";
import { useEffect } from "react";
import { useState } from "react";
import StrongSides from "@/widgets/StrongSides/StrongSides";
import SalaryInfo from "@/features/SalaryInfo/ui/SalaryInfo";
import CardMentor from "@/features/CardMentor/ui/CardMentor";
import Footer from "@/entities/Footer/ui/Footer";
import Loading from "@/shared/Loading/ui/Loading";
const ResultPage = () => {
  const [isTestCompleted, setIsTestCompleted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState({
    Frontend: 0,
    Backend: 0,
    "UX/UI дизайнер": 0,
    "Проектный менеджер": 0,
    "Продуктовый менеджер": 0,
    "Базы данных": 0,
  });

  useEffect(() => {
    const savedResults = JSON.parse(localStorage.getItem("quizResults"));
    if (savedResults) {
      setResults(savedResults);
      setIsTestCompleted(true);
    }
  }, []);
  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div>
        <Loading />
      </div>
    );
  }
  return (
    <div className="ResultPage" style={{ padding: "0 20px 20px" }}>
      <TestReset />
      <ResultChart results={results} />
      <StrongSides results={results} />
      <SalaryInfo />
      <CardMentor />
      <Footer />
    </div>
  );
};

export default ResultPage;
