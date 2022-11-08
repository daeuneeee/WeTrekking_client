import styled from "@emotion/styled";
import { mainColor } from "../../../../commons/styles/color";

export const FindTabContainer = styled.ul`
  width: 100%;
  display: flex;
  margin-bottom: 11.2rem;
`;

export const FindTabLeft = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  border: 1px solid #d9d9d9;
  border-right: 1px solid ${mainColor};
  padding: 1.7rem 0;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  font-size: 1.6rem;
  font-weight: 400;
  color: #999;
  cursor: pointer;
`;

export const FindTabRight = styled(FindTabLeft)`
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  margin-left: -1px;
  border-left: 1px solid ${mainColor};
  border-right: 1px solid #d9d9d9;
`;
