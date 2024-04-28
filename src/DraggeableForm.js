import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Roulette from "./Roulette";
import Runner from "./Runner";

const FormularioTexto = () => {
  const [inputList, setInputList] = useState([
    {
      id: uuid(),
      text: "테스트 111111",
    },
    {
      id: uuid(),
      text: "테스트 222222",
    },
    {
      id: uuid(),
      text: "테스트 333333",
    },
    {
      id: uuid(),
      text: "테스트 444444",
    },
    {
      id: uuid(),
      text: "테스트 555555",
    },
  ]);

  return (
    <div className="main-form">
      <div className="text-title">
        <h2>⭐️Korean🇰🇷 Roulette⭐️</h2>
      </div>
      <Runner />
      <Roulette data={inputList} />
    </div>
  );
};

export default FormularioTexto;
