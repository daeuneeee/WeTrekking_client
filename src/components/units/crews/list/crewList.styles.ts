import styled from "@emotion/styled";
import { mainColor } from "../../../../commons/styles/color";

export const Wrapper = styled.div`
  width: 100%;
`;

export const RankingBox = styled.section`
  width: 100%;
  margin: 0 auto 77px;
  display: flex;
  flex-direction: column;
  background-image: url(/images/main/top3-bg.png);
  background-size: cover;
  align-items: center;
  gap: 24px;
`;

export const RankingTitle = styled.span`
  font-weight: 700;
  font-size: 3.6rem;
  color: #fff;
`;

export const Ranking = styled.div`
  position: relative;
  width: 384px;
  padding: 16px 12px;
  background: #fff;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  gap: 16px;
`;

export const RankingInform = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
`;

export const RankingNickName = styled.span`
  color: #111;
  font-weight: 500;
  font-size: 1.8rem;
`;

export const RankingEmail = styled.span`
  font-weight: 500;
  font-size: 1.3rem;
  color: #d6d6d6;
`;

export const RankingNumBox = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 64px;
  height: 24px;
  background: #e75353;
  border-radius: 0px 8px;
`;

export const RankingNum = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 1.6rem;
  color: #fff;
`;

export const CrewBox = styled.section`
  width: 1200px;
  margin: 0 auto;
`;

export const RankingContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  font-weight: 700;
  font-size: 3.2rem;
  color: #111;
`;

export const OrderBox = styled.ul`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  gap: 8px;
`;

export const OrderList = styled.li`
  color: #111;
  font-weight: 400;
  font-size: 1.3rem;
  cursor: pointer;
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  margin-bottom: 60px;
`;

export const Partition = styled.span`
  width: 1px;
  height: 16px;
  background: #d9d9d9;
`;

export const Search = styled.input`
  padding: 5px 12px;
  width: 216px;
  height: 32px;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  ::placeholder {
    font-weight: 400;
    font-size: 1.3rem;
    color: #666;
  }
`;

export const SearchBtn = styled.button`
  background: linear-gradient(90.25deg, #426a3a 0.19%, #2f4b2a 99.78%);
  border: none;
  border-radius: 4px;
  width: 60px;
  height: 32px;
  color: white;
  font-weight: 700;
  font-size: 1.2rem;
  cursor: pointer;
`;

export const RegisterBtn = styled.button`
  width: 98px;
  height: 32px;
  background: #fff;
  border: 1px solid ${mainColor};
  border-radius: 4px;
  font-weight: 700;
  font-size: 1.3rem;
  color: ${mainColor};
  cursor: pointer;
`;

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 88px 2%;
  margin-bottom: 60px;
`;

export const ListHeader = styled.div`
  margin-bottom: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ListInform = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 6px;
`;

export const ListNickName = styled.span`
  font-weight: 400;
  font-size: 1.6rem;
  color: #111;
`;

export const ListPick = styled.div`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const ListBox = styled.div`
  width: 384px;
`;

export const ListThumbnail = styled.div`
  width: 384px;
  height: 250px;
  background: #cccccc;
  border-radius: 8px;
  margin-bottom: 16px;
`;

export const ListBody = styled.div``;

export const ListTitleBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

export const ListTitle = styled.span`
  font-weight: 500;
  font-size: 1.8rem;
  color: #111;
`;

export const ListCreatedAt = styled.span`
  font-weight: 400;
  font-size: 1.3rem;
  color: #999;
`;

export const ListCrewsBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  margin-bottom: 12px;
  .css-sxh3gq-MuiAvatar-root-MuiAvatarGroup-avatar {
    width: 24px;
    height: 24px;
  }
`;

// export const ListCrewsImg = styled.div`
//   border: 1px solid blue;
//   border-radius: 100%;
//   width: 24px;
//   height: 24px;
// `;

export const ListCrewsNum = styled.span`
  font-weight: 400;
  font-size: 1.3rem;
  color: #333;
`;

export const ListFooter = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;

export const ListLocationBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

// export const LocationImg = styled.div`
//   width: 16px;
//   height: 16px;
// `;

export const Location = styled.span`
  font-weight: 400;
  font-size: 1.3rem;
  color: #999;
  padding-left: 15px;
  background: url("/images/crew/location.png") no-repeat left center;
`;

export const ListTimeAndDayBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2px;
  align-items: center;
`;

// export const TimeImg = styled.div`
//   width: 16px;
//   height: 16px;
// `;

export const Day = styled.span`
  font-weight: 400;
  font-size: 1.3rem;
  color: #999;
  padding-left: 19px;
  background: url("/images/crew/time.png") no-repeat left center;
`;

export const TimePartition = styled.span`
  width: 1px;
  height: 8px;
  background: #d9d9d9;
`;

export const Time = styled.span`
  font-weight: 400;
  font-size: 1.3rem;
  color: #999;
`;

export const ListContainer = styled.div`
  cursor: pointer;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;
`;

export const MoreBtn = styled.button`
  width: 384px;
  text-align: center;
  font-weight: 500;
  font-size: 1.6rem;
  padding: 16px 0;
  color: #999;
  background: #fff;
  border: 1px solid #999;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 103px;

  :hover {
    background: ${mainColor};
    color: white;
    border: 1px solid ${mainColor};
    transition: all 0.3s;
  }
`;
