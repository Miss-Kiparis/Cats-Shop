import { createAction } from "@reduxjs/toolkit";
import { sendRequest } from "../helpers/sendRequest";

export const actionToggleModal = createAction("ACTION_TOGGLE_MODAL");
export const actionLoader = createAction("ACTION_LOADER"); //?

export const actionFavorite = createAction("ACTION_FAVORITE");
export const actionRemoveFavorite = createAction("ACTION_REMOVE_FAVORITE");

export const actionShoppingCart = createAction("ACTION_SHOPPING_CART");
export const actionRemoveShoppingCart = createAction(
  "ACTION_REMOVE_SHOPPING_CART"
);
export const actionUpdateShoppingCart = createAction(
  "ACTION_UPDATE_SHOPPING_CART"
);

export const actionUpdatedShoppingCart = createAction(
  "ACTION_UPDATED_SHOPPINGCART"
);

export const actionUpdatedFavorite = createAction("ACTION_UPDATED_FAVORITE");

export const actionCatsData = createAction("ACTION_CATS_DATA");

export const actionActiveCart = createAction("ACTION_ACTIVE_CART");

export const actionFetchData = () => (dispatch) => {
  dispatch(actionLoader(false));
  sendRequest("./Cats-Shop/cats/cats.json").then((cats) => {
    dispatch(actionLoader(true));
    dispatch(actionCatsData(cats));
  });
};
