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
  box-shadow: 0px 4px 15px 4px rgba(0, 0, 0, 0.3);
  position: relative;
`;

const RefreshButton = styled.span`
  position: absolute;
  top: 2%;
  right: 2%;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  &:hover {
    color: aquamarine;
  }
`;

export const BreedPage = ({ breedName, subBreedName }) => {
  const dispatch = useDispatch();
  const breedImage = useSelector((state) => state.dogReducer.images);

  React.useEffect(() => {
    dispatch(fetchImage(breedName, subBreedName));
  }, []);

  return (
    <BreedContainer>
      <RefreshButton
        onClick={() => dispatch(fetchImage(breedName, subBreedName))}
      >
        new
      </RefreshButton>
      <ShowImage imagePath={breedImage[0]} />
    </BreedContainer>
  );
};
