import propTypes from "prop-types";

const DisplayCounter = ({ count }) => {
  return (
    <div>
      <span>
        <strong>Contador: </strong>
        {count}
      </span>
    </div>
  );
};

DisplayCounter.propTypes = {
  count: propTypes.number,
};

export default DisplayCounter;
