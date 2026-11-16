"use client";

import { useState } from "react";

// step sets how much each click adds, color sets the button background.
export default function Counter({ name, step, color }) {
  const [count, setCount] = useState(0);

  function increment() {
    const next = count + step;
    setCount(next > 10 ? 0 : next);
  }

  return (
    <div>
      <p>
        {name}: {count}
      </p>
      <button onClick={increment} style={{ backgroundColor: color }}>
        Add {step}
      </button>
    </div>
  );
}
