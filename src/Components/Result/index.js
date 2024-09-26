import ScoreCard from "../ScoreCard";
import UserResult from "../UserResult";
import "./Styles/index.css";

const Result = (props) => {
  const {handlePlayQuizBtn, selectedAnswers } = props;

  return (
    <>
      <div className="result-page">
        <ScoreCard
          handlePlayQuizBtn={handlePlayQuizBtn}
          selectedAnswers={selectedAnswers}
        />
        <UserResult
          selectedAnswers={selectedAnswers}
        />
      </div>
    </>
  );
};
export default Result;
