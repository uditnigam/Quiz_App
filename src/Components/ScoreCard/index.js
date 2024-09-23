import Button from "../Button";
import QuestionData from "../../Assets/questions.json";
// import UserResult from "../UserResult";
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
        <h2>YOUR STATS</h2>
        <h4>{(correctAnswers * 100) / QuestionData.length >= 60 ? "Pass" : "Fail"}</h4>
        <div>Total Question: {QuestionData.length}</div>
        <div>Correct Answers: {correctAnswers}</div>
        <div>Your Score: {(correctAnswers * 100) / QuestionData.length}%</div>
        <div>Passing Score: 60%</div>
        <Button
          text={"Play Again"}
          handleOnClick={handlePlayQuizBtn}
          className="play-again-btn"
          arrow={<i class="fa-solid fa-rotate"></i>}
        />
      </div>
    </>
  );
};
export default ScoreCard;
