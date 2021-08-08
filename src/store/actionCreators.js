import * as actionTypes from "./actionTypes";

export function setImagePath(newPath) {
  const action = {
    type: actionTypes.SET_PATH,
    newPath,
  };

  return action;
}

export function fetchImages(data) {
  const action = {
    type: actionTypes.FETCH_DATA,
    payload: data.message,
  };
  return action;
}
