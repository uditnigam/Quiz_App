import QuestionData from "../../Assets/questions.json";
import Image from "../../Assets/image.svg";
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
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedAnswers, setSelectedAnswers] = useState([]);

  const handlePlayQuizBtn = () => {
    if (finishState) {
      setCurrentQuestion(0);
      setFinishState(false);
    }
    setPlayState(true);
  };

  const handleNextClick = () => {
    let answersObject = {
      id: currentQuestion + 1,
      answer: selectedOption,
    };
    if (QuestionData.length - 1 === currentQuestion) {
      setFinishState(true);
      setPlayState(false);
    }
    setSelectedOption("");
    setSelectedAnswers([...selectedAnswers, answersObject]);
    setCurrentQuestion(currentQuestion + 1);
  };
  return (
    <div className="main">
      <Header />
      <div className="layout">
        {!playState && !finishState ? (
          <div className="homepage-display-icons">
            <img className="homepage-image" src={Image}></img>
            <Button
              handleOnClick={handlePlayQuizBtn}
              text={"Play Quiz"}
              className="play_btn"
            />
          </div>
        ) : !finishState ? (
          <Quiz
            currentQuestion={currentQuestion}
            handleNextClick={handleNextClick}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        ) : (
          <Result
            currentQuestion={currentQuestion}
            handlePlayQuizBtn={handlePlayQuizBtn}
            selectedAnswers={selectedAnswers}
          />
        )}
      </div>
    </div>
  );
};

export default Homepage;
