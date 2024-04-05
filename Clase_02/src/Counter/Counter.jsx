import { useState } from "react";
import PlusButton from "../Button/PlusButton";
import MinusButton from "../Button/MinusButton";
import ResetButton from "../Button/ResetButton";
import DisplayCounter from "./DisplayCounter";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <DisplayCounter count={count} />
      <MinusButton setCount={setCount} />
      <ResetButton setCount={setCount} />
      <PlusButton setCount={setCount} />
    </div>
  );
};

export default Counter;
