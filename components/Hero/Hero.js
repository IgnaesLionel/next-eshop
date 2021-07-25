import React from "react";
import classes from "./Hero.module.scss";
import BtnPulseSass from "../BtnRoundPulse/BtnRoundPulse";
import Image from "next/image";
import logo from "./logo-white.png";

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header__logoBox}>
        <Image src={logo} width={60} height={30} alt="logo" />{" "}
      </div>
      <div className={classes.header__textBox}>
        <h1 className={classes.headingPrimary}>
          <span className={classes.headingPrimary__main}> Cuvelier</span>
          <span className={classes.headingPrimary__sub}>
            Etablissement <br></br>pour professionnels et particulier
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
