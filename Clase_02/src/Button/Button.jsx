import propTypes from "prop-types";

import "./Button.css";

const Button = ({ children, onClick, classes }) => {
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: propTypes.string,
  onClick: propTypes.func,
  classes: propTypes.string,
};

export default Button;
