import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 95%;
  margin-top: 3rem;
`;

export const Container = styled.div`
  width: 100%;
  background: #fff;
  border: 1px solid #d9d9d9;
  padding: 1.6rem 2.4rem;
  border-radius: 4px;
`;

export const Contents = styled.textarea`
  width: 100%;
  border: none;
  resize: none;
  margin-top: 1.2rem;
  font-weight: 400;
  font-size: 1.3rem;
  color: #999;
  margin-bottom: 5px;
  padding-bottom: 3%;
  outline: none;
  ::placeholder {
    color: #999;
  }
`;

export const RegisterBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const RegisterBtn = styled.button`
  font-weight: 500;
  font-size: 1.3rem;
  color: #999;
  border: none;
  background: transparent;
  cursor: pointer;
`;
