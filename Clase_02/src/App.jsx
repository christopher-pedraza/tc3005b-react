import Counter from "./Counter/Counter";
import Greetings from "./UserGreeting/Greetings";

import { people } from "./Data/Data";

function App() {
  return (
    <>
      <Greetings people={people} />
      <Counter />
    </>
  );
}

export default App;
