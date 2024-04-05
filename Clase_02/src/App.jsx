import Counter from "./Counter/Counter";
import Greetings from "./UserGreeting/Greetings";

function App() {
  const people = [
    {
      name: "Christopher",
      age: 21,
    },
    {
      name: "Luis",
      age: 22,
    },
    {
      name: "Carlos",
      age: 23,
    },
  ];
  return (
    <>
      <Greetings people={people} />
      <Counter />
    </>
  );
}

export default App;
