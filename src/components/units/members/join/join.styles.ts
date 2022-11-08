import styled from "@emotion/styled";
import { mainColor } from "../../../../commons/styles/color";

export const JoinForm = styled.form`
  width: 100%;
`;

export const JoinEmailBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const JoinPhoneBox = styled(JoinEmailBox)`
  margin-bottom: 2.6rem;
`;

export const EmailInputBox = styled.div`
  width: 100%;
`;
export const EmailSelectBox = styled.select`
  width: 100%;
  height: 5.2rem;
  border: 1px solid #d9d9d9;
  padding: 0 12px;
  border-radius: 4px;
  font-size: 1.6rem;
  font-weight: 400;
  color: #999;
  outline: none;
`;

export const CheckBtn = styled.button`
  width: 100%;
  height: 5.2rem;
  border: 1px solid ${mainColor};
  font-size: 1.6rem;
  font-weight: 700;
  color: ${mainColor};
  background: none;
  cursor: pointer;
  margin: -1rem 0 3rem;
  border-radius: 4px;
`;

export const PhoneInputBox = styled.div`
  width: 30.72%;
`;

export const PhoneAuthBtn = styled(CheckBtn)`
  margin-bottom: 0;
`;

export const GenderSelectBox = styled.div`
  width: 100%;
  height: 52px;
  display: flex;
`;
export const GenderLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  font-size: 1.6rem;
  font-weight: 400;
  color: #999;
  border-top: 1px solid #d9d9d9;
  border-left: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  cursor: pointer;
`;

export const GenderLabel2 = styled(GenderLabel)`
  border-top: 1px solid #d9d9d9;
  border-right: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

export const PhotoUploadBox = styled.label`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  margin-bottom: 6rem;
`;

export const ProfileUploadBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6.8rem;
  height: 6.8rem;
  border-radius: 50%;
  border: 1px solid #d9d9d9;
  background-color: #f6f6f6;
  img {
    width: 2.4rem;
  }
`;

export const ProfileUploadText = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  color: #666;
`;

export const InputFile = styled.input`
  display: none;
`;

export const SubmitJoinBtn = styled.button`
  width: 100%;
  height: 7.2rem;
  border: none;
  background-color: ${mainColor};
  font-size: 1.8rem;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  border-radius: 4px;
  margin-bottom: 10rem;
`;

export const GenderRadio = styled.input`
  display: none;
`;

export const PhoneInput = styled.input`
  display: block;
  width: 100%;
  height: 5.2rem;
  border: 1px solid #d9d9d9;
  padding: 0 12px;
  border-radius: 4px;
  font-size: 1.6rem;
  font-weight: 400;
  color: #999;
  :focus {
    outline-color: ${mainColor};
  }
`;

export const ErrorMsg = styled.p`
  font-size: 13px;
  font-weight: 500;
  color: #f00;
  margin-top: 10px;
`;
