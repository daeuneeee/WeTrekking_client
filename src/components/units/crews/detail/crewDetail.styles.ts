import styled from "@emotion/styled";
import { mainColor } from "../../../../commons/styles/color";
import { mobile, tablet } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  padding: 7.8rem 0;
  @media ${mobile} {
    width: 90%;
    margin: 0 auto 6rem;
  }
  @media ${tablet} {
    width: 90%;
    margin: 0 auto 6rem;
  }
`;

export const Header = styled.section`
  width: 1200px;
  display: flex;
  flex-direction: row;
  margin: 0 auto 6rem;
  justify-content: space-between;
  @media ${mobile} {
    width: 100%;
    flex-direction: column;
  }
  @media ${tablet} {
    width: 100%;
    flex-direction: column;
  }
`;

export const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  width: 49%;
  justify-content: space-between;
  @media ${tablet} {
    width: 100%;
    gap: 4.5rem;
  }
  @media ${mobile} {
    width: 100%;
    gap: 4rem;
  }
  @media (max-width: 500px) {
    gap: 3.5rem;
  }
`;

export const InformBox = styled.div`
  width: 49%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media ${tablet} {
    width: 100%;
  }
  @media ${mobile} {
    width: 100%;
  }
  @media (max-width: 500px) {
  }
`;

export const MainImg = styled.div`
  width: 100%;
  /* height: 400px; */
  padding-bottom: 71%;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
`;

export const SubImgBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SubImg = styled.div`
  width: 30%;
  /* height: 160px; */
  padding-bottom: 30%;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
`;

export const LocationToProfile = styled.div`
  width: 100%;
  margin-top: 2.2rem;
`;

export const LocationPickBox = styled.div`
  display: flex;
  flex-direction: row;
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
  gap: 0.2rem;
  margin-bottom: 1.5rem; ;
`;

export const LocationImg = styled.img`
  width: 2.4rem;
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
  margin-bottom: 1.2rem;
`;

export const PickChatContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.2rem;
`;

export const PickChatBox = styled.div`
  width: 4.8rem;
  height: 4.8rem;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const PickBox = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  display: flex;
  align-items: center;
`;

export const ChatBox = styled(PickBox)`
  width: 2.4rem;
  height: 2.4rem;
  background: url(/images/detail/chat.png) center center;
  background-size: cover;
`;
export const ProfileBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 1.6rem;
  align-items: center;
  margin-bottom: 2.4rem;
`;

export const ProfileImg = styled.div`
  width: 6.8rem;
  height: 6.8rem;
  border: 1px solid #d9d9d9;
  border-radius: 100%;
  background-size: cover;
  background-position: center;
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
  gap: 0.3rem;
`;

export const AgeGender = styled.span`
  font-weight: 500;
  font-size: 1.3rem;
  color: #d6d6d6;
`;

export const UnderLine = styled.div`
  width: 100%;
  height: 1px;
  background: #d9d9d9;
  margin-bottom: 2.4rem;
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
  gap: 1.2rem;
  /* border-right: 1px solid #d9d9d9; */
  padding: 2.1rem 2rem;
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
  margin: 4rem 0 2.4rem;
  align-items: center;
`;

export const DueText = styled.span`
  font-weight: 400;
  font-size: 1.8rem;
  color: #999;
  margin-right: 1.2rem;
  padding-top: 0.5rem;
`;

export const DueData = styled.span`
  font-weight: 500;
  font-size: 3.2rem;
  color: ${mainColor};
  margin-right: 0.4rem; ;
`;

export const DueWon = styled.span`
  font-weight: 400;
  font-size: 1.8rem;
  color: ${mainColor};
  padding-top: 0.5rem;
`;

export const Description = styled.div`
  width: 100%;
  /* height: 160px; */
  border: 1px solid #d9d9d9;
  resize: none;
  overflow-y: auto;
  padding: 1.6rem 1.6rem 20% 1.6rem;
  font-weight: 400;
  font-size: 1.6rem;
  border-radius: 4px;
`;

export const MiddleUnderLine = styled.div`
  width: 1200px;
  height: 1px;
  background: #d9d9d9;
  margin: 2rem auto;
  @media ${tablet} {
    width: 100%;
  }
  @media ${mobile} {
    width: 100%;
  }
`;

export const ResponsiveUnderLine = styled(MiddleUnderLine)`
  display: none;
  @media ${tablet} {
    display: block;
  }
  @media ${mobile} {
    display: block;
  }
`;

export const Body = styled.section`
  width: 1200px;
  display: flex;
  flex-direction: row;
  margin: 4rem auto 6.8rem;
  justify-content: space-between;
  @media ${mobile} {
    width: 100%;
    flex-direction: column;
  }
  @media ${tablet} {
    width: 100%;
    flex-direction: column;
  }
`;

export const MapBox = styled.div`
  width: 792px;
  @media ${mobile} {
    width: 100%;
    flex-direction: column;
  }
  @media ${tablet} {
    width: 100%;
    flex-direction: column;
  }
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
  margin-bottom: 1.9rem;
  margin-top: 2.4rem;
`;

export const AddressBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Address = styled.span`
  font-weight: 400;
  font-size: 2rem;
  color: #000;
`;

export const ListBox = styled.div`
  width: 30%;
  @media ${mobile} {
    width: 100%;
  }
  @media ${tablet} {
    width: 100%;
  }
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
  gap: 0.2rem;
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
  width: 2.4rem;
`;

export const CrewContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const CrewBox = styled.div`
  width: 100%;
  background: #fafafa;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  overflow-y: auto;
  padding: 4.44% 3.33%;
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-height: 53.9rem;
`;

export const CrewLoginCheckBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 0;
`;
export const CrewLoginText = styled.p`
  font-weight: 600;
  font-size: 1.3rem;
  margin-bottom: 0.2rem;
`;
export const CrewLoginBtn = styled.button`
  width: 30%;
  padding: 1rem 2.5rem;
  background: linear-gradient(90.25deg, #426a3a 0.19%, #2f4b2a 99.78%);
  border-radius: 4px;
  font-weight: 400;
  font-size: 1.6rem;
  color: white;
  margin-top: 1rem;
  border: none;
`;

export const CrewInformBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 74px;
  background: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  padding: 1.2rem;
  justify-content: space-between;
  align-items: center;
`;

export const CrewInform = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  .avatar {
    width: 5rem;
    height: 5rem;
  }
`;

export const CrewPositionNickName = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const CrewPosition = styled.span`
  font-weight: 500;
  color: ${mainColor};
  font-size: 1.4rem;
`;

export const CrewNickName = styled.span`
  color: #111;
  font-weight: 500;
  font-size: 1.6rem;
`;

export const CrewAgeGenderBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.3rem;
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
  gap: 2.4rem;
  margin: 0 auto 9.6rem;
  justify-content: center;
  @media ${mobile} {
    width: 100%;
  }
  @media ${tablet} {
    width: 100%;
  }
`;

export const ListBtn = styled.button`
  width: 282px;
  height: 6.4rem;
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
  margin: 4rem auto 10rem;
  padding: 2rem 2.4rem;
  @media ${mobile} {
    width: 100%;
  }
  @media ${tablet} {
    width: 100%;
  }
`;
