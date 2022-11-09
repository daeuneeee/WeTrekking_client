import styled from "@emotion/styled";
import { mobile } from "../../../../commons/styles/media";

const CrewNestedCommentWrite = () => {
  return (
    <>
      <Wrapper>
        <Container>
          {/* <CrewBox> */}
          <Crew>춘딩딩</Crew>
          {/* </CrewBox> */}
          <Contents placeholder="내용을 입력해주세요"></Contents>
          <RegisterBox>
            <RegisterBtn>등록</RegisterBtn>
          </RegisterBox>
        </Container>
      </Wrapper>
    </>
  );
};

export default CrewNestedCommentWrite;

const Wrapper = styled.div`
  width: 95%;
  margin-top: 3rem;
`;

const Container = styled.div`
  width: 100%;
  background: #fff;
  border: 1px solid #d9d9d9;
  padding: 1.6rem 2.4rem;
  border-radius: 4px;
`;

// const CrewBox = styled.div``;

const Crew = styled.span`
  font-weight: 500;
  font-size: 1.6rem;
  color: #111;
`;

const Contents = styled.textarea`
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

const RegisterBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const RegisterBtn = styled.button`
  font-weight: 500;
  font-size: 1.3rem;
  color: #999;
  border: none;
  background: transparent;
  cursor: pointer;
`;
