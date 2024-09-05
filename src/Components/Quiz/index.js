import Button from "../Button";
import QuestionContainer from "../QuestionContainer";
import QuestionData from "../../Assets/questions.json";

const Quiz = (props) => {
  const { currentQuestion, handleNextClick, handleFinishQuizBtn } = props;
  return (
    <div>
      <QuestionContainer
        questionData={QuestionData[currentQuestion]}
        currentQuestion={currentQuestion}
      />
      {QuestionData.length - 1 === currentQuestion ? (
        <Button text={"Finish"} handleOnClick={handleFinishQuizBtn} />
      ) : (
        <Button text={"Next"} handleOnClick={handleNextClick} />
      )}
    </div>
  );
};
export default Quiz;
