import styled from "@emotion/styled";
import { tablet } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 90%;
  background: #fff;
  margin: 40px auto;
  @media ${tablet} {
    width: 90%;
    margin: 0 auto;
  }
`;

export const XBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2%;
`;

export const XBtn = styled.div`
  width: 30px;
  height: 30px;
  background: url("/images/commons/menu-off.png") no-repeat center center;
  background-size: 3rem;
  cursor: pointer;
`;

export const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  margin-bottom: 2.4rem;
`;

export const MainImg = styled.div`
  width: 100%;
  height: 400px;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  @media ${tablet} {
    height: auto;
    padding-bottom: 80%;
  }
`;

export const SubImgBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SubImg = styled.div`
  width: 32%;
  padding-bottom: 32%;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
`;

export const UnderLine = styled.div`
  width: 100%;
  height: 1px;
  background: #d9d9d9;
  margin-bottom: 2.4rem;
`;

export const InformBox = styled.div`
  width: 81%;
  margin: 0 auto 2.4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media ${tablet} {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const WriteProfile = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.6rem;
  align-items: center;
  .MuiAvatar-root {
    width: 6.8rem;
    height: 6.8rem;
  }
`;

export const Location = styled.span`
  padding: 0.5rem 0 0.4rem 2.3rem;
  background: url("/images/review/location.png") no-repeat left center;
  background-size: 2.4rem;
  font-weight: 400;
  font-size: 1.8rem;
  color: #111;
`;

export const RatingBox = styled.div``;

export const WriterInform = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const NickName = styled.span`
  font-weight: 500;
  font-size: 1.8rem;
  color: #111;
`;

export const AgeGenderBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.3rem;
`;

export const AgeGender = styled.span`
  font-weight: 400;
  font-size: 1.3rem;
  color: #999;
`;

export const Review = styled.div`
  width: 100%;
  padding: 1.2rem;
  margin-bottom: 2.4rem;
  font-size: 1.5rem;
  font-weight: 400;
  color: #111;
`;

export const CommentContainer = styled.div`
  width: 100%;
  background: #fafafa;
  margin: 4rem auto 10rem;
  padding: 2rem 2.4rem;
`;

export const ScrollBox = styled.div`
  width: 100%;
  height: auto;
  overflow-y: auto;
`;

export const BtnBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 2.4rem;
  margin: 0 auto 9.6rem;
  justify-content: center;
  @media ${tablet} {
    width: 100%;
  }
`;

export const Btn = styled.button`
  width: 180px;
  height: 6.4rem;
  background: #999999;
  border-radius: 4px;
  border: none;
  color: #fff;
  font-weight: 700;
  font-size: 1.8rem;
  cursor: pointer;
  background: linear-gradient(90.25deg, #426a3a 0.19%, #2f4b2a 99.78%);
`;
