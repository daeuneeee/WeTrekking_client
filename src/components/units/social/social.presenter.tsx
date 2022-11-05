import { mainColor } from "../../../commons/styles/color";
import Input01 from "../../commons/inputs/input-01";
import * as A from "../login/login.styles";
import * as S from "../join/join.styles";
import { ISocialJoinProps } from "./social.types";

const SocialJoinUi = ({
  phoneInput01,
  phoneInput02,
  phoneInput03,
  onChangePhoneInput01,
  onChangePhoneInput02,
  onChangePhoneInput03,
  onChangeGenderCheck,
  isGenderCheck,
  register,
}: ISocialJoinProps) => {
  return (
    <A.Wrapper>
      <A.Container>
        <S.JoinForm>
          <A.LoginTitle>
            We Trekking<span>추가정보 입력</span>
          </A.LoginTitle>
          <A.LoginInputContainer>
            <A.LoginInputTitle>
              닉네임<span>*</span>
            </A.LoginInputTitle>
            <Input01
              type="text"
              placeholder="닉네임을 입력해 주세요."
              maxLength={51}
              name="nickname"
              register={register}
            />
            <S.ErrorMsg></S.ErrorMsg>
          </A.LoginInputContainer>
          <S.CheckBtn type="button">중복확인</S.CheckBtn>
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
              성별<span>*</span>
            </A.LoginInputTitle>
            <S.GenderSelectBox>
              <S.GenderRadio
                type="radio"
                value="male"
                name="gender"
                id="male"
                onChange={onChangeGenderCheck}
                checked={isGenderCheck === "male"}
              />
              <S.GenderRadio
                type="radio"
                value="female"
                name="gender"
                id="female"
                onChange={onChangeGenderCheck}
                checked={isGenderCheck === "female"}
              />
              <S.GenderLabel
                htmlFor="male"
                style={{
                  backgroundColor:
                    isGenderCheck === "male" ? mainColor : "#fff",
                  color: isGenderCheck === "male" ? "#fff" : "#999",
                }}
              >
                남성
              </S.GenderLabel>
              <S.GenderLabel2
                htmlFor="female"
                style={{
                  backgroundColor:
                    isGenderCheck === "female" ? mainColor : "#fff",
                  color: isGenderCheck === "female" ? "#fff" : "#999",
                }}
              >
                여성
              </S.GenderLabel2>
            </S.GenderSelectBox>
            <S.ErrorMsg></S.ErrorMsg>
          </A.LoginInputContainer>
          <S.SubmitJoinBtn>회원가입</S.SubmitJoinBtn>
        </S.JoinForm>
      </A.Container>
    </A.Wrapper>
  );
};

export default SocialJoinUi;
