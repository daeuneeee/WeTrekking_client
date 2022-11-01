import { useRouter } from "next/router";
import Header from "./header";
import MainHeader from "./mainHeader";

export default function Layout(props) {
  const router = useRouter();
  const SHOW_BANNERS = ["/"];
  const HIDDEN_BANNERS = ["/"];

  const isShowBanner = SHOW_BANNERS.includes(router.asPath);
  const isHiddenBanner = HIDDEN_BANNERS.includes(router.asPath);

  return (
    <>
      {isShowBanner && <MainHeader />}
      {!isHiddenBanner && <Header />}
      {props.children}
    </>
  );
}
