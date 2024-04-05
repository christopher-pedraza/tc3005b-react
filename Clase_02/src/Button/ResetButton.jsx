import propTypes from "prop-types";
import Button from "./Button";

const ResetButton = ({ setCount }) => {
  const handleClick = () => {
    setCount(0);
  };
  return (
    <Button onClick={handleClick} classes={"button-default reset-button"}>
      Reset
    </Button>
  );
};

ResetButton.propTypes = {
  setCount: propTypes.func,
};

export default ResetButton;
