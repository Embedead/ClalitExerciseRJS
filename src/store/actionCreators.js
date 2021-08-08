import * as actionTypes from "./actionTypes";

export function setImagePath(newPath) {
  const action = {
    type: actionTypes.SET_PATH,
    newPath,
  };

  return action;
}

export function fetchImages() {
  const action = {
    type: actionTypes.FETCH_DATA,
  };
  return action;
}
