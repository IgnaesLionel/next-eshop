import React, { useContext, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { DataContext } from "../store/GlobalState";
import Cookie from "js-cookie";
import classes from "./NavBar.module.scss";
import NavBtn from "./NavBtn/NavBtn";
import CartItemModal from "../components/CartItemModal/CartItemModal";

function NavBar() {
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();
  const { state, dispatch } = useContext(DataContext);
  const { auth, cart } = state;

  const isActive = (r) => {
    if (r === router.pathname) {
      return " active";
    } else {
      return "";
    }
  };

  const handleLogout = () => {
    Cookie.remove("refreshtoken", { path: "api/auth/accessToken" });
    localStorage.removeItem("firstLogin");
    dispatch({ type: "AUTH", payload: {} });
    dispatch({ type: "NOTIFY", payload: { success: "Déconnection !" } });
    return router.push("/");
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const addClasses = () => {
    let cartModalShow = showModal ? `${classes.cartModalShow}` : null;

    return cartModalShow;
  };

  const cartModal = () => {
    return (
      <div
        className={`${classes.cartModal} ${addClasses()}`}
        onMouseOver={() => setShowModal(true)}
        onMouseLeave={() => setShowModal(false)}
      >
        <button
          onClick={() => {
            handleCloseModal();
          }}
          className={`${classes.cartModalButton2}`}
        >
          Valider ma commande
        </button>{" "}
        {cart.map((item) => (
          <CartItemModal
            key={item._id}
            item={item}
            dispatch={dispatch}
            cart={cart}
          />
        ))}{" "}
        <Link href="/cart">
          <button
            onClick={() => {
              handleCloseModal();
            }}
            className={`${classes.cartModalButton}`}
          >
            Voir mon panier
          </button>
        </Link>
      </div>
    );
  };

  const adminRouter = () => {
    return (
      <>
        <Link href="/users">
          <a className="dropdown-item">Utilisateurs</a>
        </Link>
        <Link href="/create">
          <a className="dropdown-item">Création</a>
        </Link>
        <Link href="/categories">
          <a className="dropdown-item">Categories</a>
        </Link>
      </>
    );
  };

  const loggedRouter = () => {
    return (
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <img
            src={auth.user.avatar}
            alt={auth.user.avatar}
            style={{
              borderRadius: "50%",
              width: "30px",
              height: "30px",
              color: "white",
              transform: "translateY(-3px)",
              marginRight: "3px",
            }}
          />{" "}
          <span
            style={{
              color: "white",
            }}
          >
            {" "}
            {auth.user.name}
          </span>
        </a>

        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link href="/profile">
            <a className="dropdown-item">Mon Compte</a>
          </Link>
          {auth.user.role === "admin" && adminRouter()}
          <div className="dropdown-divider"></div>
          <button className="dropdown-item" onClick={handleLogout}>
            Déconnection
          </button>
        </div>
      </li>
    );
  };

  return (
    <nav className={`${classes.navigation} navbar navbar-expand-lg `}>
      <div className={classes.burgerBtn}></div>
      <div className={classes.container}>
        <Link href="/">
          <a>
            <NavBtn url="/" name="Cuvelier" />
          </a>
        </Link>
        <Link href="/produits">
          <a>
            <NavBtn url="/produits" name="Nos produits" />
          </a>
        </Link>
        <Link href="/moyens">
          <a className="a">
            <NavBtn url="/moyens" name="Nos moyens" />
          </a>
        </Link>
        <Link href="/actualites">
          <a>
            <NavBtn
              url="/actualites"
              name="Nos actualités
            "
            />
          </a>
        </Link>
        <Link href="/contact">
          <a>
            <NavBtn url="/contact" name="Contactez-nous" />
          </a>
        </Link>
        <Link href="/cart">
          <a className={"nav-link" + isActive("/cart")}>
            <i
              onMouseOver={() => setShowModal(true)}
              className={`fas fa-shopping-cart fa-2x position-relative ${classes.cart}`}
              aria-hidden="true"
            >
              <span
                className="position-absolute"
                style={{
                  padding: "3px 6px",
                  background: "#ed143d",
                  borderRadius: "50%",
                  top: "-3px",
                  right: "2px",
                  color: "white",
                  fontSize: "14px",
                }}
              >
                {cart.length}
              </span>
            </i>{" "}
          </a>
        </Link>
        {cartModal()}
      </div>
      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarNavDropdown"
      >
        <ul className="navbar-nav p-1">
          {Object.keys(auth).length === 0 ? (
            <li className="nav-item">
              <Link href="/signin">
                <a className={"nav-link" + isActive("/signin")}>
                  <i className="fas fa-user" aria-hidden="true"></i>{" "}
                  <span
                    style={{
                      color: "white",
                      fontSize: "10px",
                    }}
                  >
                    Se connecter
                  </span>
                </a>
              </Link>
            </li>
          ) : (
            loggedRouter()
          )}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
