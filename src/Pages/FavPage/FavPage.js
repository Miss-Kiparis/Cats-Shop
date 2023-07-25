import "./FavPage.scss";

import { useSelector } from "react-redux";
// import { actionRemoveFavorite } from "../../store/actions";
import { selectFavorite } from "../../store/selectors";

function FavPage(props) {
  const { cats, favListHandler } = props;
  const favPage = useSelector(selectFavorite);

  const isFavPage = favPage.length === 0;

  const catsFavMap = cats?.map((item) => (
    <div className="cat__card" key={item.id} id={item.id}>
      <div
        className="cat__card--pic cats__favpic"
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
      <svg
        className="svg__favstar"
        onClick={(event) => {
          const id = event.target.closest(".cat__card").id;
          favListHandler(id);
        }}
        width="25"
        height="25"
        viewBox="0 0 47.94 47.94"
      >
        <path
          fill={"#ED8A19"}
          d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
      c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
      c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
      c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
      c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
      C22.602,0.567,25.338,0.567,26.285,2.486z"
        />
      </svg>
    </div>
  ));

  return (
    <div className="fav-page">
      <div className="fav-page__header">
        <h1 className="fav-page__header--title">My Wish List</h1>
      </div>
      <div className="fav-page__content">
        {isFavPage && (
          <div className="empty__wishlist--container">
            <p className="empty__wishlist--container-desc">
              Your Wish List is Empty.
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
        <div className="cart-page__content--list">{catsFavMap}</div>
      </div>
      <div className="fav-page__footer"></div>
    </div>
  );
}

export default FavPage;
