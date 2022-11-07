import styled from "@emotion/styled";
import { mainColor } from "../../../../commons/styles/color";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  width: 1200px;
  margin: 80px auto 100px;
`;

export const ApplyListContainer = styled.section`
  width: 100%;
`;

export const TitleUl = styled.ul`
  width: 100%;
  display: flex;
  padding: 3.6rem 0;
  border-top: 2px solid #111;
  border-bottom: 2px solid #d9d9d9;
`;

export const ListLiNum = styled.li`
  width: 11.66%;
  font-size: 1.6rem;
  font-weight: 400;
  color: #666;
  text-align: center;
`;
export const ListLiMountain = styled.li`
  width: 7.91%;
  font-size: 1.6rem;
  font-weight: 400;
  color: #111;
  text-align: center;
`;
export const ListLiTitle = styled.li`
  width: 58.33%;
  font-size: 1.6rem;
  font-weight: 500;
  color: #111;
  padding-left: 5.5rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  a {
    color: #111;
  }
`;
export const ListLiSign = styled.li`
  width: 10.41%;
  font-size: 1.6rem;
  font-weight: 500;
  color: #111;
  text-align: center;
`;
export const ListLiCancle = styled.li`
  width: 8%;
  font-size: 1.6rem;
  font-weight: 500;
  color: #111;
  text-align: center;
`;
export const ContentUl = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 2.4rem 0;
  border-bottom: 1px solid #d9d9d9;
`;
export const SignBtn = styled.div`
  width: 80px;
  padding: 0.8rem 0;
  border: 1px solid ${mainColor};
  border-radius: 4px;
  font-size: 1.6rem;
  font-weight: 400;
  color: ${mainColor};
  text-align: center;
  margin: 0 auto;
`;

export const CancleBtn = styled.button`
  width: 96px;
  padding: 0.9rem 0;
  border: none;
  background-color: #bf0e0e;
  border-radius: 4px;
  cursor: pointer;
`;

export const CancleMent = styled.span`
  font-size: 1.6rem;
  font-weight: 400;
  color: #fff;
  padding-left: 17px;
  background: url("/images/mypage/cancle.png") no-repeat left center;
`;

export const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
  .ant-pagination-item-active {
    border-color: ${mainColor};
    a {
      color: green;
    }
  }
`;
