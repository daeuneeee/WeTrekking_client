import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
`;
export const Container = styled.div`
  width: 1200px;
  height: 650px;
  margin: 100px auto;
  display: flex;
`;

export const ChatFList = styled.div`
  width: 30%;
  height: 100%;
  background-color: red;
`;
export const ChatView = styled.div`
  width: 70%;
  height: 100%;
  background-color: orange;
  padding: 30px;
  overflow-y: auto;
`;
export const ProfileChatBox = styled.div`
  display: flex;
  gap: 5px;
`;
export const ProfileImg = styled.div`
  width: 50px;
  height: 50px;
  background-color: gray;
  border-radius: 50%;
`;

export const UserNameChat = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 8px;
`;

export const MyChatBox = styled(UserNameChat)`
  align-items: flex-end;

  & > p:first-of-type {
    padding-right: 5px;
  }
`;

export const UserName = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  color: #111;
  padding-left: 5px;
`;

export const ChatBox = styled.div`
  padding: 10px 0 0 5px;
`;

export const ChatDes = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  color: #111;
  margin-bottom: 5px;
`;

export const ChatGroup = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ChatMy = styled.div`
  display: flex;
  justify-content: flex-end;
`;
