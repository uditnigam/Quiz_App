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
        <div className="question-number">
          <h3 className="texts">
            <i className="fa-solid fa-circle-info"></i> Question No.{" "}
            {currentQuestion + 1}
          </h3>
        </div>
        <div className="timer">
          <Timer
            currentQuestion={currentQuestion}
            handleNextClick={handleNextClick}
          />
        </div>
      </div>
      <div className="question-main">
        <div className="question" key={questionData[currentQuestion]}>
          {" "}
          Q. {questionData.question}
        </div>
        <div className="info-text">
          Please choose one of the following answer:
        </div>
        <div className="options-cont">
          {questionData.answers.map((ele, index) => (
            <Radio
              className={"radio"}
              id={questionData.id}
              option={ele}
              key={ele}
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
