import styled from "@emotion/styled";
import { mainColor } from "../../../commons/styles/color";

export const Wrapper = styled.div`
  width: 100%;
  padding: 100px 0;
  background-color: #f5f5f5;
`;
export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

export const ChatContainer = styled.section`
  width: 100%;
  height: 796px;
  display: flex;
  justify-content: space-between;
`;

export const ChatFList = styled.div`
  width: 33.33%;
  height: 100%;
  border-radius: 4px;
  padding: 25px 15px;
  border: 1px solid #d9d9d9;
  background-color: #fdfdff;
`;

export const ChatFListTitle = styled.h3`
  font-size: 2rem;
  font-weight: 500;
  color: #111;
`;

export const ChatView = styled.div`
  width: 64.66%;
  height: 100%;
  background-color: #fdfdff;
  overflow-y: auto;
  border-radius: 4px;
  border: 1px solid #d9d9d9;
`;

export const ChatViewHead = styled.div`
  width: 100%;
  height: 12.81%;
  padding: 30px;
  background-color: #fff;
  display: flex;
  align-items: center;
  gap: 24px;
  border-bottom: 1px solid #dfe0eb;
`;

export const ChatTitleAndUser = styled.div``;

export const ChattingTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 700;
  color: #111;
  margin-bottom: 5px;
`;

export const ChattingUser = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  color: #999;
`;

export const ChatViewBody = styled.div`
  width: 100%;
  height: 73.36%;
  padding: 30px;
  overflow-y: auto;
`;

export const ChatViewFoot = styled.div`
  width: 100%;
  height: 13.8%;
  padding: 24px 30px;
`;

export const ChatForm = styled.form`
  width: 100%;
  height: 100%;
  border: 1px solid ${mainColor};
  padding: 22px 30px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ChatInput = styled.input`
  width: 84.26%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 1.6rem;
  font-weight: 400;
  color: #111;
  ::placeholder {
    color: #999;
  }
`;

export const ChatBtn = styled.button`
  font-size: 1.6rem;
  font-weight: 500;
  color: ${mainColor};
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
`;

export const ProfileChatBox = styled.div`
  width: 50%;
  display: flex;
  gap: 8px;
`;
export const ProfileImg = styled.div`
  width: 50px;
  height: 50px;
  background-color: gray;
  border-radius: 50%;
`;

export const ChatGroup = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ChatMy = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ChatMsgContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const GroupChatMsgBox = styled.div`
  padding: 18px 14px;
  border: 1px solid ${mainColor};
  border-radius: 10px;
  font-size: 1.4rem;
  font-weight: 400;
  color: #111;
  margin-bottom: 8px;
  line-height: 1.4;
`;

export const ChatMstTime = styled.p`
  font-size: 1.2rem;
  font-weight: 400;
  color: #333;
`;

export const MyProfileChatBox = styled(ProfileChatBox)`
  flex-direction: row-reverse;
`;

export const MyChatMsgContainer = styled(ChatMsgContainer)`
  align-items: flex-end;
`;

export const MyGroupChatMsgBox = styled(GroupChatMsgBox)`
  background-color: ${mainColor};
  color: #fff;
`;
