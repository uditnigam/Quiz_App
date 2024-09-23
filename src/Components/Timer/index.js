import { useState, useEffect } from "react";

const Timer = (props) => {
  const { currentQuestion, handleNextClick } = props;
  const [time, setTime] = useState(65);
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  useEffect(() => {
    setTime(65);
  }, [currentQuestion]);

  useEffect(() => {
    if (time <= 0) {
        handleNextClick();
    }
    const interval = setInterval(() => {
      setTime(time - 1);
    }, 1000);
    //cleanup function
    return () => {
      clearInterval(interval);
    };
  },[time]);
  return (
    <>
      <h3>{minutes < 10 ? `0${minutes}` : minutes}</h3>
      <h3>{seconds < 10 ? `0${seconds}` : seconds}</h3>
    </>
  );
};
export default Timer;
