import styled from "@emotion/styled";

const CommentBox = () => {
  return (
    <>
      <Wrapper>
        {/* <CrewBox> */}
        <Crew>춘딩딩</Crew>
        {/* </CrewBox> */}
        <Contents placeholder="내용을 입력해주세요"></Contents>
        <RegisterBox>
          <RegisterBtn>등록</RegisterBtn>
        </RegisterBox>
      </Wrapper>
    </>
  );
};

export default CommentBox;

const Wrapper = styled.div`
  width: 100%;
  height: 140px;
  background: #fff;
  border: 1px solid #d9d9d9;
  padding: 16px 24px;
`;

// const CrewBox = styled.div``;

const Crew = styled.span`
  font-weight: 500;
  font-size: 1.6rem;
  color: #111;
`;

const Contents = styled.textarea`
  width: 100%;
  height: 50px;
  border: none;
  resize: none;
  margin-top: 12px;
  font-weight: 400;
  font-size: 1.3rem;
  color: #999;
  margin-bottom: 5px;
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
