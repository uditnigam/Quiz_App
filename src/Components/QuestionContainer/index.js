import "./Styles/index.css";
import Timer from "../Timer";

const QuestionContainer = (props) =>{
    const {questionData, currentQuestion} = props;
    return(
        <div className="question-page">
            <div className="question-details">
                <h3>Question No. {currentQuestion + 1}</h3>
                <h3><Timer/></h3>
            </div>
            <div className="question-main">
                <div>{questionData.question}</div>
                <div>
                    <div>a - {questionData.A}</div>
                    <div>b - {questionData.B}</div>
                    <div>c - {questionData.C}</div>
                    <div>d - {questionData.D}</div>
                </div>
            </div>
        </div>
    )
};

export default QuestionContainer;