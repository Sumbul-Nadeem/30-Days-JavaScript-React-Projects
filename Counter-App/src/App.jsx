import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [animate, setAnimate] = useState(false);

  // Trigger animation when count changes
  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 300);
    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div className="counter-container">
      <h1 className="counter-title">React Counter</h1>
      <div className="counter-display">
        <span className={`counter-number ${animate ? "pop" : ""}`}>
          {count}
        </span>
      </div>
      <div className="counter-buttons">
        <button className="btn decrement" onClick={() => setCount(count - 1)} disabled={count === 0}>-</button>
        <button className="btn reset" onClick={() => setCount(0)}>Reset</button>
        <button className="btn increment" onClick={() => setCount(count + 1)}>+</button>
        
      </div>
    </div>
  );
}

export default App;
