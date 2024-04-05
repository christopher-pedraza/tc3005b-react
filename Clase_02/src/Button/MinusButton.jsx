import propTypes from "prop-types";
import Button from "./Button";

const MinusButton = ({ setCount }) => {
  const handleClick = () => {
    setCount((prevCount) => prevCount - 1);
  };
  return (
    <Button onClick={handleClick} classes={"button-default minus-button"}>
      -
    </Button>
  );
};

MinusButton.propTypes = {
  setCount: propTypes.func,
};

export default MinusButton;
