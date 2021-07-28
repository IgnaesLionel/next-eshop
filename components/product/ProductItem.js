import { useState } from "react";
import Link from "next/link";
import { useContext } from "react";
import { DataContext } from "../../store/GlobalState";
import { addToCart } from "../../store/Actions";
import classes from "./ProductItem.module.scss";

const ProductItem = ({ product, handleCheck }) => {
  const { state, dispatch } = useContext(DataContext);
  const { cart, auth } = state;

  const [number, setNumber] = useState(0);

  /*   onClick={() => dispatch(increase(cart, product._id))} */

  const quantity = (action) => {
    switch (action) {
      case "plus":
        if (number < product.inStock) {
          setNumber(number + 1);
        }
        break;
      case "moins":
        if (number != 0) {
          setNumber(number - 1);
        }
        break;
      default:
        break;
    }
  };

  const addThisItems = () => {
    dispatch(addToCart(product, cart));
    console.log(number);
  };

  const userLink = () => {
    return (
      <>
        <button
          className="btn btn-success"
          style={{ marginLeft: "5px", flex: 1 }}
          disabled={product.inStock === 0 ? true : false}
          onClick={() => addThisItems()}
        >
          Acheter
          <i
            className={`fas fa-shopping-cart fa-1x position-relative ${classes.cart}`}
            aria-hidden="true"
          ></i>{" "}
        </button>
      </>
    );
  };

  const adminLink = () => {
    return (
      <>
        <Link href={`create/${product._id}`}>
          <a className="btn btn-info" style={{ marginRight: "5px", flex: 1 }}>
            Editer
          </a>
        </Link>
        <button
          className="btn btn-danger"
          style={{ marginLeft: "5px", flex: 1 }}
          data-toggle="modal"
          data-target="#exampleModal"
          onClick={() =>
            dispatch({
              type: "ADD_MODAL",
              payload: [
                {
                  data: "",
                  id: product._id,
                  title: product.title,
                  type: "DELETE_PRODUCT",
                },
              ],
            })
          }
        >
          Supprimer
        </button>
      </>
    );
  };

  return (
    <div className={`${classes.card}`}>
      {auth.user && auth.user.role === "admin" && (
        <input
          type="checkbox"
          checked={product.checked}
          className="position-absolute"
          style={{ height: "20px", width: "20px" }}
          onChange={() => handleCheck(product._id)}
        />
      )}

      <Link href={`product/${product._id}`}>
        <img
          className={`${classes.cardImgTop}`}
          src={product.images[0].url}
          alt={product.images[0].url}
        />
      </Link>

      <div className="card-body">
        <Link href={`product/${product._id}`}>
          <div>
            <h5
              className={`${classes.cardTitle} text-capitalize`}
              title={product.title}
            >
              {product.title}
            </h5>

            <p className={`${classes.cardText}`} title={product.description}>
              {product.description}
            </p>
          </div>
        </Link>
        <div>
          <div>
            <tr>
              <td className="align-middle" style={{ minWidth: "150px" }}>
                <button
                  className="btn btn-outline-secondary"
                  onClick={() => quantity("moins")}
                  disabled={product === 1 ? true : false}
                >
                  {" "}
                  -{" "}
                </button>

                <span className="px-3">{number}</span>

                <button
                  className="btn btn-outline-secondary"
                  onClick={() => quantity("plus")}
                  disabled={product === product.inStock ? true : false}
                >
                  {" "}
                  +{" "}
                </button>
              </td>
            </tr>
          </div>

          <h6 className="text-danger">{product.price}€ TTC</h6>
          {product.inStock > 0 ? (
            <h6 className="text-danger">En stock: {product.inStock}</h6>
          ) : (
            <h6 className="text-danger">En rupture</h6>
          )}
        </div>

        <div className="row justify-content-between mx-0">
          {!auth.user || auth.user.role !== "admin" ? userLink() : adminLink()}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
