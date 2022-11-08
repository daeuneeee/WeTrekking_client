import styled from "@emotion/styled";
import { mainColor } from "../../../../commons/styles/color";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  width: 1200px;
  margin: 80px auto 100px;
`;

export const UserViewBtn = styled.button`
  width: 96px;
  padding: 0.8rem 0;
  border: 1px solid ${mainColor};
  background-color: ${mainColor};
  border-radius: 4px;
  font-size: 1.6rem;
  font-weight: 400;
  color: #fff;
  text-align: center;
  margin: 0 auto;
  cursor: pointer;
`;

export const UserModal = styled.div`
  width: 320px;
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  padding: 24px 0;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  background-color: #fff;
`;

export const ModalTitle = styled.h4`
  font-size: 1.6rem;
  font-weight: 500;
  color: #111;
  text-align: center;
  margin-bottom: 2.4rem;
  span {
    color: ${mainColor};
  }
`;

export const UserModalContainer = styled.div``;

export const UserListContainer = styled.div`
  width: 100%;
  height: 260px;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  overflow-y: auto;
  padding: 0 24px;
`;

export const UserListBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserProfileInfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;

export const UserProfileInfo = styled.div``;

export const UserName = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  color: #111;
  margin-bottom: 0;
  text-align: left;
`;

export const UserAgeGender = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
  color: #999;
  margin-bottom: 0;
`;

export const UserBtnBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const UserCancelBtn = styled.button`
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: 500;
  color: #999;
`;

export const UserOkBtn = styled(UserCancelBtn)`
  color: ${mainColor};
`;

export const ModalCancelBtn = styled.button`
  display: block;
  margin: 25px auto 0;
  width: 65px;
  padding: 9px 0;
  background-color: ${mainColor};
  font-size: 1.4rem;
  font-weight: 400;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
`;
