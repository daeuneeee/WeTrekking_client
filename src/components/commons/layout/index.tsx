import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { isOpenSideBarState } from "../../../store";
import Footer from "./footer";
import Header from "./header";
import MainHeader from "./mainHeader";
import ReviewDetailLayout from "./reviewDetail/indes";

interface IProps {
  children: JSX.Element;
}

export default function Layout(props: IProps) {
  const router = useRouter();
  const SHOW_BANNERS = ["/"];
  const HIDDEN_BANNERS = ["/"];
  const HIDDEN_FOOTERS = ["/"];

  const isShowBanner = SHOW_BANNERS.includes(router.asPath);
  const isHiddenBanner = HIDDEN_BANNERS.includes(router.asPath);
  const isHiddenFooter = HIDDEN_FOOTERS.includes(router.asPath);

  return (
    <>
      {isShowBanner && <MainHeader />}
      {!isHiddenBanner && <Header />}
      {props.children}
      {!isHiddenFooter && <Footer />}
    </>
  );
}
