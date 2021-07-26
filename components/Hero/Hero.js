import React from "react";
import classes from "./Hero.module.scss";
import BtnPulseSass from "../BtnRoundPulse/BtnRoundPulse";
import Image from "next/image";
import logo from "./Logo.png";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.annee}>
        a votre service <br />
        depuis 1977 !
      </div>
      <div className={classes.header__logoBox}>
        <Image src={logo} width={200} height={200} alt="logo" />{" "}
      </div>
      <div className={classes.header__textBox}>
        <h1 className={classes.headingPrimary}>
          <span className={classes.headingPrimary__main}> Cuvelier</span>
          <span className={classes.headingPrimary__sub}>
            Grossiste alimentaire - Dunkerque
          </span>
        </h1>

        <BtnPulseSass
          text="Découvrez nos produits!"
          color="white"
          path="#section-tours"
        />
      </div>
    </header>
  );
};

export default Header;
