import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { tablet } from "../../../../commons/styles/media";

const Wrapper = styled.footer`
  width: 100%;
  border-top: 1px solid #d9d9d9;
  background-color: #f9f9f9;
`;

const FootMenuBox = styled.div`
  width: 100%;
  border-bottom: 1px solid #d9d9d9;
  padding: 1.6rem 0;
`;

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4.5rem 0;
  @media ${tablet} {
    width: 90%;
    flex-direction: column;
  }
`;

const FootMenu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  margin-bottom: 0;
`;

const FootMenuList = styled.li`
  font-size: 1.6rem;
  font-weight: 400;
  color: #000;
  cursor: pointer;
`;

const FootMenuLine = styled.div`
  width: 1px;
  height: 16px;
  background-color: #d9d9d9;
`;

const FootLeft = styled.div`
  @media ${tablet} {
    text-align: center;
    margin-bottom: 4.2rem;
  }
`;

const CompanyTitle = styled.h4`
  font-size: 1.3rem;
  font-weight: 400;
  color: #333;
  margin-bottom: 1.2rem;
  @media ${tablet} {
    text-align: center;
  }
`;

const FootCallBox = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const FootCallTitle = styled.span`
  font-size: 1.6rem;
  font-weight: 400;
  color: #000;
`;

const FootCallNum = styled.span`
  font-size: 2.4rem;
  font-weight: 400;
  color: #000;
`;

const FootCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
`;

const FootCenterText = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
  color: #666;
  margin: 0;
`;

const FootAddFaxEmailBox = styled.div`
  display: flex;
  gap: 1.2rem;
  @media ${tablet} {
    flex-direction: column;
    text-align: center;
  }
`;

const FootRight = styled.div`
  @media ${tablet} {
    display: none;
  }
`;

const FootLogoBox = styled.div`
  width: 160px;
  img {
    width: 100%;
  }
`;

const Footer = () => {
  const router = useRouter();

  const onClickToCrews = () => {
    void router.push("/crews");
  };

  const onClickToReview = () => {
    void router.push("/reviews");
  };

  return (
    <Wrapper>
      <FootMenuBox>
        <FootMenu>
          <FootMenuList onClick={onClickToCrews}>게시글 리스트</FootMenuList>
          <FootMenuLine></FootMenuLine>
          <FootMenuList onClick={onClickToReview}>리뷰 리스트</FootMenuList>
        </FootMenu>
      </FootMenuBox>
      <Container>
        <FootLeft>
          <CompanyTitle>(주) we trekking</CompanyTitle>
          <FootCallBox>
            <FootCallTitle>전화문의</FootCallTitle>
            <FootCallNum>1234 - 1234</FootCallNum>
          </FootCallBox>
        </FootLeft>
        <FootCenter>
          <FootCenterText>
            Copyright (c) Pcalm ALL RIGHTS RESERVED.
          </FootCenterText>
          <FootAddFaxEmailBox>
            <FootCenterText>서울특별시 관악구 신림동 123-12</FootCenterText>
            <FootCenterText>FAX : 00-123-1234</FootCenterText>
            <FootCenterText>E-mail : wetrekking@naver.com</FootCenterText>
          </FootAddFaxEmailBox>
        </FootCenter>
        <FootRight>
          <FootLogoBox>
            <img src="/images/main/logo-green.png" alt="위트레킹 로고 이미지" />
          </FootLogoBox>
        </FootRight>
      </Container>
    </Wrapper>
  );
};

export default Footer;
