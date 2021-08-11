import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchImages,
  fetchBreeds,
  fetchSubBreeds,
} from "../../store/thunkActions";
import { useForm } from "react-hook-form";
import { Error } from "./ErrorMessage";
const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const DropdownRow = styled.div`
  width: 100%;
  display: flex;
  padding: 0.5rem;
  align-items: center;
`;

const CustomSelect = styled.select`
  background-color: aquamarine;
  border-style: none;
  border-radius: 6px;
  font-size: 18px;
  font-weight: 600;
  outline: none;
  margin-right: 0.25rem;
  cursor: pointer;
`;

const Submit = styled.button`
  margin: 0.5rem;
  background-color: aquamarine;
  border-radius: 6px;
  font-size: 18px;
  border-style: none;
  padding: 0.5rem;
  cursor: pointer;
  box-shadow: 0px 4px 8px 8px rgba(0, 0, 0, 0.05);
  &:hover {
    box-shadow: 0px 4px 8px 8px rgba(0, 0, 0, 0.1);
  }
`;

const SubmitRow = styled.span`
  width: 100%;
  display: flex;
  padding: 0.5rem;
  align-items: center;
  justify-content: center;
`;

const CustomInput = styled.input`
  outline: none;
  border-style: none;
  padding: 0.25rem;
  background-color: aquamarine;
  border-radius: 6px;
  width: 5%;
`;

const getBreedArray = (breeds) => {
  return Object.keys(breeds);
};

export const DropdownSelect = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (subBreeds.length !== 0) {
      dispatch(
        fetchImages(data.breedSelect, data.subBreedSelect, data.numOfImgs)
      );
    } else {
      dispatch(fetchImages(data.breedSelect, "", data.numOfImgs));
    }
  };
  const dispatch = useDispatch();
  const breeds = useSelector((state) => state.dogReducer.breedList);
  const subBreeds = useSelector((state) => state.dogReducer.subBreedList);
  const breedWatch = watch("breedSelect");

  React.useEffect(() => {
    dispatch(fetchBreeds());
  }, []);

  React.useEffect(() => {
    if (breedWatch) {
      dispatch(fetchSubBreeds(breedWatch));
    }
  }, [breedWatch]);

  return (
    <DropdownContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DropdownRow>
          <CustomSelect
            defaultValue=""
            {...register("breedSelect", { required: true })}
          >
            <option value="" disabled>
              -select breed-
            </option>
            {breeds &&
              getBreedArray(breeds).map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
          </CustomSelect>
          {subBreeds && (
            <CustomSelect
              defaultValue=""
              {...register("subBreedSelect", { required: true })}
            >
              <option value="" disabled>
                -select sub-breed-
              </option>
              {subBreeds.map((item, index) => (
                <option key={"sub" + index} value={item}>
                  {item}
                </option>
              ))}
            </CustomSelect>
          )}
          <CustomInput {...register("numOfImgs", { min: "1", max: "6" })} />
        </DropdownRow>
        {/* error handeling */}
        {errors.breedSelect && (
          <Error message="Selecting a breed is required" />
        )}
        {errors.subBreedSelect && (
          <Error message="Selecting a sub-breed is required" />
        )}
        {errors.numOfImgs && (
          <Error message="Number of images must be between 1 and 6" />
        )}
        <SubmitRow>
          <Submit type="submit">SUBMIT</Submit>
        </SubmitRow>
      </form>
    </DropdownContainer>
  );
};
