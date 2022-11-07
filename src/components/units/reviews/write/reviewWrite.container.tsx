import { useState } from "react";
import CrewReviewWriteUi from "./reviewWrite.presenter";

const CrewReviewWrite = () => {
  const [rate, setRate] = useState(5);

  const onChangeRate = (event) => {
    setRate(event);
  };

  return <CrewReviewWriteUi onChangeRate={onChangeRate} rate={rate} />;
};

export default CrewReviewWrite;
