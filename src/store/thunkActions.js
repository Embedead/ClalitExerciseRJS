import { setImages, setBreedList, setSubList } from "./actionCreators";

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
        .catch((err) => console.log(err));
    };
  } else {
    return (dispatch) => {
      console.log("here");
      fetch(
        "https://dog.ceo/api/breed/" +
          breedName +
          "/images/random/" +
          numberOfImages
      )
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
