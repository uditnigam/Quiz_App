import Button from "../Button";
import "./Styles/index.css";
import QuestionContainer from "../QuestionContainer";
import QuestionData from "../../Assets/questions.json";

const Quiz = (props) => {
  const { currentQuestion, handleNextClick, selectedOption, setSelectedOption} = props;
  return (
    <div className="question-container">
      <QuestionContainer
      selectedOption={selectedOption}
      setSelectedOption={setSelectedOption}
        questionData={QuestionData[currentQuestion]}
        currentQuestion={currentQuestion}
        handleNextClick={handleNextClick}
      />
      {QuestionData.length - 1 === currentQuestion ? (
        <Button text={"Finish"} handleOnClick={handleNextClick} className="finish-button buttons"/>
      ) : (
        <Button text={"Next"} handleOnClick={handleNextClick} className="next-button buttons" arrow={<i class="fa-solid fa-greater-than"></i>}/>
      )}
    </div>
  );
};
export default Quiz;
