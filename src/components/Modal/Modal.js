import PropTypes from "prop-types";
import Button from "../Button/Button";
import "./Modal.scss";

function Modal(props) {
  return (
    <div
      data-testid="modal"
      className="overlay"
      onClick={(event) => {
        if (!event.target.closest(".modal")) {
          props.closeModal();
        }
      }}
    >
      <div className={props.modal__styles}>
        <div className="modal__content">
          <h2 className="modal__title">{props.title}</h2>
          <p className="modal__text">{props.text}</p>
          <div className="btn__container">
            <Button
              btnStyles={props.btn__styles + " btn__good"}
              text="Add to cart"
              btnAction={() => {
                props.closeModal();
                props.cartListHandler(props.activeCart);
              }}
            />
            <Button
              btnStyles={props.btn__styles + " btn__bad"}
              text="Cancel"
              btnAction={props.closeModal}
            />
          </div>

          {props.closeModalBtn && (
            <button onClick={props.closeModal} className="modal__close">
              X
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;

Modal.defaultProps = {
  btn__styles: "btn__styles",
  modal__styles: "modal__styles",
  closeModalBtn: true,
};

Modal.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  closeModal: PropTypes.func,
  handlerModal: PropTypes.func,
  cartListHandler: PropTypes.func,
  activeCart: PropTypes.string,
};
