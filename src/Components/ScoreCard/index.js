import Button from "../Button";
import QuestionData from "../../Assets/questions.json";
import "./Styles/index.css";
import { useState, useEffect } from "react";

const ScoreCard = (props) => {
  const { handlePlayQuizBtn, selectedAnswers } = props;
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    if (selectedAnswers.length > 0) {
      let correctCount = 0;
      selectedAnswers.forEach((e) => {
        QuestionData.forEach((event) => {
          if (e.id === event.id) {
            if (e.answer === event["correct-answer"]) {
              correctCount += 1;
            }
          }
        });
      });
      setCorrectAnswers(correctCount);
    }
  }, [selectedAnswers]);

  return (
    <>
      <div className="scorecard">
        <h2 className="scorecard-header info-text">Your Stats</h2>
        <h3
          className={`result-declaration ${
            (correctAnswers * 100) / QuestionData.length >= 60 ? "pass" : "fail"
          }`}
        >
          {(correctAnswers * 100) / QuestionData.length >= 60 ? "PASS" : "FAIL"}
        </h3>
        <div className="scorecard-elements">
          Total Question: {QuestionData.length}
        </div>
        <div className="scorecard-elements">
          Correct Answers: {correctAnswers}
        </div>
        <div className="scorecard-elements">
          Your Score: {(correctAnswers * 100) / QuestionData.length}%
        </div>
        <div className="scorecard-elements">Passing Score: 60%</div>
        <Button
          text={"Play Again"}
          handleOnClick={handlePlayQuizBtn}
          className="play-again-btn"
          arrow={<i className="fa-solid fa-rotate"></i>}
        />
      </div>
    </>
  );
};
export default ScoreCard;
