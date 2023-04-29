import React from "react";

const Button = ({ handleClick, string }: any) => {
  return (
    <div>
      <button onClick={handleClick}>{string}</button>
    </div>
  );
};

export default Button;
