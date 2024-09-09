const Button = (props) => {
  const { text, handleOnClick, className } = props;
  
  return (
    <div>
      <button className={className} onClick={handleOnClick}>
        {text}
      </button>
    </div>
  );
};
export default Button;
