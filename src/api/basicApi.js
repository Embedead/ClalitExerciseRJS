import axios from "axios";
const base_URL = "https://dog.ceo/api/";

export const getRandomDogImg = () => {
  return fetch(base_URL + "breeds/image/random");
};
