import { useState } from "react";
import PlusButton from "../Button/PlusButton";
import MinusButton from "../Button/MinusButton";
import ResetButton from "../Button/ResetButton";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>
        <span>
          <strong>Contador: </strong>
          {count}
        </span>
      </div>
      <PlusButton setCount={setCount} />
      <ResetButton setCount={setCount} />
      <MinusButton setCount={setCount} />
    </div>
  );
};

export default Counter;
