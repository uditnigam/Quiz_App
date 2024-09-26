import { useState, useEffect } from "react";
import "./Styles/index.css";


const Timer = (props) => {
  const { currentQuestion, handleNextClick } = props;
  const [time, setTime] = useState(120);
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  useEffect(() => {
    setTime(120);
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
      <h3 className="texts minutes">{minutes < 10 ? `0${minutes}` : minutes}</h3>
      <h3 className="texts seconds">{seconds < 10 ? `0${seconds}` : seconds}</h3>
    </>
  );
};
export default Timer;
