import { useRouter } from "next/router";
import MainUi from "./main.presenter";

const Main = () => {
  const router = useRouter();

  const onClickToCrewList = () => {
    void router.push("/crews");
  };

  return <MainUi onClickToCrewList={onClickToCrewList} />;
};

export default Main;
