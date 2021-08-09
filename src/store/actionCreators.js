import * as actionTypes from "./actionTypes";

export function setImages(imageArray) {
  const action = {
    type: actionTypes.SET_IMAGES,
    imageArray,
  };

  return action;
}

export function setBreedList(breedList) {
  const action = {
    type: actionTypes.SET_BREED_LIST,
    breedList,
  };

  return action;
}

export function setSubList(subBreedList) {
  const action = {
    type: actionTypes.SET_SUB_LIST,
    subBreedList,
  };
  return action;
}
