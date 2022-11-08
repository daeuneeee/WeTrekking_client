import styled from "@emotion/styled";
import { mainColor, subColor } from "../../../../commons/styles/color";

export const Wrapper = styled.div`
  width: 100%;
  padding: 0 5%;
`;

export const Container = styled.div`
  width: 1200px;
  margin: 80px auto 100px;
`;

export const ReviewListContainer = styled.section`
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
export const ListLiWrite = styled.li`
  width: 10.41%;
  font-size: 1.6rem;
  font-weight: 500;
  color: #111;
  text-align: center;
  position: relative;
`;
export const ListLiCreatedAt = styled.li`
  width: 8%;
  font-size: 1.6rem;
  font-weight: 500;
  text-align: center;
`;
export const ContentUl = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 2.4rem 0;
  border-bottom: 1px solid #d9d9d9;
  margin-bottom: 0;
`;
export const Write = styled.span`
  width: 80px;
  padding: 0.8rem 0;
  font-size: 1.6rem;
  font-weight: 400;
  color: ${mainColor};
  text-align: center;
  margin: 0 auto;
`;

export const Title = styled.a`
  :hover {
    color: ${mainColor};
  }
  &.on {
    font-weight: 500;
    color: #fff;
    background-color: ${subColor};
    padding: 0 10px;
    border-radius: 20px;
  }
`;

export const CreatedAt = styled.span`
  font-size: 1.6rem;
  font-weight: 400;
  color: #111;
  padding-left: 10px;
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
`;
