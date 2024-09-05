import Button from "../Button";
import Header from "../Header";
import Quiz from "../Quiz";
import Result from "../Result"
import { useState } from "react";
import "./Styles/index.css";

const Homepage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [playQuizBtn, setPlayQuizBtn] = useState(false);
  const [finishState, setFinishState] = useState(false);
  const handlePlayQuizBtn = () => {
    setPlayQuizBtn(true);
  };
  const handleNextClick = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const handleFinishQuizBtn = () => {
    setFinishState(true);
  };

  return (
    <>
      <Header />
      {!playQuizBtn ? (
        <Button
          handleOnClick={handlePlayQuizBtn}
          text={"Play Quiz"}
          className="button"
        />
      ) : !finishState ? (
        <Quiz
          currentQuestion={currentQuestion}
          handleNextClick={handleNextClick}
          handleFinishQuizBtn={handleFinishQuizBtn}
        />
      ) : (
        <Result />
      )}
    </>
  );
};

export default Homepage;
