import React from "react";
import styled from "styled-components";
import { imageLut } from "../misc/imgLUT";
import { getRandomDogImg } from "../../api/basicApi";
import { useDispatch, useSelector } from "react-redux";
import { setImagePath, fetchImages } from "../../store/actionCreators";

const DropdownContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 0.5rem;
`;

const ImageSelect = styled.select`
  background-color: aquamarine;
  border-style: none;
  border-radius: 10px;
  font-size: 16px;
`;

export const DropdownSelect = () => {
  const dispatch = useDispatch();
  const currentPath = useSelector((state) => state.currentPath);
  const { Image1, Image2, Image3, Image4 } = imageLut();
  console.log("current path is", currentPath);

  const handleClick = () => {
    // getRandomDogImg()
    //   .then((result) => result.json())
    //   .then((json) => {
    //     dispatch(setImagePath(json.message));
    //   });
    dispatch(fetchImages());
  };

  return (
    <DropdownContainer>
      <ImageSelect
        value={currentPath}
        onChange={(e) => dispatch(setImagePath(e.target.value))}
      >
        <option value={Image1}>Image 1</option>
        <option value={Image2}>Image 2</option>
        <option value={Image3}>Image 3</option>
        <option value={Image4}>Image 4</option>
      </ImageSelect>
      <button onClick={handleClick}>random dog</button>
    </DropdownContainer>
  );
};
