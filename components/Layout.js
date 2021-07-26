import React from "react";
import NavBar from "./NavBar";
import Notify from "./Notify";
import Modal from "./Modal";
import Footer from "./Footer/Footer";
import FullScreenMenu from "./FullScreenMenu/FullScreenMenu";

function Layout({ children }) {
  return (
    <div className="container">
      <NavBar />

      <FullScreenMenu />
      <Notify />
      <Modal />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
