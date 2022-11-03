import { mainColor } from "../../../commons/styles/color";
import Input01 from "../../commons/inputs/input-01";
import * as A from "../login/login.styles";
import * as S from "./join.styles";
import { IJoinUiProps } from "./join.types";

const JoinUi = ({
  onChangeGenderCheck,
  isGenderCheck,
  phoneInput01,
  phoneInput02,
  phoneInput03,
  onChangePhoneInput01,
  onChangePhoneInput02,
  onChangePhoneInput03,
  onChangeEmail01,
  onChangeEmail02,
  register,
  handleSubmit,
  onClickJoinSubmit,
  formState,
}: IJoinUiProps) => {
  return (
    <A.Wrapper>
      <A.Container>
        <S.JoinForm onSubmit={handleSubmit(onClickJoinSubmit)}>
          <A.LoginTitle>
            We Trekking<span>회원가입</span>
          </A.LoginTitle>
          <A.LoginInputContainer>
            <A.LoginInputTitle>
              이메일<span>*</span>
            </A.LoginInputTitle>
            <S.JoinEmailBox>
              <S.EmailInputBox>
                <Input01
                  type="text"
                  placeholder="이메일을 입력해 주세요."
                  maxLength={50}
                  name="email"
                  register={register}
                />
              </S.EmailInputBox>
              <span>@</span>
              <S.EmailInputBox>
                <S.EmailSelectBox>
                  <option value="">선택</option>
                  <option value="@gmail.com">gmail.com</option>
                  <option value="@naver.com">naver.com</option>
                  <option value="@daum.net">daum.net</option>
                </S.EmailSelectBox>
              </S.EmailInputBox>
            </S.JoinEmailBox>
            <S.ErrorMsg>{formState.errors.email?.message}</S.ErrorMsg>
          </A.LoginInputContainer>
          <S.CheckBtn>중복확인</S.CheckBtn>
          <A.LoginInputContainer>
            <A.LoginInputTitle>
              비밀번호<span>*</span>
            </A.LoginInputTitle>
            <Input01
              type="password"
              placeholder="비밀번호를 입력해 주세요."
              maxLength={20}
              name="password"
              register={register}
            />
            <S.ErrorMsg>{formState.errors.password?.message}</S.ErrorMsg>
          </A.LoginInputContainer>
          <A.LoginInputContainer>
            <A.LoginInputTitle>
              비밀번호 확인<span>*</span>
            </A.LoginInputTitle>
            <Input01
              type="password"
              placeholder="비밀번호를 다시 입력해 주세요."
              maxLength={20}
              name="password2"
              register={register}
            />
            <S.ErrorMsg>{formState.errors.password?.message}</S.ErrorMsg>
            <S.ErrorMsg>{formState.errors.password2?.message}</S.ErrorMsg>
          </A.LoginInputContainer>
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
            <S.ErrorMsg>{formState.errors.nickname?.message}</S.ErrorMsg>
          </A.LoginInputContainer>
          <S.CheckBtn>중복확인</S.CheckBtn>
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
            <S.PhoneAuthBtn>인증번호 받기</S.PhoneAuthBtn>
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
              <S.GenderLabel
                htmlFor="female"
                style={{
                  backgroundColor:
                    isGenderCheck === "female" ? mainColor : "#fff",
                  color: isGenderCheck === "female" ? "#fff" : "#999",
                }}
              >
                여성
              </S.GenderLabel>
            </S.GenderSelectBox>
            <S.ErrorMsg>{formState.errors.gender?.message}</S.ErrorMsg>
          </A.LoginInputContainer>
          <A.LoginInputContainer>
            <A.LoginInputTitle>사진</A.LoginInputTitle>
            <S.InputFile type="file" id="profilePhoto" />
            <S.PhotoUploadBox htmlFor="profilePhoto">
              <S.ProfileUploadBtn>
                <img src="/images/join/photo-upload.png" alt="" />
              </S.ProfileUploadBtn>
              <S.ProfileUploadText>사진을 선택해 주세요</S.ProfileUploadText>
            </S.PhotoUploadBox>
          </A.LoginInputContainer>
          <S.SubmitJoinBtn>회원가입</S.SubmitJoinBtn>
        </S.JoinForm>
      </A.Container>
    </A.Wrapper>
  );
};

export default JoinUi;
