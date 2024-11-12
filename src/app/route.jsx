import { Route, Routes } from "react-router-dom";
import HomePage from "@/pages/HomePage";
import QuizPage from "@/pages/QuizPage";
import AuthPage from "@/pages/AuthPage";
import ResultPage from "@/pages/ResultPage";
import Loading from "@/shared/Loading/ui/Loading";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test-page" element={<QuizPage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/result-page" element={<ResultPage />} />
        <Route path="/loading" element={<Loading/>}/>
      </Routes>
    </>
  );
};

export default Routing;
