const Button = (props) => {
  const handleChange = props.handleChange;
  const currentQuestion = props.currentQuestion;
  const uuid = props.uuid;
  return (
    <div>
      {currentQuestion &&
        currentQuestion.options.map((btn) => (
          <button onClick={() => handleChange(btn)} key={uuid()} id="effect">
            {btn}
          </button>
        ))}
    </div>
  );
};

export default Button;
