import styled from "@emotion/styled";
import { mainColor } from "../../../commons/styles/color";

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
  margin-bottom: 26px;
`;

export const EmailInputBox = styled.div`
  width: 46.875%;
`;
export const EmailSelectBox = styled.select`
  width: 100%;
  height: 52px;
  border: 1px solid #d9d9d9;
  padding: 0 12px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 400;
  color: #999;
  outline: none;
`;

export const CheckBtn = styled.button`
  width: 100%;
  height: 52px;
  border: 1px solid ${mainColor};
  font-size: 16px;
  font-weight: 700;
  color: ${mainColor};
  background: none;
  cursor: pointer;
  margin: -10px 0 30px;
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
  border: 1px solid #d9d9d9;
  border-radius: 4px;
`;
export const GenderLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  font-size: 16px;
  font-weight: 400;
  color: #999;
  cursor: pointer;
  &:first-of-type {
    border-right: 1px solid #d9d9d9;
  }
`;

export const PhotoUploadBox = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  margin-bottom: 60px;
`;

export const ProfileUploadBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 68px;
  height: 68px;
  border-radius: 50%;
  border: 1px solid #d9d9d9;
  background-color: #f6f6f6;
`;

export const ProfileUploadText = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: #666;
`;

export const InputFile = styled.input`
  display: none;
`;

export const SubmitJoinBtn = styled.button`
  width: 100%;
  height: 72px;
  border: none;
  background-color: ${mainColor};
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
  border-radius: 4px;
  margin-bottom: 100px;
`;

export const GenderRadio = styled.input`
  display: none;
`;

export const PhoneInput = styled.input`
  display: block;
  width: 100%;
  height: 52px;
  border: 1px solid #d9d9d9;
  padding: 0 12px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 400;
  color: #999;
  outline: none;
`;
