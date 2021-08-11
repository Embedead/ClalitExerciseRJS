import { setImages, setBreedList, setSubList } from "./actionCreators";
import { push } from "connected-react-router";

export const fetchImages = (breedName, subBreedName, numberOfImages) => {
  if (subBreedName !== "") {
    return (dispatch) => {
      fetch(
        "https://dog.ceo/api/breed/" +
          breedName +
          "/" +
          subBreedName +
          "/images/random/" +
          numberOfImages
      )
        .then((result) => result.json())
        .then((json) => dispatch(setImages(json.message)))
        .then(() => dispatch(push("/images")))
        .catch((err) => console.log(err));
    };
  } else {
    return (dispatch) => {
      fetch(
        "https://dog.ceo/api/breed/" +
          breedName +
          "/images/random/" +
          numberOfImages
      )
        .then((result) => result.json())
        .then((json) => dispatch(setImages(json.message)))
        .then(() => dispatch(push("/images")))
        .catch((err) => console.log(err));
    };
  }
};

export const fetchImage = (breedName, subBreedName) => {
  if (subBreedName !== "") {
    return (dispatch) => {
      fetch(
        "https://dog.ceo/api/breed/" +
          breedName +
          "/" +
          subBreedName +
          "/images/random/" +
          "1"
      )
        .then((result) => result.json())
        .then((json) => dispatch(setImages(json.message)))
        .catch((err) => console.log(err));
    };
  } else {
    return (dispatch) => {
      fetch("https://dog.ceo/api/breed/" + breedName + "/images/random/" + "1")
        .then((result) => result.json())
        .then((json) => dispatch(setImages(json.message)))
        .catch((err) => console.log(err));
    };
  }
};

export const fetchBreeds = () => {
  return (dispatch) => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((result) => result.json())
      .then((json) => dispatch(setBreedList(json.message)))
      .catch((err) => console.log(err));
  };
};

export const fetchSubBreeds = (breedName) => {
  return (dispatch) => {
    fetch("https://dog.ceo/api/breed/" + breedName + "/list")
      .then((result) => result.json())
      .then((json) => dispatch(setSubList(json.message)))
      .catch((err) => console.log(err));
  };
};
