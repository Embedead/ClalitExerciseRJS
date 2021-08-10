import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { fetchImage } from "../../store/thunkActions";
import { ShowImage } from "../changingImage/ShowImage";

const BreedContainer = styled.div`
  width: 75%;
  border-radius: 8px;
  background-color: white;
  padding: 0.5rem;
`;

export const BreedPage = ({ breedName, subBreedName }) => {
  const dispatch = useDispatch();
  const breedImage = useSelector((state) => state.dogReducer.images);

  React.useEffect(() => {
    dispatch(fetchImage(breedName, subBreedName));
  }, []);

  return (
    <BreedContainer>
      <ShowImage imagePath={breedImage[0]} />
    </BreedContainer>
  );
};
