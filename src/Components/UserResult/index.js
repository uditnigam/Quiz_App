import QuestionData from "../../Assets/questions.json";
import Radio from "../Radio";
import "./Styles/index.css";

const UserResult = (props) => {
  const { currentQuestion, selectedAnswers, className } = props;

  return (
    <>
      {QuestionData.map((data, quesIndex) => (
        <div key={quesIndex}
          className={`result-page-question ${
            selectedAnswers[quesIndex].answer === data["correct-answer"]
              ? "green"
              : "red"
          }`}
        >
          <div className="result-ques-up">
            <div>Question No. {data.id}</div>
            <div className="question-center">
              <div className="question-head" style={{ border: "none" }}>
                {data.question}
              </div>
              <div className="options">
                {data.answers.map((ele, index) => (
                  <Radio
                    key={ele}
                    className={"radio-options"}
                    id={data.id}
                    option={ele}
                    index={index}
                    selectedOption={selectedAnswers[quesIndex].answer}
                    disabled={true}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="info-text">
            Correct Answer : {data["correct-answer"]}
          </div>
        </div>
      ))}
    </>
  );
};
export default UserResult;
