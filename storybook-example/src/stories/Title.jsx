import propTypes from "prop-types";
import "./Title.css";

export const Title = ({ title, primary, size }) => {
  const mode = primary
    ? "storybook-title--primary"
    : "storybook-title--secondary";

  return (
    <h1
      className={["storybook-title", `storybook-title--${size}`, mode].join(
        " "
      )}
    >
      {title}
    </h1>
  );
};

Title.propTypes = {
  title: propTypes.string.isRequired,
  primary: propTypes.bool,
  size: propTypes.oneOf(["small", "medium", "large"]),
};
