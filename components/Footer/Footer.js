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
        <div className={classes.footer__navigation}>
          <ul>
            <li className={classes.footer__item}>
              <a href="/" className={classes.footer__link}>
                Accueil
              </a>
            </li>
            <li className={classes.footer__item}>
              <a href="/produits" className={classes.footer__link}>
                Nos produits
              </a>
            </li>
            <li className={classes.footer__item}>
              <a href="/moyens" className={classes.footer__link}>
                Nos moyens
              </a>
            </li>
            <li className={classes.footer__item}>
              <a href="/actualites" className={classes.footer__link}>
                Nos actualités
              </a>
            </li>
            <li className={classes.footer__item}>
              <a href="/contact" className={classes.footer__link}>
                Contactez-nous
              </a>
            </li>
          </ul>
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
