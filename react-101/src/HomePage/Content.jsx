import { useState } from "react";

import propTyoes from "prop-types";

export const Suma = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  return (
    <>
      <h3 className="text-2xl font-bold">SUMA:</h3>
      <form>
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          className="input-sum"
        />
        +
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          className="input-sum"
        />
        ={parseInt(num1) + parseInt(num2)}
      </form>
    </>
  );
};

export const Content = ({ texto }) => {
  return (
    <>
      <p>{texto}</p>
      <p className="text-3xl font-bold underline bg-red-600">
        Prueba de tailwind
      </p>
    </>
  );
};

Content.propTypes = {
  texto: propTyoes.string,
};
