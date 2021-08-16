import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchImages,
  fetchBreeds,
  fetchSubBreeds,
} from "../../store/thunkActions";
import { useForm } from "react-hook-form";
import { Error } from "./formComponents/ErrorMessage";
import { SubmitButton } from "./formComponents/SubmitButton";
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
  } = useForm({ mode: "onBlur" });

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
          {subBreeds?.length !== 0 && (
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
          <CustomInput
            data-testid="input-number"
            {...register("numOfImgs", { min: "1", max: "6", required: true })}
          />
        </DropdownRow>
        {/* error handeling */}
        {errors.breedSelect && (
          <Error
            message="Selecting a breed is required"
            data-testid="breed-select-error"
          />
        )}
        {errors.subBreedSelect && (
          <Error message="Selecting a sub-breed is required" />
        )}
        {errors.numOfImgs && (
          <Error message="Number of images must be between 1 and 6" />
        )}
        <SubmitRow>
          <SubmitButton data-testid="submit-btn" type="submit">
            SUBMIT
          </SubmitButton>
        </SubmitRow>
      </form>
    </DropdownContainer>
  );
};
