import PropTypes from "prop-types";
import "./Header.scss";
import { ReactComponent as Star } from "./Star.svg";
import { Link } from "react-router-dom";

function Header(props) {
  const cartCounter = !!props.counter ? props.counter.length : "0";
  const favCounter = !!props.starCounter ? props.starCounter.length : "0";

  return (
    <>
      <div className="header__container">
        <div className="header__container--content">
          <Link className="logo__link" to="/">
            <h2 className="top__header--logo logo">CATS</h2>
          </Link>

          <nav className="header__container--content__nav header__nav">
            <ul className="header__nav--list nav__list">
              <li className="nav__list--item nav__item">
                <Link className="nav__item--link nav__link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav__list--item nav__item">
                <Link className="nav__item--link nav__link" to="/doggo">
                  Doggo Page
                </Link>
              </li>
              <li className="nav__list--item nav__item">
                <Link className="nav__item--link nav__link" to="/shopingCart">
                  Shopping Cart
                </Link>
              </li>
              <li className="nav__list--item nav__item">
                <Link className="nav__item--link nav__link" to="/favorites">
                  Wish List
                </Link>
              </li>
            </ul>
          </nav>

          <div className="header__container--content--counters header__counters">
            <Link className="header__counters--link" to="/favorites">
              <Star className="header__star" />
              <span className="star__counter">{favCounter}</span>
            </Link>

            <Link className="header__counters--link" to="/shopingCart">
              <img
                className="header__shop--cart"
                src="./icons/shopping-cart.svg"
                alt="shopping-cart"
              />
              <span className="counter__output">{cartCounter}</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

Header.propTypes = {
  starCounter: PropTypes.array,
  counter: PropTypes.array,
};

export default Header;
