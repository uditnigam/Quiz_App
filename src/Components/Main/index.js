import QuestionData from "../../Assets/questions.json";
import Button from "../Button";
import Header from "../Header";
import Quiz from "../Quiz";
import Result from "../Result";
import { useState } from "react";
import "./Styles/index.css";

const Homepage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [playState, setPlayState] = useState(false);
  const [finishState, setFinishState] = useState(false);

  const handlePlayQuizBtn = () => {
    if (finishState) {
      setCurrentQuestion(0);
      setFinishState(false);
    }
    setPlayState(true);
  };

  const handleNextClick = () => {
    if (QuestionData.length - 1 === currentQuestion) {
      setFinishState(true);
      setPlayState(false);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <>
      <Header />
      {!playState && !finishState ? (
        <Button
          handleOnClick={handlePlayQuizBtn}
          text={"Play Quiz"}
          className="button"
        />
      ) : !finishState ? (
        <Quiz
          currentQuestion={currentQuestion}
          handleNextClick={handleNextClick}
        />
      ) : (
        <Result handlePlayQuizBtn={handlePlayQuizBtn} />
      )}
    </>
  );
};

export default Homepage;
