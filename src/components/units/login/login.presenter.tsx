import Input01 from "../../commons/inputs/input-01";
import * as S from "./login.styles";
import { ILoginUiProps } from "./login.types";
const LoginUi = ({
  onChangeCheckBox,
  isCheck,
  onClickToJoin,
  register,
  handleSubmit,
  onClickLogin,
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
            <Input01
              type="text"
              placeholder="이메일을 입력해 주세요."
              maxLength={50}
              name="email"
              register={register}
            />
          </S.LoginInputContainer>
          <S.LoginInputContainer>
            <S.LoginInputTitle>비밀번호</S.LoginInputTitle>
            <Input01
              type="password"
              placeholder="비밀번호를 입력해 주세요."
              maxLength={16}
              name="password"
              register={register}
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
                  {isCheck && <img src="/images/login/idCheck.png" alt="" />}
                </S.RememberIdCheckBox>
                <span>아이디 기억하기</span>
              </S.RememberId>
            </S.RememberIdBox>
            <S.FindIdAndPw type="button">아이디 / 비밀번호 찾기</S.FindIdAndPw>
          </S.LoginSubList>
          <S.LoginSubmit>로그인</S.LoginSubmit>
        </S.LoginForm>
        <S.SnsLoginTitleBox>
          <S.SnsTitleLine></S.SnsTitleLine>
          <S.SnsTitle>SNS 로그인</S.SnsTitle>
          <S.SnsTitleLine></S.SnsTitleLine>
        </S.SnsLoginTitleBox>
        <S.SnsLoginBtnBox>
          <S.SnsLoginBtn>
            <img src="/images/login/googleLogin.png" />
          </S.SnsLoginBtn>
          <S.SnsLoginBtn>
            <img src="/images/login/kakaoLogin.png" />
          </S.SnsLoginBtn>
          <S.SnsLoginBtn>
            <img src="/images/login/naverLogin.png" />
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
