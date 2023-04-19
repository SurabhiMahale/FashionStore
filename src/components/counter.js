import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = (item) => {
    console.log()
    setCount(count + 1);
  };

  const handleDecrement = () => {
    count > 0 ? setCount(count - 1) : setCount(0);
  };

  return (
    <>
      <div className="d-flex align-items-center mt-4">
        <button className="btn btn-secondary btn-sm" onClick={handleIncrement}>
          +
        </button>
        <div className="mx-3">{count}</div>
        <button className="btn btn-secondary btn-sm" onClick={handleDecrement}>
          -
        </button>
      </div>
    </>
  );
}

export default Counter;
