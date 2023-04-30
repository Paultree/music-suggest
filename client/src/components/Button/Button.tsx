import React from "react";
import styles from "./Button.module.scss";

const Button = ({ handleClick, string, genre }: any) => {
  const classes =
    genre == string
      ? genre != "reset"
        ? [styles.Button, styles.Button_Active]
        : [styles.Button]
      : [styles.Button];

  return (
    <div className={classes.join(" ")}>
      <button onClick={handleClick}>{string}</button>
    </div>
  );
};

export default Button;
