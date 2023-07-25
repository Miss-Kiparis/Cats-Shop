import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import CatList from "./components/CatList/CatList";
import DoggoPage from "./Pages/DoggoPage/DoggoPage";
import NotPage from "./Pages/NotPage/NotPage";
import FavPage from "./Pages/FavPage/FavPage";
import CartPage from "./Pages/CartPage/CartPage";

import { ViewListContext } from "./Contexts/Context";

import Footer from "./components/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import {
  actionFetchData,
  actionFavorite,
  actionShoppingCart,
  actionUpdateShoppingCart,
  actionUpdatedFavorite,
  actionRemoveFavorite,
} from "./store/actions";
import {
  selectCatsData,
  selectFavorite,
  selectShoppingCart,
} from "./store/selectors";

function App() {
  const dispatch = useDispatch();
  const cats = useSelector(selectCatsData);
  const favList = useSelector(selectFavorite);
  const cartList = useSelector(selectShoppingCart);

  const favStorageHandler = JSON.parse(localStorage.getItem("favList"));
  const cartStorageHandler = JSON.parse(localStorage.getItem("cartList"));
  const listStorageHandler = JSON.parse(localStorage.getItem("listView"));

  const [viewList, setViewList] = useState(listStorageHandler);

  useEffect(
    () => () => {
      dispatch(actionFetchData());

      if (cartStorageHandler) {
        dispatch(actionUpdateShoppingCart(cartStorageHandler));
      }
      if (favStorageHandler) {
        dispatch(actionUpdatedFavorite(favStorageHandler));
      }
    },
    []
  );

  const cartListHandler = () => (item) => {
    const isProduct = cartList.find((data) => data === item);

    if (isProduct) {
      return;
    }
    dispatch(actionShoppingCart(item));
    localStorage.setItem("cartList", JSON.stringify([...cartList, item]));
  };

  const favListHandler = () => (item) => {
    const isFavorite = favList.find((data) => data === item);

    if (isFavorite) {
      const newFavorites = favList.filter((data) => data !== item);
      dispatch(actionRemoveFavorite(item));
      localStorage.setItem("favList", JSON.stringify(newFavorites));
    } else {
      localStorage.setItem("favList", JSON.stringify([...favList, item]));
      dispatch(actionFavorite(item));
      console.log(item);
    }
  };

  return (
    <>
      <ViewListContext.Provider value={{ viewList, setViewList }}>
        <Header counter={cartList} starCounter={favList} />
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <>
                  <CatList
                    className="main__page"
                    favListHandler={favListHandler(cats)}
                    favList={favList}
                    cartListHandler={cartListHandler(cats)}
                    cartList={cartList}
                    cats={cats}
                  />
                  <DoggoPage />
                </>
              }
            />
            <Route
              path="shopingCart"
              element={
                <CartPage
                  cats={cats.filter((kitten) => {
                    if (cartList.includes(kitten.id)) {
                      return kitten;
                    }
                  })}
                />
              }
            />
            <Route path="doggo" element={<DoggoPage />} />
            <Route
              path="favorites"
              element={
                <FavPage
                  favListHandler={favListHandler(cats)}
                  favList={favList}
                  cats={cats.filter((favKitten) => {
                    if (favList.includes(favKitten.id)) {
                      return favKitten;
                    }
                  })}
                />
              }
            />
            <Route path="*" element={<NotPage />} />
          </Route>
        </Routes>

        <Footer />
      </ViewListContext.Provider>
    </>
  );
}

export default App;
