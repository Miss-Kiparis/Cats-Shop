import "./Button.scss";
import PropTypes from "prop-types";

function Button(props) {
  return (
    <button
      data-testid="btn"
      className={props.btnStyles}
      type="button"
      onClick={props.btnAction}
    >
      {props.text}
    </button>
  );
}

Button.defaultProps = {
  type: "button",
  btnAction: () => {},
  btnStyles: "btn__bad",
};

Button.propTypes = {
  btnStyles: PropTypes.string,
  type: PropTypes.string,
  btnAction: PropTypes.func,
  text: PropTypes.string,
};

export default Button;
