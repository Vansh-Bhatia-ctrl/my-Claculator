import React from "react";

const Buttons = ({ onClick, onClear, onDelete, onClickOutput }) => {
  return (
    <div>
      <button onClick={onClear}>C</button>
      <button onClick={() => onClick("/")}>/</button>
      <button onClick={() => onClick("*")}>*</button>
      <button onClick={onDelete}>DEL</button>
      <button onClick={() => onClick("7")}>7</button>
      <button onClick={() => onClick("8")}>8</button>
      <button onClick={() => onClick("9")}>9</button>
      <button onClick={() => onClick("-")}>-</button>
      <button onClick={() => onClick("4")}>4</button>
      <button onClick={() => onClick("5")}>5</button>
      <button onClick={() => onClick("6")}>6</button>
      <button onClick={() => onClick("+")}>+</button>
      <button onClick={() => onClick("1")}>1</button>
      <button onClick={() => onClick("2")}>2</button>
      <button onClick={() => onClick("3")}>3</button>
      <button onClick={onClickOutput}>=</button>
      <button onClick={() => onClick("0")}>0</button>
      <button onClick={() => onClick(".")}>.</button>
    </div>
  );
};

export default Buttons;
