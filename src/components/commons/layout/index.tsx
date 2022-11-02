import { useRouter } from "next/router";
import Footer from "./footer";
import Header from "./header";
import MainHeader from "./mainHeader";

interface IProps {
  children: JSX.Element;
}

export default function Layout(props: IProps) {
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
      <Footer />
    </>
  );
}
