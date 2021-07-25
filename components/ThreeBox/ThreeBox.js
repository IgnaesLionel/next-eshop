import React from "react";
import classes from "./ThreeBox.module.scss";

const ThreeBox = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}> Box</div>
      <div className={classes.content}> Box</div>
      <div className={classes.content}> Box</div>
    </div>
  );
};

export default ThreeBox;
