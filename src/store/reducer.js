import * as actionTypes from "./actionTypes";
import { imageLut } from "../components/misc/imgLUT";

const { Image1 } = imageLut();

const initialState = { images: [Image1], breedList: [], subBreedList: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_IMAGES:
      return {
        ...state,
        images: action.imageArray,
      };
    case actionTypes.SET_BREED_LIST:
      return {
        ...state,
        breedList: action.breedList,
      };
    case actionTypes.SET_SUB_LIST:
      return {
        ...state,
        subBreedList: action.subBreedList,
      };
    default:
      return state;
  }
};

export default reducer;
