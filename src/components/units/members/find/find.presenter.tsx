import { mainColor } from "../../../../commons/styles/color";
import Input01 from "../../../commons/inputs/input-01";
import * as A from "../login/login.styles";
import * as S from "../join/join.styles";
import * as D from "../find/find.styles";
import { IFindUiProps } from "./find.types";

const FindUi = ({
  register,
  findId,
  phoneInput01,
  phoneInput02,
  phoneInput03,
  onChangePhoneInput01,
  onChangePhoneInput02,
  onChangePhoneInput03,
  handleSubmit,
  formState,
  onClickToFindId,
  onClickToFindPw,
  onClickToJoin,
}: IFindUiProps) => {
  return (
    <A.Wrapper>
      <A.Container>
        <D.FindTabContainer>
          <D.FindTabLeft
            style={{
              border: findId ? `1px solid ${mainColor}` : "",
              color: findId ? `${mainColor}` : "",
            }}
            onClick={onClickToFindId}
          >
            아이디 찾기
          </D.FindTabLeft>
          <D.FindTabRight
            style={{
              border: findId === false ? `1px solid ${mainColor}` : "",
              color: findId === false ? `${mainColor}` : "",
            }}
            onClick={onClickToFindPw}
          >
            비밀번호 찾기
          </D.FindTabRight>
        </D.FindTabContainer>
        <S.JoinForm>
          <A.LoginTitle>
            We Trekking<span>{findId ? "아이디 찾기" : "비밀번호 찾기"}</span>
          </A.LoginTitle>
          <A.LoginInputContainer>
            <A.LoginInputTitle>
              이름<span>*</span>
            </A.LoginInputTitle>
            <Input01
              type="text"
              placeholder="이름을 입력해 주세요."
              maxLength={51}
              name="name"
              register={register}
            />
            <S.ErrorMsg>{formState.errors.name?.message}</S.ErrorMsg>
          </A.LoginInputContainer>
          {findId && (
            <A.LoginInputContainer>
              <A.LoginInputTitle>
                아이디<span>*</span>
              </A.LoginInputTitle>
              <Input01
                type="text"
                placeholder="아이디를 입력해 주세요."
                maxLength={51}
                name="email"
                register={register}
              />
              <S.ErrorMsg>{formState.errors.email?.message}</S.ErrorMsg>
            </A.LoginInputContainer>
          )}
          <A.LoginInputContainer>
            <A.LoginInputTitle>
              휴대전화<span>*</span>
            </A.LoginInputTitle>
            <S.JoinPhoneBox>
              <S.PhoneInputBox>
                <S.EmailSelectBox
                  ref={phoneInput01}
                  onChange={onChangePhoneInput01}
                >
                  <option value="">선택</option>
                  <option value="010">010</option>
                  <option value="011">011</option>
                  <option value="016">016</option>
                </S.EmailSelectBox>
              </S.PhoneInputBox>
              <span>-</span>
              <S.PhoneInputBox>
                <S.PhoneInput
                  type="text"
                  placeholder="****"
                  maxLength={4}
                  ref={phoneInput02}
                  onChange={onChangePhoneInput02}
                />
              </S.PhoneInputBox>
              <span>-</span>
              <S.PhoneInputBox>
                <S.PhoneInput
                  type="text"
                  placeholder="****"
                  maxLength={4}
                  ref={phoneInput03}
                  onChange={onChangePhoneInput03}
                />
              </S.PhoneInputBox>
            </S.JoinPhoneBox>
            <S.PhoneAuthBtn type="button">인증번호 받기</S.PhoneAuthBtn>
          </A.LoginInputContainer>
          <A.LoginInputContainer>
            <A.LoginInputTitle>
              인증번호 6자리 숫자 입력<span>*</span>
            </A.LoginInputTitle>
            <Input01
              type="text"
              placeholder="인증번호를 입력해 주세요."
              maxLength={6}
              name="phoneToken"
              register={register}
            />
            <S.ErrorMsg>{formState.errors.name?.message}</S.ErrorMsg>
          </A.LoginInputContainer>
          <S.SubmitJoinBtn>확인</S.SubmitJoinBtn>
        </S.JoinForm>
        <A.JoinToMent>
          아직 회원이 아니신가요? <span onClick={onClickToJoin}>회원가입</span>
        </A.JoinToMent>
      </A.Container>
    </A.Wrapper>
  );
};

export default FindUi;
