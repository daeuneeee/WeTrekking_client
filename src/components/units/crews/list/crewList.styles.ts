import { Select, DatePicker } from "antd";
import styled from "@emotion/styled";
import { mainColor, subColor } from "../../../../commons/styles/color";
import { mobile, tablet } from "../../../../commons/styles/media";
const { RangePicker }: any = DatePicker;

export const Wrapper = styled.div`
  width: 100%;
`;

export const RankingBox = styled.section`
  width: 100%;
  margin: 0 auto 7.7rem;
  display: flex;
  flex-direction: column;
  background-image: url(/images/main/top3-bg.png);
  background-size: cover;
  align-items: center;
  gap: 2.4rem;
  padding: 6.8rem 0;
`;

export const RankingTitle = styled.span`
  font-weight: 700;
  font-size: 3.6rem;
  color: #fff;
  @media ${tablet} {
    font-size: 2.8rem;
  }
`;

export const Ranking = styled.div`
  position: relative;
  width: 384px;
  padding: 1.6rem 1.2rem;
  background: #fff;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  gap: 1.6rem;
  .avatar {
    width: 6.8rem;
    height: 6.8rem;
  }
  @media ${tablet} {
    width: 100%;
  }
`;

export const RankingInform = styled.div`
  display: flex;
  flex-direction: column;
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
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${mobile} {
    width: 48px;
    height: 18px;
  }
`;

export const RankingNum = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 1.6rem;
  color: #fff;
  margin-bottom: 0;
  @media ${tablet} {
    font-size: 1.2rem;
  }
`;

export const CrewBox = styled.section`
  width: 1200px;
  margin: 0 auto;
  @media ${tablet} {
    width: 90%;
    margin: 0 auto;
  }
  @media ${mobile} {
    width: 90%;
    margin: 0 auto;
  }
`;

export const RankingContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2.4rem;
  @media ${tablet} {
    flex-direction: column;
    width: 90%;
  }
  @media ${mobile} {
    flex-direction: column;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  font-weight: 700;
  font-size: 3.2rem;
  color: #111;
  @media ${tablet} {
    font-size: 2.8rem;
  }
`;

export const OrderBox = styled.ul`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  gap: 8px;
  align-items: flex-end;
  @media ${tablet} {
    margin-bottom: 0.8rem;
  }
`;

export const OrderList = styled.li`
  color: #111;
  font-weight: 400;
  font-size: 1.3rem;
  cursor: pointer;
  &.active {
    font-weight: 700;
    color: ${mainColor};
  }
`;

export const TitleBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 2.4rem;
`;

export const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  margin-bottom: 6rem;
  width: 100%;
  @media ${mobile} {
    flex-direction: column;
  }
  @media ${tablet} {
    flex-direction: column;
  }
`;

export const SelectDateBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: flex-end;
  width: 400px;
  .ant-picker {
    :hover {
      border-color: #d9d9d9;
      box-shadow: none;
    }
  }
  .ant-picker-focused {
    border-color: transparent;
    box-shadow: 0 0 0 2px ${subColor};
  }
  .ant-picker-input > input {
    ::placeholder {
      font-size: 1.4rem;
    }
  }
  .ant-space-vertical {
    width: 50%;
  }
  @media ${mobile} {
    width: 100%;
  }
  @media ${tablet} {
    width: 100%;
  }
`;

export const SearchBtnBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5%;
  align-items: center;
  width: 14%;
  justify-content: flex-end;
  @media ${mobile} {
    width: 100%;
    gap: 1%;
  }
  @media ${tablet} {
    width: 100%;
    gap: 1%;
  }
`;

export const Partition = styled.span`
  width: 1px;
  height: 16px;
  background: #d9d9d9;
  @media ${mobile} {
    display: none;
  }
  @media ${tablet} {
    display: none;
  }
`;

export const Search = styled.input`
  padding: 0.5rem 1.2rem;
  width: 100%;
  height: 32px;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 2px;
  outline-color: ${subColor};
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
  @media ${mobile} {
    width: 100%;
  }
  @media ${tablet} {
    width: 100%;
  }
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
  @media ${mobile} {
    width: 100%;
  }
  @media ${tablet} {
    width: 100%;
  }
`;

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8.8rem 2%;
  margin-bottom: 6rem;
`;

export const ListHeader = styled.div`
  margin-bottom: 1.6rem;
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
  .avatar {
    width: 3.2rem;
    height: 3.2rem;
  }
`;

export const ListNickName = styled.span`
  font-weight: 400;
  font-size: 1.6rem;
  color: #111;
`;

export const ListPick = styled.div`
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;
`;

export const ListBox = styled.div`
  width: 32%;
  @media ${tablet} {
    width: 48%;
  }
  @media ${mobile} {
    width: 100%;
  }
`;

export const ListThumbnail = styled.div`
  width: 100%;
  padding-bottom: 63%;
  background: #cccccc;
  border-radius: 8px;
  margin-bottom: 1.6rem;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const ListBody = styled.div``;

export const ListTitleBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.2rem;
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
  margin-bottom: 1.2rem;
  .css-sxh3gq-MuiAvatar-root-MuiAvatarGroup-avatar {
    width: 24px;
    height: 24px;
  }
`;

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

export const Location = styled.span`
  font-weight: 400;
  font-size: 1.3rem;
  color: #999;
  padding: 0.2rem 0 0.2rem 1.5rem;
  background: url("/images/crew/location.png") no-repeat left center;
  background-size: 1.2rem 1.4rem;
`;

export const ListTimeAndDayBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  align-items: center;
`;

export const Day = styled.span`
  font-weight: 400;
  font-size: 1.3rem;
  color: #999;
  padding: 0.2rem 0 0.2rem 1.9rem;
  background: url("/images/crew/time.png") no-repeat left center;
  background-size: 1.6rem;
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
  padding: 1.6rem 0;
  color: #999;
  background: #fff;
  border: 1px solid #999;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 10.3rem;
  :hover {
    background: ${mainColor};
    color: white;
    border: 1px solid ${mainColor};
    transition: all 0.3s;
  }
  @media ${mobile} {
    width: 100%;
  }
`;

export const SelectAntD = styled(Select)`
  width: 30%;
  :hover {
    border-radius: 2px;
  }
  .ant-select-selection-item {
    font-size: 1.4rem;
  }

  &.ant-select-focused:not(.ant-select-disabled).ant-select:not(.ant-select-customize-input)
    .ant-select-selector {
    border-color: ${subColor};
    box-shadow: 0 0 0 1px ${subColor};
    border-radius: 2px;
  }

  &.ant-select:not(.ant-select-disable):hover .ant-select-selector {
    border-color: #d9d9d9;
  }

  @media ${mobile} {
    width: 50%;
  }
  @media ${tablet} {
    width: 50%;
  }
`;

export const DateAntD = styled(RangePicker)`
  &.ant-picker {
    width: 100%;
    :hover {
      border-radius: 4px;
      border-color: ${subColor};
      box-shadow: 0 0 0 1px ${subColor};
    }
  }

  &.ant-picker-range {
    width: 100%;
  }
  &.ant-picker-range .ant-picker-active-bar {
    background: ${subColor};
  }
`;

export const MountainSearchBox = styled.div`
  position: relative;
  width: 216px;
  @media ${mobile} {
    width: 100%;
  }
  @media ${tablet} {
    width: 100%;
  }
`;
export const MountainSearchBtn = styled.span`
  position: absolute;
  top: 0.5rem;
  right: 1rem;
  cursor: pointer;
  color: ${mainColor};
`;
