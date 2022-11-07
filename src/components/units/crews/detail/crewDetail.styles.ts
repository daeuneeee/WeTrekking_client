import styled from "@emotion/styled";
import { mainColor } from "../../../../commons/styles/color";

export const Wrapper = styled.div`
  width: 100%;
  padding: 78px 0 124px;
  border: 1px solid orange;
`;

export const Header = styled.section`
  width: 1200px;
  display: flex;
  flex-direction: row;
  margin: 0 auto 60px;
  justify-content: space-between;
`;

export const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const InformBox = styled.div`
  width: 564px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MainImg = styled.div`
  width: 588px;
  height: 400px;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
`;

export const SubImgBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SubImg = styled.div`
  width: 180px;
  height: 160px;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
`;

export const LocationToProfile = styled.div`
  width: 100%;
  margin-top: 22px;
`;

export const LocationPickBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LocationTitleBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LocationBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2px;
  margin-bottom: 15px; ;
`;

export const LocationImg = styled.img`
  width: 24px;
`;

export const Location = styled.span`
  font-weight: 400;
  font-size: 1.8rem;
  color: #999;
`;

export const Title = styled.span`
  font-weight: 500;
  font-size: 3.2rem;
  color: #111;
  margin-bottom: 12px;
`;

export const PickBox = styled.div`
  width: 48px;
  height: 48px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Pick = styled.div`
  width: 24px;
  height: 24px;
`;
export const ProfileBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  margin-bottom: 24px;
`;

export const ProfileImg = styled.div`
  width: 68px;
  height: 68px;
  border: 1px solid #d9d9d9;
  border-radius: 100%;
`;

export const ProfileInform = styled.div`
  display: flex;
  flex-direction: column;
`;

export const NickName = styled.span`
  font-weight: 500;
  font-size: 1.8rem;
  color: #111;
`;

export const AgeGenderBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3px;
`;

export const AgeGender = styled.span`
  font-weight: 500;
  font-size: 1.3rem;
  color: #d6d6d6;
`;

export const UnderLine = styled.div`
  width: 564px;
  height: 1px;
  background: #d9d9d9;
  margin-bottom: 24px;
`;

export const DetailInformBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const DetailInform = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  /* border-right: 1px solid #d9d9d9; */
  padding: 21px 20px;
  /* :last-child {
    border-right: none;
  } */
`;

export const Line = styled.div`
  width: 1px;
  height: 100%;
  background-color: #d9d9d9; ;
`;

export const DetailTitle = styled.span`
  font-weight: 400;
  font-size: 1.8rem;
  color: #666;
`;

export const DetailData = styled.span`
  font-weight: 500;
  font-size: 1.6rem;
  color: #111;
`;

// export const TrailBtn = styled.button``;

export const DueBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 40px 0 24px;
  align-items: center;
`;

export const DueText = styled.span`
  font-weight: 400;
  font-size: 1.8rem;
  color: #999;
  margin-right: 12px;
  padding-top: 5px;
`;

export const DueData = styled.span`
  font-weight: 500;
  font-size: 3.2rem;
  color: ${mainColor};
  margin-right: 4px; ;
`;

export const DueWon = styled.span`
  font-weight: 400;
  font-size: 1.8rem;
  color: ${mainColor};
  padding-top: 5px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 160px;
  border: 1px solid #d9d9d9;
  resize: none;
  overflow-y: scroll;
  padding: 16px;
`;

export const MiddleUnderLine = styled.div`
  width: 100%;
  height: 1px;
  background: #d9d9d9;
`;

export const Body = styled.section`
  width: 1200px;
  display: flex;
  flex-direction: row;
  margin: 40px auto 68px;
  justify-content: space-between;
`;

export const MapBox = styled.div`
  width: 792px;
`;

export const BodyTitle = styled.p`
  font-weight: 500;
  font-size: 2.4rem;
  color: #111;
`;

export const Map = styled.div`
  width: 100%;
  height: 434px;
  border-radius: 8px;
  border: 1px solid green;
  margin-bottom: 19px;
  margin-top: 24px;
`;

export const AddressBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Address = styled.span`
  font-weight: 400;
  font-size: 2rem;
  color: #000;
`;

export const ListBox = styled.div`
  width: 360px;
`;

export const ListInform = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CrewListBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2px;
`;

export const CrewList = styled.span`
  font-weight: 400;
  font-size: 1.8rem;
  color: #111;
`;

export const CrewListAll = styled(CrewList)`
  color: #999;
`;

export const Img = styled.img`
  width: 24px;
`;

export const CrewBox = styled.div`
  width: 100%;
  background: #fafafa;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  margin-top: 24px;
  overflow-y: scroll;
  padding: 4.44% 3.33%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-height: 539px;
`;

export const CrewInformBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 74px;
  background: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  padding: 12px;
  justify-content: space-between;
  align-items: center;
`;

export const CrewInform = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
`;

export const CrewPositionNickName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const CrewPosition = styled.span`
  font-weight: 500;
  color: ${mainColor};
`;

export const CrewNickName = styled.span`
  color: #111;
  font-weight: 500;
  font-size: 1.6rem;
`;

export const CrewAgeGenderBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3px;
`;

export const CrewAgeGender = styled.span`
  color: #999;
  font-weight: 400;
  font-size: 1.1rem;
`;

export const Footer = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: row;
  gap: 24px;
  margin: 0 auto 96px;
  justify-content: center;
`;

export const ListBtn = styled.button`
  width: 282px;
  height: 64px;
  background: #999999;
  border-radius: 4px;
  border: none;
  color: #fff;
  font-weight: 700;
  font-size: 1.8rem;
  cursor: pointer;
`;

export const ApplyBtn = styled(ListBtn)`
  background: linear-gradient(90.25deg, #426a3a 0.19%, #2f4b2a 99.78%);
`;

export const CommentContainer = styled.div`
  width: 1200px;
  background: #fafafa;
  margin: 40px auto 100px;
  padding: 20px 24px;
`;

// export const InformBox = styled.div`
// `

// export const InformBox = styled.div`
// `

// export const InformBox = styled.div`
// `

// export const InformBox = styled.div`
// `

// export const InformBox = styled.div`
// `

// export const InformBox = styled.div`
// `

// export const InformBox = styled.div`
// `

// export const InformBox = styled.div`
// `

// export const InformBox = styled.div`
// `

// export const InformBox = styled.div`
// `

// export const InformBox = styled.div`
// `

// export const InformBox = styled.div`
// `

// export const InformBox = styled.div`
// `

// export const InformBox = styled.div`
// `

// export const InformBox = styled.div`
// `

// export const InformBox = styled.div`
// `
