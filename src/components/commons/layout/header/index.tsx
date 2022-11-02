import styled from "@emotion/styled";
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
  font-size: 16px;
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
  font-size: 16px;
  font-weight: 700;
  color: ${mainColor};
  cursor: pointer;
`;

const JoinBtn = styled(LoginBtn)`
  background-color: ${mainColor};
  color: #fff;
`;

const Header = () => {
  return (
    <Wrapper>
      <Headers>
        <LogoBox>
          <img src="/images/main/logo-green.png" alt="로고" />
        </LogoBox>
        <Navigation>
          <GnbMenu>
            <GnbList className="gnbList">게시글 리스트</GnbList>
            <GnbList className="gnbList">리뷰 리스트</GnbList>
          </GnbMenu>
        </Navigation>
        <SnbMenu>
          <SnbList>
            <LoginBtn className="loginBtn">로그인</LoginBtn>
          </SnbList>
          <SnbList>
            <JoinBtn>회원가입</JoinBtn>
          </SnbList>
        </SnbMenu>
      </Headers>
    </Wrapper>
  );
};

export default Header;
