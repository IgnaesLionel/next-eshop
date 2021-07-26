import React from "react";
import classes from "./Footer.module.scss";
import logo2x from "./logo-green-2x.png";
import logo1x from "./logo-green-1x.png";
import logoSmall2x from "./logo-green-small-2x.png";
import logoSmall1x from "./logo-green-small-1x.png";

const Footer00 = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer__logoBox}>
        <picture className={classes.footer__logo}>
          <source
            srcSet={`${logoSmall1x} 1x, ${logoSmall2x} 2x`}
            media="(max-width: 37.5em)"
          />
          <img srcSet={`${logo1x} 1x, ${logo2x} 2x`} alt="Full logo"></img>
        </picture>
      </div>

      <div className={classes.container}>
        <div className="col-1-of-2">
          <div className={classes.footer__navigation}>
            <ul>
              <li className={classes.footer__item}>
                <a href="#" className={classes.footer__link}>
                  Compagny
                </a>
              </li>
              <li className={classes.footer__item}>
                <a href="#" className={classes.footer__link}>
                  Contact us
                </a>
              </li>
              <li className={classes.footer__item}>
                <a href="#" className={classes.footer__link}>
                  Carrers
                </a>
              </li>
              <li className={classes.footer__item}>
                <a href="#" className={classes.footer__link}>
                  Privacy policy
                </a>
              </li>
              <li className={classes.footer__item}>
                <a href="#" className={classes.footer__link}>
                  Terms
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className={classes.footer__copyright}>
            Réalisation
            <a href="#" className={classes.footer__link}>
              Lionel Ignaes
            </a>
            <br></br>
            Copyright Cuvelier&copy;
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer00;
