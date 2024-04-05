import propTypes from "prop-types";
import Button from "./Button";

const PlusButton = ({ setCount }) => {
  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return <Button onClick={handleClick}>+</Button>;
};

PlusButton.propTypes = {
  setCount: propTypes.func,
};

export default PlusButton;
