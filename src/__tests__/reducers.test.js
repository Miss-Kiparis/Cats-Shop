import { rootReducer, initialState } from "../store/reducers";
import * as a from "../store/actions";

describe("reducers", () => {
  test("actionFavorite", () => {
    const action = {
      type: a.actionFavorite,
      payload: {},
    };
    expect(rootReducer(initialState, action)).toEqual({
      ...initialState,
      favList: [...initialState.favList, action.payload],
    });
  });

  test("actionShoppingCart", () => {
    const action = {
      type: a.actionShoppingCart,
      payload: {},
    };
    expect(rootReducer(initialState, action)).toEqual({
      ...initialState,
      cartList: [...initialState.cartList, action.payload],
    });
  });

  test("actionCatsData", () => {
    const action = {
      type: a.actionCatsData,
      payload: {},
    };
    expect(rootReducer(initialState, action)).toEqual({
      ...initialState,
      cats: action.payload,
    });
  });
  test("actionLoader", () => {
    const action = {
      type: a.actionLoader,
      payload: {},
    };
    expect(rootReducer(initialState, action)).toEqual({
      ...initialState,
      loader: action.payload,
    });
  });
  test("actionToggleModal", () => {
    const action = {
      type: a.actionToggleModal,
      payload: {},
    };
    expect(rootReducer(initialState, action)).toEqual({
      ...initialState,
      modal: action.payload,
    });
  });

  test("actionActiveCart", () => {
    const action = {
      type: a.actionActiveCart,
      payload: {},
    };
    expect(rootReducer(initialState, action)).toEqual({
      ...initialState,
      activeCart: action.payload,
    });
  });

  test("actionUpdatedFavorite", () => {
    const action = {
      type: a.actionUpdatedFavorite,
      payload: {},
    };
    expect(rootReducer(initialState, action)).toEqual({
      ...initialState,
      favList: action.payload,
    });
  });
  test("actionUpdateShoppingCart", () => {
    const action = {
      type: a.actionUpdateShoppingCart,
      payload: {},
    };
    expect(rootReducer(initialState, action)).toEqual({
      ...initialState,
      cartList: action.payload,
    });
  });

  test("actionRemoveFavorite", () => {
    const action = {
      type: a.actionRemoveFavorite,
      payload: {},
    };
    expect(rootReducer(initialState, action)).toEqual({
      ...initialState,
      favList: initialState.favList.filter((item) => item !== action.payload),
    });
  });
  test("actionRemoveShoppingCart", () => {
    const action = {
      type: a.actionRemoveShoppingCart,
      payload: {},
    };
    expect(rootReducer(initialState, action)).toEqual({
      ...initialState,
      cartList: initialState.cartList.filter((item) => item !== action.payload),
    });
  });
});
