import React from "react";

const Button = ({ handleClick, children }) => {
  console.log(`rendering button ${children}`);

  return (
    <p>
      <button type="button" onClick={handleClick}>
        {children}
      </button>
    </p>
  );
};

export default React.memo(Button);
