import { setImagePath } from "./actionCreators";

export const fetchImages = () => {
  return (dispatch) => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((result) => result.json())
      .then((json) => {
        console.log("json is", json);
        dispatch(setImagePath(json.message));
      })
      .catch((err) => console.log(err));
  };
};
