import CatCard from "../CatCard/CatCard";
import Modal from "../Modal/Modal";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import { actionToggleModal, actionActiveCart } from "../../store/actions";
import {
  selectModal,
  selectActiveCart,
  selectLoader,
} from "../../store/selectors";

import "swiper/css";
import "swiper/css/navigation";
import "./CatList.scss";
import ViewList from "../ViewPageSwitcher/ViewListSwitcher";
import { ViewListContext } from "../../Contexts/Context";
import { useContext } from "react";

function CatList(props) {
  const { cats } = props;
  const { viewList } = useContext(ViewListContext);

  console.log("CatList started", "cats from props received:", cats);

  const dispatch = useDispatch();
  const modalToggle = useSelector(selectModal);
  const loader = useSelector(selectLoader);
  const activeCart = useSelector(selectActiveCart);

  const updateActiveCart = (value) => {
    dispatch(actionActiveCart(value));
  };

  const handlerOpenModal = () => {
    dispatch(actionToggleModal(true));
  };

  const handlerCloseModals = () => {
    dispatch(actionToggleModal(false));
  };

  if (!loader) return <div className="error__load--state">Loading...</div>;

  if (viewList === "grid") {
    const catsMap = cats?.map((cats) => (
      <SwiperSlide key={cats.id}>
        <CatCard
          handlerForButton={handlerOpenModal}
          id={cats.id}
          image={cats.image}
          name={cats.name}
          price={cats.price}
          color={cats.color}
          updateStarCounter={props.updateStarCounter}
          starCounter={props.starCounter}
          favListHandler={props.favListHandler}
          favList={props.favList.includes(cats.id)}
          updateActiveCart={updateActiveCart}
          extraClass="grid"
        />
      </SwiperSlide>
    ));

    return (
      <>
        <div className="catList__switcher">
          <h1 className="catList__title">Kittens</h1>
          <ViewList />
        </div>
        <Swiper
          navigation={true}
          className="catList__container"
          spaceBetween={50}
          slidesPerView={4}
          modules={[Navigation]}
        >
          <ul className="cats__container">{catsMap}</ul>
        </Swiper>
        {modalToggle && (
          <Modal
            cartListHandler={props.cartListHandler}
            modal__styles="modal"
            btn__styles=" "
            closeModal={handlerCloseModals}
            closeModalBtn={true}
            title="Do you want to add this kitten to cart?"
            text="Your friend is waiting for you!"
            activeCart={activeCart}
          />
        )}
      </>
    );
  } else {
    const catsMap = cats?.map((cats) => (
      <div key={cats.id}>
        <CatCard
          handlerForButton={handlerOpenModal}
          id={cats.id}
          // image={cats.image}
          name={cats.name}
          price={cats.price}
          color={cats.color}
          updateStarCounter={props.updateStarCounter}
          starCounter={props.starCounter}
          favListHandler={props.favListHandler}
          favList={props.favList.includes(cats.id)}
          updateActiveCart={updateActiveCart}
          extraClass="row"
        />
      </div>
    ));

    return (
      <>
        <div className="catList__switcher">
          <h1 className="catList__title">Kittens</h1>
          <ViewList />
        </div>
        <Swiper
          navigation={true}
          className="catList__container"
          spaceBetween={50}
          slidesPerView={4}
          modules={[Navigation]}
        >
          <ul className="cats__container">{catsMap}</ul>
        </Swiper>
        {modalToggle && (
          <Modal
            cartListHandler={props.cartListHandler}
            modal__styles="modal"
            btn__styles=" "
            closeModal={handlerCloseModals}
            closeModalBtn={true}
            title="Do you want to add this kitten to cart?"
            text="Your friend is waiting for you!"
            activeCart={activeCart}
          />
        )}
      </>
    );
  }
}

CatList.defaultProps = {
  cats: PropTypes.array,
  loader: PropTypes.bool,
  modalToggle: PropTypes.bool,
  activeCart: PropTypes.string,
};

CatList.propTypes = {
  handlerOpenModal: PropTypes.func,
  handlerCloseModals: PropTypes.func,
  updateStarCounter: PropTypes.func,
  favListHandler: PropTypes.func,
  cartListHandler: PropTypes.func,
};

export default CatList;
