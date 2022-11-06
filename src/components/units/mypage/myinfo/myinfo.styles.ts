import styled from "@emotion/styled";
import { mainColor } from "../../../../commons/styles/color";

export const Wrapper = styled.div`
  width: 100%;
`;

export const ProfileWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 0;
  background-color: #fafafa;
`;

export const ProfileBox = styled.div`
  width: 384px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
`;

export const ProfileBody = styled.div`
  width: 100%;
  padding: 32px 0 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #d9d9d9;
`;

export const ProfileName = styled.p`
  font-size: 2.8rem;
  font-weight: 700;
  color: #111;
  margin: 24px 0 10px;
`;

export const ProfileEmail = styled.p`
  font-size: 1.3rem;
  font-weight: 500;
  color: #d6d6d6;
  margin-bottom: 24px;
`;

export const GenderPhoneBox = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

export const UserGenderPhoneText = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
  color: #999;
  span {
    font-size: 500;
    color: #111;
  }
`;

export const GenderPhoneLine = styled.div`
  width: 1px;
  height: 8px;
  background-color: #d9d9d9;
`;

export const ProfilePointBox = styled.div`
  width: 100%;
  padding: 12px 0 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: center;
`;

export const ProfilePointTitle = styled.h4`
  font-size: 1.6rem;
  font-weight: 400;
  color: #999;
`;

export const ProfilePoint = styled.p`
  font-size: 2.4rem;
  font-weight: 700;
  color: ${mainColor};
`;

export const BannerContainer = styled.div`
  width: 100%;
  padding: 85px 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
`;

export const BannerContents = styled.div``;

export const BannerMent = styled.p`
  font-size: 3.2rem;
  font-weight: 400;
  color: #111;
  text-align: center;
  margin-bottom: 14px;
  span {
    font-weight: 700;
  }
`;

export const GoPoint = styled.button`
  display: block;
  margin: 0 auto;
  font-size: 1.6rem;
  font-weight: 500;
  color: ${mainColor};
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const InfoContainer = styled.div`
  width: 1200px;
  margin: 0 auto 100px;
`;

export const MyMListTitle = styled.h2`
  font-size: 3.2rem;
  font-weight: 700;
  color: #111;
  margin-bottom: 60px;
`;

export const MyMListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 60px 2%;
  margin-bottom: 100px;
`;

export const MyMListBox = styled.div`
  width: 49%;
  padding: 24px;
  display: flex;
  gap: 4.44%;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
`;

export const MyMListThum = styled.div`
  width: 47.77%;
  height: 100%;
  background-color: gray;
  border-radius: 4px;
`;

export const MyMListInfoBox = styled.div`
  padding: 17px 0;
`;

export const ListTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 500;
  color: #111;
  margin-bottom: 16px;
`;

export const ListMountainName = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  color: #666;
  padding: 4px 0 0 26px;
  background: url("/images/mypage/gps-icon.png") no-repeat left center;
  margin-bottom: 12px;
`;

export const ListMountainDate = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  color: #666;
  padding: 5px 0 5px 26px;
  background: url("/images/mypage/clock-icon.png") no-repeat left center;
  margin-bottom: 16px;
  span {
    font-size: 1.2rem;
    color: #d9d9d9;
  }
`;

export const ListWriterT = styled.h5`
  font-size: 1.3rem;
  font-weight: 400;
  color: #999;
  margin-bottom: 8px;
`;

export const ListWriterInfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
`;

export const ListWriterInfo = styled.div``;

export const ListWriterName = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  color: #111;
  margin-bottom: 6px;
`;

export const ListWriterAgeGender = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
  color: #999;
`;
