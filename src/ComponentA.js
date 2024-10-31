import React from "react";

const ComponentA = () => {
  return (
    <div>
        <p>Component A</p>
      <button type="button" onClick={() => dispatch("increment")}>
        Increment
      </button>
      <button type="button" onClick={() => dispatch("decrement")}>
        Decrement
      </button>
    </div>
  );
};

export default ComponentA;
