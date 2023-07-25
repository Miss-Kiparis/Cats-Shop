import "./CartPage.scss";
import CheckoutForm from "../../Form/CheckoutForm";
import { useDispatch, useSelector } from "react-redux";
import { actionRemoveShoppingCart } from "../../store/actions";
import { selectShoppingCart } from "../../store/selectors";

function CartPage(props) {
  const { cats } = props;
  const dispatch = useDispatch();
  const shoppingCart = useSelector(selectShoppingCart);

  const isShoppingCart = shoppingCart.length === 0;

  const deleteItem = (id) => {
    const newShoppingCart = shoppingCart.filter((item) => item !== id);
    localStorage.setItem("cartList", JSON.stringify(newShoppingCart));
    dispatch(actionRemoveShoppingCart(id));
  };

  const catCartMap = cats?.map((item) => (
    <div className="cat__card" key={item.id} id={item.id}>
      <div
        className="cat__card--pic cats__pic cats__cartpic"
        style={{
          backgroundImage: "url(" + item.image + ")",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="cat__card--description__container description__container">
        <p className="description__container--item description__container--item--name">
          {item.name}
        </p>
        <p className="description__container--item description__container--item--color">
          Color: {item.color}
        </p>

        <p className="description__container--item description__container--item--price">
          {item.price} &euro;
        </p>
      </div>
      <div className="btn__container">
        <button
          onClick={(event) => {
            const id = event.target.closest(".cat__card").id;
            deleteItem(id);
          }}
          className="card__remove"
        >
          Remove
        </button>
      </div>
    </div>
  ));

  return (
    <div className="cart-page">
      <div className="cart-page__header">
        <h1 className="cart-page__header--title">My Shopping Cart</h1>
      </div>

      <div className="cart-page__content">
        {isShoppingCart && (
          <div className="empty__wishlist--container">
            <p className="empty__wishlist--container-desc">
              Your Shopping Cart is Empty.
            </p>
            <p className="empty__wishlist--container-desc">
              Please add some items to the list first :)
            </p>
            <img
              className="empty__wishlist--container--pic"
              src="./icons/sad_cat.gif"
              alt="sad cat"
            />
          </div>
        )}
        {!isShoppingCart && (
          <>
            <div className="cart-page__content--list">{catCartMap}</div>
            <CheckoutForm cats={cats} />
          </>
        )}
      </div>

      <div className="cart-page__footer"></div>
    </div>
  );
}

export default CartPage;
