import { gql, useMutation, useQuery } from "@apollo/client";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { mainColor } from "../../../../commons/styles/color";
import { mobile, tablet } from "../../../../commons/styles/media";
import { IQuery } from "../../../../commons/types/generated/types";
import { accessTokenState, userInfo } from "../../../../store";
import { successModal } from "../../modals/alertModals";

const Wrapper = styled.div`
  width: 100%;
  padding: 2.4rem 0;
  z-index: 1000;
  background-color: #fff;
  @media ${tablet} {
    position: sticky;
    left: 0;
  }
`;

const LogoBox = styled.h1`
  cursor: pointer;
  width: 160px;
  img {
    width: 100%;
  }
  @media ${tablet} {
    width: 29.375%;
  }
`;

const Headers = styled.header`
  width: 1600px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 9998;
  @media (max-width: 1599px) {
    width: 90%;
  }
`;

const Navigation = styled.nav`
  @media ${tablet} {
    display: none;
  }
`;

const GnbMenu = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 60px;
  margin-bottom: 0;
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
  margin-bottom: 0;
  align-items: center;
  @media ${tablet} {
    display: none;
  }
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

const MobileMenu = styled.button`
  width: 6%;
  border: none;
  background: none;
  img {
    width: 100%;
  }
  @media (min-width: 1200px) {
    display: none;
  }
`;

const MMenuContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  padding-top: 10%;
  @media ${mobile} {
    padding-top: 18%;
  }
  @media (min-width: 1200px) {
    display: none;
  }
`;

const MSubMenuBox = styled.div`
  width: 90%;
  margin: 0 auto 14rem;
  display: flex;
  justify-content: space-between;
`;

const MLoginBtn = styled.button`
  width: 48.75%;
  padding: 2.2rem 0;
  border: 1px solid ${mainColor};
  border-radius: 4px;
  font-size: 3.2rem;
  font-weight: 700;
  color: ${mainColor};
  background: none;
  cursor: pointer;
`;

const MJoinBtn = styled(MLoginBtn)`
  background-color: ${mainColor};
  border: none;
  color: #fff;
`;

const MMenu = styled.ul`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 6rem;
`;

const MMenuList = styled.li`
  font-size: 2.4rem;
  font-weight: 700;
  color: #111;
  cursor: pointer;
`;

const LOGOUT = gql`
  mutation logout {
    logout
  }
`;

const FETCH_USER = gql`
  query fetchUser {
    fetchUser {
      id
      email
      name
      nickname
      birth
      phone
      gender
      profile_img
      point
    }
  }
`;

// export const FETCH;

const Header = () => {
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const [userDatas, setUserDatas] =
    useRecoilState<Pick<IQuery, "fetchUser">>(userInfo);
  const [isActive, setIsActive] = useState(false);

  const router = useRouter();

  const [logout] = useMutation(LOGOUT);
  const { data } = useQuery<Pick<IQuery, "fetchUser">>(FETCH_USER);

  useEffect(() => {
    if (data === undefined) return;
    setUserDatas(data);
  }, [data]);

  const onClickToMain = () => {
    void router.push("/");
  };

  const onClickToCrews = () => {
    void router.push("/crews");
    setIsActive(false);
  };

  const onClickToReview = () => {
    void router.push("/reviews");
    setIsActive(false);
  };

  const onClickToLogin = () => {
    void router.push("/login");
    setIsActive(false);
  };

  const onClickToJoin = () => {
    void router.push("/join");
    setIsActive(false);
  };

  const onClickToMypage = () => {
    void router.push("/mypage");
    setIsActive(false);
  };

  const onClickMenuOn = () => {
    setIsActive((prev) => !prev);
  };

  const logoutUser = async () => {
    try {
      await logout({
        update(cache) {
          cache.modify({
            fields: () => {},
          });
        },
      });
      setAccessToken("");
      void router.push("/");
      successModal("로그아웃 되었습니다.");
    } catch (error) {}
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
              크루 모집/신청
            </GnbList>
            <GnbList className="gnbList" onClick={onClickToReview}>
              리뷰
            </GnbList>
          </GnbMenu>
        </Navigation>
        <SnbMenu>
          {accessToken && (
            <>
              <SnbList>
                <UserPoint>
                  <span>{userDatas?.fetchUser.nickname}</span> 님
                </UserPoint>
              </SnbList>
              <SnbList>
                <UserPoint>
                  포인트{" "}
                  <span>
                    {String(userDatas?.fetchUser.point).replaceAll(
                      /(\d)(?=(?:\d{3})+(?!\d))/g,
                      "$1,"
                    )}
                    P
                  </span>
                </UserPoint>
              </SnbList>
            </>
          )}
          <SnbList>
            <LoginBtn onClick={accessToken ? logoutUser : onClickToLogin}>
              {accessToken ? "로그아웃" : "로그인"}
            </LoginBtn>
          </SnbList>
          <SnbList>
            <JoinBtn onClick={accessToken ? onClickToMypage : onClickToJoin}>
              {accessToken ? "마이페이지" : "회원가입"}
            </JoinBtn>
          </SnbList>
        </SnbMenu>
        <MobileMenu onClick={onClickMenuOn}>
          {isActive ? (
            <img src="/images/commons/menu-off.png" alt="메뉴열기" />
          ) : (
            <img src="/images/commons/hamberger.png" alt="메뉴닫기" />
          )}
        </MobileMenu>
      </Headers>
      {isActive && (
        <MMenuContainer>
          <MSubMenuBox>
            <MLoginBtn onClick={accessToken ? logoutUser : onClickToLogin}>
              {accessToken ? "로그아웃" : "로그인"}
            </MLoginBtn>
            <MJoinBtn onClick={accessToken ? onClickToMypage : onClickToJoin}>
              {accessToken ? "마이페이지" : "회원가입"}
            </MJoinBtn>
          </MSubMenuBox>
          <MMenu>
            <MMenuList onClick={onClickToCrews}>크루 모집/신청</MMenuList>
            <MMenuList onClick={onClickToReview}>리뷰</MMenuList>
          </MMenu>
        </MMenuContainer>
      )}
    </Wrapper>
  );
};

export default Header;
