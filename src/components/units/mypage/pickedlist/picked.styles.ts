import styled from "@emotion/styled";
import { mainColor } from "../../../../commons/styles/color";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  width: 1200px;
  margin: 80px auto 100px;
  min-height: calc(100vh - 611px);
`;

export const PickedListContainer = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 6rem 2%;
`;

export const MoreBtn = styled.button`
  display: block;
  margin: 60px auto 0;
  width: 384px;
  padding: 1.6rem;
  border: 1px solid #999;
  border-radius: 4px;
  background: none;
  font-size: 1.6rem;
  font-weight: 500;
  color: #999;
  cursor: pointer;
  :hover {
    background: ${mainColor};
    color: white;
    border: 1px solid ${mainColor};
    transition: all 0.3s;
  }
`;
