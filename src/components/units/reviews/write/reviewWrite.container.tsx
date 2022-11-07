import { useMutation } from "@apollo/client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import CrewReviewWriteUi from "./reviewWrite.presenter";
import { CREATE_REVIEW } from "./reviewWrite.queries";

const CrewReviewWrite = () => {
  const { register, handleSubmit } = useForm();
  const [rate, setRate] = useState(5);

  const [createReview] = useMutation(CREATE_REVIEW);

  const onChangeRate = (event) => {
    setRate(event);
  };

  const onClickRegister = async (data) => {
    data.star = rate;
    console.log(data);

    await createReview({ variables: { createReviewBoardInput: data } });
  };

  return (
    <CrewReviewWriteUi
      register={register}
      handleSubmit={handleSubmit}
      onChangeRate={onChangeRate}
      onClickRegister={onClickRegister}
    />
  );
};

export default CrewReviewWrite;
