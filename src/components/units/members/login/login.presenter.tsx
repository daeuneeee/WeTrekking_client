import * as S from "./login.styles";
import * as A from "../join/join.styles";
import { ILoginUiProps } from "./login.types";
const LoginUi = ({
  onChangeCheckBox,
  isCheck,
  onClickToJoin,
  register,
  handleSubmit,
  onClickLogin,
  onClickToFindId,
}: ILoginUiProps) => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.LoginTitle>
          We Trekking<span>로그인</span>
        </S.LoginTitle>
        <S.LoginForm onSubmit={handleSubmit(onClickLogin)}>
          <S.LoginInputContainer>
            <S.LoginInputTitle>이메일</S.LoginInputTitle>
            <A.DefaultInput
              type="text"
              placeholder="이메일을 입력해 주세요."
              maxLength={50}
              name="email"
              {...register("email")}
            />
          </S.LoginInputContainer>
          <S.LoginInputContainer>
            <S.LoginInputTitle>비밀번호</S.LoginInputTitle>
            <A.DefaultInput
              type="password"
              placeholder="비밀번호를 입력해 주세요."
              maxLength={16}
              name="password"
              {...register("password")}
            />
          </S.LoginInputContainer>
          <S.LoginSubList>
            <S.RememberIdBox>
              <input
                type="checkbox"
                id="rememberId"
                style={{ display: "none" }}
                onChange={onChangeCheckBox}
              />

              <S.RememberId htmlFor="rememberId">
                <S.RememberIdCheckBox>
                  {isCheck && <img src="/images/login/id-check.png" alt="" />}
                </S.RememberIdCheckBox>
                <span>아이디 기억하기</span>
              </S.RememberId>
            </S.RememberIdBox>
            <S.FindIdAndPw type="button" onClick={onClickToFindId}>
              아이디 / 비밀번호 찾기
            </S.FindIdAndPw>
          </S.LoginSubList>
          <S.LoginSubmit>로그인</S.LoginSubmit>
        </S.LoginForm>
        <S.SnsLoginTitleBox>
          <S.SnsTitleLine></S.SnsTitleLine>
          <S.SnsTitle>SNS 로그인</S.SnsTitle>
          <S.SnsTitleLine></S.SnsTitleLine>
        </S.SnsLoginTitleBox>
        <S.SnsLoginBtnBox>
          <S.SnsLoginBtn href="https://develop.wetrekking.kr/login/google">
            <img src="/images/login/google-login.png" />
          </S.SnsLoginBtn>
          <S.SnsLoginBtn href="https://develop.wetrekking.kr/login/kakao">
            <img src="/images/login/kakao-login.png" />
          </S.SnsLoginBtn>
          <S.SnsLoginBtn href="https://develop.wetrekking.kr/login/naver">
            <img src="/images/login/naver-login.png" />
          </S.SnsLoginBtn>
        </S.SnsLoginBtnBox>
        <S.JoinToMent>
          아직 회원이 아니신가요? <span onClick={onClickToJoin}>회원가입</span>
        </S.JoinToMent>
      </S.Container>
    </S.Wrapper>
  );
};

export default LoginUi;
