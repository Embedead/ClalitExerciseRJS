import * as actionTypes from "./actionTypes";
import { imageLut } from "../components/misc/imgLUT";

const { Image1 } = imageLut();

const initialState = { currentPath: Image1 };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PATH:
      return {
        ...state,
        currentPath: action.newPath,
      };
    case actionTypes.FETCH_DATA:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
