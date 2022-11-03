import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { mainColor } from "../../../../commons/styles/color";

const Wrapper = styled.div`
  width: 100%;
  padding: 24px 0;
  z-index: 9999;
  background-color: #fff;
`;

const LogoBox = styled.h1`
  cursor: pointer;
`;

const Headers = styled.header`
  width: 1600px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Navigation = styled.nav``;

const GnbMenu = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 60px;
`;

const GnbList = styled.li`
  font-weight: 700;
  font-size: 1.6rem;
  color: #111;
  cursor: pointer;
`;

const SnbMenu = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

const SnbList = styled.li``;
const LoginBtn = styled.button`
  width: 120px;
  height: 48px;
  background-color: transparent;
  border: 1px solid ${mainColor};
  border-radius: 4px;
  font-size: 1.6rem;
  font-weight: 700;
  color: ${mainColor};
  cursor: pointer;
`;

const JoinBtn = styled(LoginBtn)`
  background-color: ${mainColor};
  color: #fff;
`;

const Header = () => {
  const router = useRouter();

  const onClickToMain = () => {
    void router.push("/");
  };

  const onClickToCrews = () => {
    void router.push("/crews");
  };

  const onClickToReview = () => {
    void router.push("/reviews");
  };

  const onClickToLogin = () => {
    void router.push("/login");
  };

  const onClickToJoin = () => {
    void router.push("/join");
  };

  return (
    <Wrapper>
      <Headers>
        <LogoBox onClick={onClickToMain}>
          <img src="/images/main/logo-green.png" alt="로고" />
        </LogoBox>
        <Navigation>
          <GnbMenu>
            <GnbList className="gnbList" onClick={onClickToCrews}>
              게시글 리스트
            </GnbList>
            <GnbList className="gnbList" onClick={onClickToReview}>
              리뷰 리스트
            </GnbList>
          </GnbMenu>
        </Navigation>
        <SnbMenu>
          <SnbList>
            <LoginBtn onClick={onClickToLogin}>로그인</LoginBtn>
          </SnbList>
          <SnbList>
            <JoinBtn onClick={onClickToJoin}>회원가입</JoinBtn>
          </SnbList>
        </SnbMenu>
      </Headers>
    </Wrapper>
  );
};

export default Header;
