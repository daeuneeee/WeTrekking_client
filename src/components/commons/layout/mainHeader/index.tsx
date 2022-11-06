import { gql, useMutation } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { mainColor } from "../../../../commons/styles/color";
import { accessTokenState } from "../../../../store";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 24px 0;
  z-index: 9999;

  &:hover {
    background-color: rgba(255, 255, 255, 0.6);
    transition: all 0.3s;
    .logoWhite {
      display: none;
    }
    .logoGreen {
      display: block;
    }
    .gnbList {
      color: #111;
      transition: all 0.3s;
    }
    .loginBtn {
      border: 1px solid ${mainColor};
      color: ${mainColor};
      transition: all 0.3s;
    }
    .subBtn {
      border: 1px solid ${mainColor};
      color: ${mainColor};
    }
  }
`;

const LogoBox = styled.div`
  .logoGreen {
    display: none;
  }
  cursor: pointer;
`;

const Header = styled.header`
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
  color: #fff;
  cursor: pointer;
`;

const SnbMenu = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 12px;
  align-items: center;
`;

const SnbList = styled.li``;
const LoginBtn = styled.button`
  width: 120px;
  height: 48px;
  background-color: transparent;
  border: 1px solid #fff;
  border-radius: 4px;
  font-size: 1.6rem;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
`;

const JoinBtn = styled(LoginBtn)`
  background-color: ${mainColor};
  border: 1px solid ${mainColor};
  cursor: pointer;
`;
const UserPoint = styled.p`
  font-size: 2rem;
  font-weight: 400;
  color: #111;
  padding-right: 12px;
  margin-bottom: 0;
  span {
    font-weight: 700;
    color: ${mainColor};
  }
`;

const LOGOUT = gql`
  mutation logout {
    logout
  }
`;

const MainHeader = () => {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);

  const router = useRouter();
  const [logout] = useMutation(LOGOUT);

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

  const onClickToMypage = () => {
    void router.push("/mypage");
  };

  const logoutUser = () => {
    try {
      setAccessToken("");
      logout();
      // alert("로그아웃 되었습니다.");
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
      }
    }
  };

  return (
    <Wrapper>
      <Header>
        <LogoBox onClick={onClickToMain}>
          <img
            src="/images/main/logo-white.png"
            alt="로고"
            className="logoWhite"
          />
          <img
            src="/images/main/logo-green.png"
            alt="로고"
            className="logoGreen"
          />
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
          {accessToken && (
            <SnbList>
              <UserPoint>
                포인트 <span>1,234P</span>
              </UserPoint>
            </SnbList>
          )}
          <SnbList>
            <LoginBtn
              className="subBtn"
              onClick={accessToken ? logoutUser : onClickToLogin}
            >
              {accessToken ? "로그아웃" : "로그인"}
            </LoginBtn>
          </SnbList>
          <SnbList>
            <JoinBtn onClick={accessToken ? onClickToMypage : onClickToJoin}>
              {accessToken ? "로그아웃" : "마이페이지"}
            </JoinBtn>
          </SnbList>
        </SnbMenu>
      </Header>
    </Wrapper>
  );
};

export default MainHeader;
