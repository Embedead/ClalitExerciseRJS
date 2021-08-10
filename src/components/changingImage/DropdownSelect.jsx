import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchImages,
  fetchBreeds,
  fetchSubBreeds,
} from "../../store/thunkActions";
import { useForm } from "react-hook-form";
import { push } from "connected-react-router";

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
`;

const Submit = styled.button`
  margin: 0.5rem;
  background-color: aquamarine;
  border-radius: 6px;
  font-size: 18px;
  border-style: none;
`;

const SubmitRow = styled.span`
  width: 100%;
  display: flex;
  padding: 0.5rem;
  align-items: center;
  justify-content: center;
`;

const ErrorLabel = styled.label`
  color: red;
  font-weight: 700;
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
              breeds?.length !== 0 &&
              getBreedArray(breeds).map((item, index) => {
                return (
                  <option key={index} value={item}>
                    {item}
                  </option>
                );
              })}
          </CustomSelect>
          {subBreeds && subBreeds?.length !== 0 ? (
            <CustomSelect
              defaultValue=""
              {...register("subBreedSelect", { required: true })}
            >
              <option value="" disabled>
                -select sub-breed-
              </option>
              {subBreeds.map((item, index) => {
                return (
                  <option key={"sub" + index} value={item}>
                    {item}
                  </option>
                );
              })}
            </CustomSelect>
          ) : null}
          <CustomInput {...register("numOfImgs", { min: "1", max: "6" })} />
        </DropdownRow>
        {errors.breedSelect && (
          <DropdownRow>
            <ErrorLabel>Selecting a breed is required</ErrorLabel>
          </DropdownRow>
        )}
        {errors.subBreedSelect && (
          <DropdownRow>
            <ErrorLabel>Selecting a sub-breed is required</ErrorLabel>
          </DropdownRow>
        )}
        {errors.numOfImgs && (
          <DropdownRow>
            <ErrorLabel>Number of pictures must be between 1 and 6</ErrorLabel>
          </DropdownRow>
        )}
        <SubmitRow>
          <Submit type="submit">SUBMIT</Submit>
        </SubmitRow>
      </form>
    </DropdownContainer>
  );
};
