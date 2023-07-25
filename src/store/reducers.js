import { createReducer } from "@reduxjs/toolkit";
import * as actions from "./actions";

export const initialState = {
  modal: false,
  loader: true,
  activeCart: "", // id's for modal to add to cart
  cats: [],
  favList: [],
  cartList: [],
  cartSwitcher: false,
};

export const rootReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(actions.actionFavorite, (state, { payload }) => {
      state.favList = [...state.favList, payload];
    })
    .addCase(actions.actionRemoveFavorite, (state, { payload }) => {
      const filterFavorites = state.favList.filter((item) => item !== payload);
      state.favList = filterFavorites;
    })
    .addCase(actions.actionUpdateShoppingCart, (state, { payload }) => {
      state.cartList = payload;
    })
    .addCase(actions.actionShoppingCart, (state, { payload }) => {
      const newList = state.cartList;
      newList.push(payload);
      state.cartList = newList;
    })
    .addCase(actions.actionRemoveShoppingCart, (state, { payload }) => {
      const filterFavorites = state.cartList.filter((item) => item !== payload);
      state.cartList = filterFavorites;
    })
    .addCase(actions.actionCatsData, (state, { payload }) => {
      state.cats = payload;
    })
    .addCase(actions.actionToggleModal, (state, { payload }) => {
      state.modal = payload;
    })
    .addCase(actions.actionLoader, (state, { payload }) => {
      state.loader = payload;
    })
    .addCase(actions.actionActiveCart, (state, { payload }) => {
      state.activeCart = payload;
    })
    .addCase(actions.actionUpdatedFavorite, (state, { payload }) => {
      state.favList = payload;
    });
});
