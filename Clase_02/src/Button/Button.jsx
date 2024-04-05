import propTypes from "prop-types";

const Button = ({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
};

Button.propTypes = {
  children: propTypes.string,
  onClick: propTypes.func,
};

export default Button;
