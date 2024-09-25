import ScoreCard from "../ScoreCard";
import UserResult from "../UserResult";
import "./Styles/index.css";

const Result = (props) => {
  const { currentQuestion, handlePlayQuizBtn, selectedAnswers } = props;
  console.log(selectedAnswers);

  return (
    <>
      <div className="result-page">
        <ScoreCard
          handlePlayQuizBtn={handlePlayQuizBtn}
          selectedAnswers={selectedAnswers}
        />
        <UserResult
          currentQuestion={currentQuestion}
          selectedAnswers={selectedAnswers}
        />
      </div>
    </>
  );
};
export default Result;
