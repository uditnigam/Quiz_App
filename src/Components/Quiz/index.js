import Button from "../Button";
import "./Styles/index.css";
import QuestionContainer from "../QuestionContainer";
import QuestionData from "../../Assets/questions.json";

const Quiz = (props) => {
  const { currentQuestion, handleNextClick} = props;
  return (
    <div className="question-container">
      <QuestionContainer
        questionData={QuestionData[currentQuestion]}
        currentQuestion={currentQuestion}
        handleNextClick={handleNextClick}
      />
      {QuestionData.length - 1 === currentQuestion ? (
        <Button text={"Finish"} handleOnClick={handleNextClick} className="finish-button"/>
      ) : (
        <Button text={"Next"} handleOnClick={handleNextClick} className="next-button"/>
      )}
    </div>
  );
};
export default Quiz;
