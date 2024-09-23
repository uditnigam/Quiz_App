import "./Styles/index.css";

const Button = (props) => {
  const { text, handleOnClick, className, arrow } = props;
  
  return (
    <>
      <button className={className} style={{cursor: "pointer"}} onClick={handleOnClick}>
        {text} {arrow}
      </button>
    </>
  );
};
export default Button;
