import { useState } from "react";

const Radio = (props) => {
    const {option, index} = props;
    const [selectedOption, setSelectedOption] = useState("");

    const handleOptionSelected = (event)=>{
      setSelectedOption(event.target.value);
      // console.log(event.target.value)
    }
  return (
    <>
      <div className="radio" key={index} onChange={handleOptionSelected} >
        <input name="radio" type="radio" value={option}/>
        <span>{option}</span> 
      </div>
    </>
  );
};
export default Radio;
