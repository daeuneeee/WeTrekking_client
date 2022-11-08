import styled from "@emotion/styled";
import { mainColor } from "../../../../commons/styles/color";
import { mobile, tablet } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  width: 1200px;
  margin: 8rem auto 10rem;
  min-height: calc(100vh - 611px);
  @media ${tablet} {
    width: 90%;
  }
  @media ${mobile} {
    .mobile {
      display: none;
    }
  }
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
  margin-bottom: 0;
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
  @media ${mobile} {
    width: 10%;
  }
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
  @media ${mobile} {
    width: 50%;
  }
`;
export const ListLiSign = styled.li`
  width: 12%;
  font-size: 1.6rem;
  font-weight: 500;
  color: #111;
  text-align: center;
  position: relative;
  @media ${mobile} {
    width: 20%;
  }
`;
export const ListLiCancel = styled.li`
  width: 10%;
  font-size: 1.6rem;
  font-weight: 500;
  color: #111;
  text-align: center;
  @media ${mobile} {
    width: 17%;
  }
`;
export const ContentUl = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 2.4rem 0;
  border-bottom: 1px solid #d9d9d9;
  margin-bottom: 0;
`;
export const SignBtn = styled.div`
  width: 70%;
  padding: 0.8rem 0;
  border: 1px solid ${mainColor};
  border-radius: 4px;
  font-size: 1.4rem;
  font-weight: 400;
  color: ${mainColor};
  text-align: center;
  margin: 0 auto;
`;

export const CancelBtn = styled.button`
  width: 100%;
  padding: 0.9rem 0;
  border: none;
  background-color: #bf0e0e;
  border-radius: 4px;
  cursor: pointer;
`;

export const CancelMent = styled.span`
  font-size: 1.4rem;
  font-weight: 400;
  color: #fff;
  padding-left: 2rem;
  background: url("/images/mypage/Cancel.png") no-repeat left center;
  background-size: 16px;
  @media (max-width: 920px) {
    font-size: 1.2rem;
  }
  @media ${mobile} {
    background-size: 10px;
  }
`;

export const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;

  .ant-pagination-prev:hover {
    button {
      border-color: ${mainColor};
      color: green;
    }
  }
  .ant-pagination-next:hover {
    button {
      border-color: ${mainColor};
      color: green;
    }
  }
  .ant-pagination-item:hover {
    border-color: ${mainColor};
    a {
      color: green;
    }
  }

  .ant-pagination-item-active {
    border-color: ${mainColor};
    a {
      color: green;
    }
  }
  @media ${mobile} {
    .ant-pagination {
      font-size: 1.4rem;
    }
    .ant-pagination-item {
      min-width: 3.2rem;
      width: 3.2rem;
      height: 3.2rem;
      line-height: 3rem;
      margin-right: 0.8rem;
      a {
        padding: 0 0.3rem;
      }
    }
    .ant-pagination-prev .ant-pagination-item-link,
    .ant-pagination-next .ant-pagination-item-link {
      font-size: 1.4rem;
      span {
        display: block;
        margin-top: -1px;
      }
    }
    .ant-pagination-prev,
    .ant-pagination-next,
    .ant-pagination-jump-prev,
    .ant-pagination-jump-next {
      min-width: 3.2rem;
      height: 3.2rem;

      line-height: 3.2rem;
    }
  }
`;
