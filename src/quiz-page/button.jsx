import { Fragment } from "react";

const Button = (props) => {
  const handleChange = props.handleChange;
  const currentQuestion = props.currentQuestion;
  const uuid = props.uuid;
  return (
    <Fragment>
      {currentQuestion &&
        currentQuestion.options.map((btn) => (
          <button onClick={() => handleChange(btn)} key={uuid()}>
            {btn}
          </button>
        ))}
    </Fragment>
  );
};

export default Button;
