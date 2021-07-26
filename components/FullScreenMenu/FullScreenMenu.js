import React, { useState } from "react";
import classes from "./FullScreenMenu.module.scss";

const FullScreenMenu = () => {
  const [count, setCount] = useState(false);

  return (
    <div className={classes.navigation}>
      <input
        type="checkbox"
        className={classes.navigation__checkbox}
        id="navi-toggle"
        defaultChecked={count}
        onChange={() => {
          setCount(!count);
        }} /*  value={count} */
        onClick={() => {
          setCount(!count);
        }}
      ></input>
      <label htmlFor="navi-toggle" className={classes.navigation__button}>
        <span className={classes.navigation__icon}></span>
      </label>

      <div className={classes.navigation__background}>&nbsp;</div>

      <nav className={classes.navigation__nav}>
        <ul className={classes.navigation__list}>
          <li className={classes.navigation__item}>
            <a
              href="/"
              className={classes.navigation__link}
              onClick={() => {
                setCount(!count);
              }}
            >
              <span>01</span>Accueil
            </a>{" "}
          </li>
          <li className={classes.navigation__item}>
            <a
              href="/produits"
              className={classes.navigation__link}
              onClick={() => {
                setCount(!count);
              }}
            >
              <span>02</span>Nos produits
            </a>{" "}
          </li>
          <li className={classes.navigation__item}>
            <a
              href="/moyens"
              className={classes.navigation__link}
              onClick={() => {
                setCount(!count);
              }}
            >
              <span>03</span> Nos moyens
            </a>{" "}
          </li>
          <li className={classes.navigation__item}>
            <a
              href="/actualites"
              className={classes.navigation__link}
              onClick={() => {
                setCount(!count);
              }}
            >
              <span>04</span>actualités
            </a>{" "}
          </li>
          <li className={classes.navigation__item}>
            <a
              href="/contact"
              className={classes.navigation__link}
              onClick={() => {
                setCount(!count);
              }}
            >
              <span>05</span> Contactez-nous
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default FullScreenMenu;
