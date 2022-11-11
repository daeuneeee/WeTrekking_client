import styled from "@emotion/styled";
import { mainColor } from "../../../../commons/styles/color";
import { mobile, tablet } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
`;

export const ProfileWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8rem 0;
  background-color: #fafafa;
`;

export const ProfileBox = styled.div`
  width: 384px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  @media ${mobile} {
    width: 90%;
  }
`;

export const ProfileBody = styled.div`
  width: 100%;
  padding: 3.2rem 0 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid #d9d9d9;
  .AvatarImg {
    width: 12rem;
    height: 12rem;
    border: 1px solid ${mainColor};
  }
`;

export const ProfileName = styled.p`
  font-size: 2.8rem;
  font-weight: 700;
  color: #111;
  margin: 2.4rem 0 1rem;
`;

export const ProfileEmail = styled.p`
  font-size: 1.3rem;
  font-weight: 500;
  color: #d6d6d6;
  margin-bottom: 2.4rem;
`;

export const GenderPhoneBox = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
`;

export const UserGenderPhoneText = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
  color: #999;
  margin-bottom: 0;
  span {
    font-size: 500;
    color: #111;
  }
`;

export const GenderPhoneLine = styled.div`
  width: 1px;
  height: 0.8rem;
  background-color: #d9d9d9;
`;

export const ProfilePointBox = styled.div`
  width: 100%;
  padding: 1.2rem 0 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  justify-content: center;
  align-items: center;
`;

export const ProfilePointTitle = styled.h4`
  font-size: 1.6rem;
  font-weight: 400;
  color: #999;
  margin-bottom: 0;
`;

export const ProfilePoint = styled.p`
  font-size: 2.4rem;
  font-weight: 700;
  color: ${mainColor};
  margin-bottom: 0;
`;

export const BannerContainer = styled.div`
  width: 100%;
  padding: 8.5rem 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8rem;
  background-image: url("/images/mypage/banner01.png");
  @media ${tablet} {
    background-image: url("/images/mypage/m-banner01.png");
    background-size: cover;
  }
`;

export const BannerContents = styled.div``;

export const BannerMent = styled.p`
  font-size: 3.2rem;
  font-weight: 400;
  color: #111;
  text-align: center;
  margin-bottom: 1.4rem;
  span {
    font-weight: 700;
  }
  @media (min-width: 1200px) {
    .mobile {
      display: none;
    }
  }
  @media ${tablet} {
    line-height: 1.5;
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
  margin: 0 auto 10rem;
  @media ${tablet} {
    width: 90%;
  }
`;

export const MyMListTitle = styled.h2`
  font-size: 3.2rem;
  font-weight: 700;
  color: #111;
  margin-bottom: 6rem;
`;

export const MyMListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6rem 2%;
  margin-bottom: 10rem;
`;

export const MyMListBox = styled.div`
  position: relative;
  width: 49%;
  height: 100%;
  &:hover {
    .reviewBtn {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .reviewBg {
      filter: blur(5px);
      -webkit-filter: blur(5px);
    }
  }
`;

export const MyMListThum = styled.div`
  width: 47.77%;
  height: 309px;
  background-color: gray;
  border-radius: 4px;
  @media ${tablet} {
    width: 100%;
    height: auto;
    padding-bottom: 90%;
  }
`;

export const MyMListInfoBox = styled.div`
  padding: 1.7rem 0;
  @media ${tablet} {
    padding: 0;
  }
`;

export const ListTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 500;
  color: #111;
  margin-bottom: 1.6rem;
`;

export const ListMountainName = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  color: #666;
  padding: 0.4rem 0 0 2.6rem;
  background: url("/images/mypage/gps-icon.png") no-repeat left center;
  background-size: 2.4rem;
  margin-bottom: 1.2rem;
`;

export const ListMountainDate = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  color: #666;
  padding: 0.5rem 0 0.5rem 2.6rem;
  background: url("/images/mypage/clock-icon.png") no-repeat left center;
  background-size: 2.4rem;
  margin-bottom: 1.6rem;
  span {
    font-size: 1.2rem;
    color: #d9d9d9;
  }
`;

export const ListWriterT = styled.h5`
  font-size: 1.3rem;
  font-weight: 400;
  color: #999;
  margin-bottom: 0.8rem;
`;

export const ListWriterInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  @media ${tablet} {
    flex-direction: row;
    align-items: center;
    gap: 1.2rem;
    .MuiAvatarGroup-avatar {
      width: 24px;
      height: 24px;
      :not(:last-of-type) {
        margin-left: -1.2rem !important;
      }
    }
  }
  @media ${mobile} {
    .MuiAvatarGroup-avatar {
      width: 16px;
      height: 16px;
    }
  }
`;
export const ListWriterInfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 1.2rem;
  @media ${tablet} {
    margin-bottom: 0;
    .MuiAvatar-circular {
      width: 5rem;
      height: 5rem;
    }
  }
`;

export const ListWriterInfo = styled.div``;

export const ListWriterName = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  color: #111;
  margin-bottom: 0.6rem;
`;

export const ListWriterAgeGender = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
  color: #999;
  margin-bottom: 0;
`;

export const PointChargeBtn = styled.button`
  width: 5rem;
  height: 3rem;
  background-color: ${mainColor};
  border: none;
  font-size: 1.3rem;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
`;

export const ReviewWriteBtn = styled.button`
  width: 12rem;
  height: 4.5rem;
  border: none;
  background-color: ${mainColor};
  border-radius: 4px;
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: 400;
  color: #fff;
  position: absolute;
  display: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
`;

export const ReviewBg = styled.div`
  position: relative;
  padding: 2.4rem;
  display: flex;
  gap: 4.44%;
  border: 1px solid #d9d9d9;
  border-radius: 8px;

  @media ${tablet} {
    flex-direction: column;
    padding: 2.4rem;
    gap: 2.4rem;
  }
  @media ${mobile} {
    width: 100%;
  }
`;
