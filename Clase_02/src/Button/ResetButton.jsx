import propTypes from "prop-types";
import Button from "./Button";

const PlusButton = ({ setCount }) => {
  const handleClick = () => {
    setCount(0);
  };
  return <Button onClick={handleClick}>Reset</Button>;
};

PlusButton.propTypes = {
  setCount: propTypes.func,
};

export default PlusButton;
