import React, { useState } from "react";
import Buttons from "./Buttons.jsx";
import * as math from "mathjs";

const InputAndButton = () => {
  const operators = ["/", "*", "-", "+"];

  const [userInput, setUserInput] = useState("");

  const handleUserNumber = (value) => {
    setUserInput((prev) => {
      if (operators.includes(value)) {
        if (prev === "") {
          return prev;
        } else if (operators.includes(prev.slice(-1))) {
          return prev.slice(0, -1) + value;
        } else {
          return prev + value;
        }
      } else {
        return prev + value;
      }
    });
  };

  const handleDelete = () => {
    setUserInput((prev) => prev.slice(0, -1));
  };

  const handleClear = () => {
    setUserInput("");
  };

  const handleOutput = () => {
    try {
      setUserInput(String(math.evaluate(userInput)));
    } catch (error) {
      alert("Invalid expression");
    }
  };

  return (
    <div>
      <div className="calculator">
        <input type="text" id="display" value={userInput} readOnly />
        <div className="buttons">
          <Buttons
            onClick={handleUserNumber}
            onClear={handleClear}
            onDelete={handleDelete}
            onClickOutput={handleOutput}
          />
        </div>
      </div>
    </div>
  );
};

export default InputAndButton;
