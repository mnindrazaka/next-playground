"use client";

import { useState } from "react";

export default function ProductAmount() {
  const [amount, setAmount] = useState(0);

  function onClickPlus() {
    setAmount(amount + 1);
  }

  function onClickMinus() {
    if (amount > 0) {
      setAmount(amount - 1);
    }
  }

  return (
    <div>
      <button onClick={onClickPlus}>+</button>
      <p>{amount}</p>
      <button onClick={onClickMinus}>-</button>
      <p>{amount}</p>
    </div>
  );
}
