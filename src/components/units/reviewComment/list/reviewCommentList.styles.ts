import styled from "@emotion/styled";
import { mainColor } from "../../../../commons/styles/color";
import { tablet } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  gap: 1.2rem;
`;

export const CommentBox = styled.div`
  width: 95%;
`;

export const NickName = styled.p`
  color: #111;
  font-weight: 500;
  font-size: 1.3rem;
  padding-top: 0.4rem;
  margin-bottom: 0;
`;

export const Comment = styled.div`
  margin-bottom: 0.8rem;
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 1.4;
`;

export const DateBox = styled.div`
  display: flex;
  gap: 0.4rem;
`;

export const Date = styled.span`
  font-weight: 400;
  font-size: 1.3rem;
  color: #999;
`;

export const DateEditDeleteBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;

export const EditDelete = styled.span`
  font-size: 1.1rem;
  color: ${mainColor};
  cursor: pointer;
`;

export const EditDeleteBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.1rem;
`;

export const EditDeleteDot = styled.span`
  font-size: 1.1rem;
  color: ${mainColor};
`;

export const EditContainer = styled.div`
  width: 100%;
  height: 12rem;
  background: #fff;
  border: 1px solid #d9d9d9;
  padding: 1.6rem 2.4rem;
  border-radius: 4px;
  margin-top: 2rem;
  @media ${tablet} {
    padding: 0.16rem 2.4rem;
  }
`;

export const EditContents = styled.textarea`
  width: 100%;
  height: 5rem;
  border: none;
  resize: none;
  margin-top: 1.2rem;
  font-weight: 400;
  font-size: 1.3rem;
  color: #999;
  margin-bottom: 0.5rem;
  outline: none;
  ::placeholder {
    color: #999;
  }
`;

export const EditRegisterBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const EditRegisterBtn = styled.button`
  font-weight: 500;
  font-size: 1.3rem;
  color: #999;
  border: none;
  background: transparent;
  cursor: pointer;
`;
