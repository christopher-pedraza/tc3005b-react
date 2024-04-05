import propTypes from "prop-types";

const Hello = ({ name, age }) => {
  return (
    <div>
      <p>
        Hola {name}, tienes {age} años!
      </p>
    </div>
  );
};

Hello.propTypes = {
  name: propTypes.string,
  age: propTypes.number,
};

export default Hello;
