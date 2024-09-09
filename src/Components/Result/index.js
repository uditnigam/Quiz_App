import Button from "../Button";

const Result = (props) => {
  const { handlePlayQuizBtn } = props;

  return (
    <>
      <h4>Total Question : 10</h4>
      <h4>Correct Answers : 10</h4>
      <Button text={"Play Again"} handleOnClick={handlePlayQuizBtn} />
    </>
  );
};
export default Result;
