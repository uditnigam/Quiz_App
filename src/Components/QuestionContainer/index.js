import "./Styles/index.css";
import Timer from "../Timer";
import Radio from "../Radio";

const QuestionContainer = (props) => {
  const {
    questionData,
    currentQuestion,
    handleNextClick,
    selectedOption,
    setSelectedOption,
  } = props;
  return (
    <div className="question-page">
      <div className="question-details">
        <h3 className="question-number">
          <i class="fa-solid fa-circle-info"></i> Question No.{" "}
          {currentQuestion + 1}
        </h3>
        <h3 className="timer">
          <Timer
            currentQuestion={currentQuestion}
            handleNextClick={handleNextClick}
          />
        </h3>
      </div>
      <div className="question-main">
        <div className="question"> Q. {questionData.question}</div>
        <div className="options-cont">
          {questionData.answers.map((ele, index) => (
            <Radio
              className={"radio"}
              id={questionData.id}
              option={ele}
              index={index}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
              currentQuestion={currentQuestion}
              questionData={questionData}
              disabled={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionContainer;
