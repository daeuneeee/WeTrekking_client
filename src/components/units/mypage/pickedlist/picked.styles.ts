import styled from "@emotion/styled";
import { mainColor } from "../../../../commons/styles/color";
import { tablet } from "../../../../commons/styles/media";

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
`;

export const PickedListContainer = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 6rem 2%;
`;

export const MoreBtn = styled.button`
  display: block;
  margin: 6rem auto 0;
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
