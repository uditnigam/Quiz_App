import "./Styles/index.css";
import Timer from "../Timer";
import Radio from "../Radio";

const QuestionContainer = (props) => {
  const { questionData, currentQuestion, handleNextClick } = props;
  // const userAnwer = [];
  return (
    <div className="question-page">
      <div className="question-details">
        <h3>Question No. {currentQuestion + 1}</h3>
        <h3>
          <Timer
            currentQuestion={currentQuestion}
            handleNextClick={handleNextClick}
          />
        </h3>
      </div>
      <div className="question-main">
        <div>{questionData.question}</div>
        <div className="options-cont">
          {questionData.answers.map((ele, index) => (
            <Radio option={ele} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionContainer;
