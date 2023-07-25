import "./CatCard.scss";
import Button from "../Button/Button";
import PropTypes from "prop-types";

function CatCard(props) {
  const { favListHandler } = props;
  return (
    <li
      className={"cats__container--list cat__card " + props.extraClass}
      id={props.id}
    >
      <div
        className="cat__card--pic cats__pic"
        style={{
          backgroundImage: "url(" + props.image + ")",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="cat__card--description__container description__container">
        <p className="description__container--item description__container--item--name">
          {props.name}
        </p>
        <p className="description__container--item description__container--item--color">
          Color: {props.color}
        </p>

        <p className="description__container--item description__container--item--price">
          {props.price} &euro;
        </p>
      </div>
      <div className="cat__card--controllers__container controllers__container">
        <Button
          btnStyles="controllers__container--btn cart__btn"
          text="Add to cart"
          btnAction={(event) => {
            props.handlerForButton("modal");
            const id = event.target.closest(".cat__card").id;
            props.updateActiveCart(id);
          }}
        />
        <svg
          className="svg__star"
          onClick={(event) => {
            const id = event.target.closest(".cat__card").id;
            favListHandler(id);
          }}
          width="25"
          height="25"
          viewBox="0 0 47.94 47.94"
        >
          <path
            fill={props.favList ? "#ED8A19" : "#ffdb29"}
            d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
              c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
              c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
              c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
              c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
              C22.602,0.567,25.338,0.567,26.285,2.486z"
          />
        </svg>
      </div>
    </li>
  );
}

CatCard.propTypes = {
  handlerForButton: PropTypes.func,
  updateActiveCart: PropTypes.func,
  favListHandler: PropTypes.func,
  id: PropTypes.string,
  name: PropTypes.string,
  color: PropTypes.string,
  price: PropTypes.string,
  favorite: PropTypes.bool,
};

export default CatCard;
