/* eslint-disable react/style-prop-object */
import "./NotPage.scss";
const NotPage = () => {
  return (
    <div className="notpage__container">
      <div className="notpage__container--content notpage__content">
        <h1 className="notpage__content--title">404</h1>
        <p className="notpage__content--desc">
          Oops! This page has been abducted.
        </p>
        <p className="notpage__content--desc2">
          Let’s head back home and try that again. The truth is out there…
        </p>
        <img
          className="notpage__content--pic"
          src="./icons/sad_cat.gif"
          alt="sad cat"
        />
        <a className="notpage__content--link" href="/">
          Home
        </a>
      </div>
    </div>
  );
};
export default NotPage;
