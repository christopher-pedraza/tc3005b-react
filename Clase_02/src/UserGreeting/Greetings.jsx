import propTypes from "prop-types";
import Hello from "./Hello";

const Greetings = ({ people }) => {
  return (
    <div>
      <h1>Bienvenido!</h1>
      {people.map((person) => (
        <Hello key={person.name} name={person.name} age={person.age} />
      ))}
    </div>
  );
};

Greetings.propTypes = {
  people: propTypes.array,
};

export default Greetings;
