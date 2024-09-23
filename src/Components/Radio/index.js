import "./Styles/index.css";

const Radio = (props) => {
  const { id, option, index, selectedOption, setSelectedOption, disabled, className} = props;

  const handleOptionSelected = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <div className={className} key={index} onChange={handleOptionSelected}>
        <input
          name={`ques ${id}`}
          type="radio"
          value={option}
          id={option}
          checked={option === selectedOption}
          disabled={disabled}
        />
        <label for={option}>{option}</label>
      </div>
    </>
  );
};
export default Radio;
