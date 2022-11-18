import styled from "@emotion/styled";
import { mainColor } from "../../../commons/styles/color";
import { tablet } from "../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
  padding: 10rem 0;
  background-color: #f5f5f5;
`;
export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  @media ${tablet} {
    width: 90%;
    .mobile {
      display: none;
    }
  }
`;

export const ChatContainer = styled.section`
  width: 100%;
  height: 828px;
  display: flex;
  justify-content: space-between;
  @media ${tablet} {
    display: block;
    height: 70vh;
    margin: 0 auto;
    position: relative;
  }
`;

export const ChatFList = styled.div`
  width: 33.33%;
  height: 100%;
  border-radius: 4px;
  padding: 2.5rem 1.5rem;
  border: 1px solid #d9d9d9;
  background-color: #fdfdff;
  overflow-y: auto;
`;

export const ChatFListTitle = styled.h3`
  font-size: 2rem;
  font-weight: 500;
  color: #111;
  margin-bottom: 1.6rem;
`;

export const ChatView = styled.div`
  width: 64.66%;
  height: 100%;
  background-color: #fdfdff;
  overflow-y: auto;
  border-radius: 4px;
  border: 1px solid #d9d9d9;
  @media ${tablet} {
    width: 100%;
  }
`;

export const ChatViewHead = styled.div`
  width: 100%;
  padding: 3rem;
  background-color: #fff;
  display: flex;
  align-items: center;
  gap: 2.4rem;
  border-bottom: 1px solid #dfe0eb;
  .groupAvatar,
  .css-sxh3gq-MuiAvatar-root-MuiAvatarGroup-avatar {
    width: 4.4rem;
    height: 4.4rem;
  }
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
  padding: 3rem;
  overflow-y: auto;
  .chatAvatar {
    width: 5rem;
    height: 5rem;
    margin-top: 0.5rem;
  }
`;

export const Reverse = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

export const ChatViewFoot = styled.div`
  width: 100%;
  padding: 2.4rem 3rem;
`;

export const ChatForm = styled.div`
  width: 100%;
  border: 1px solid ${mainColor};
  padding: 2.2rem 3rem;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  @media ${tablet} {
    width: 95%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 3rem;
  }
`;

export const ChatInput = styled.input`
  width: 84.26%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 1.6rem;
  font-weight: 400;
  color: #111;
  background-color: #fff;
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
  gap: 0.8rem;
  @media ${tablet} {
    width: 100%;
    margin-bottom: 2rem;
  }
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
  margin-bottom: 2rem;
`;

export const GroupChatMsgBox = styled.div`
  padding: 1.8rem 1.4rem;
  border: 1px solid ${mainColor};
  border-radius: 10px;
  font-size: 1.4rem;
  font-weight: 400;
  color: #111;
  margin-bottom: 0.8rem;
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

export const AttendCrewBox = styled.div`
  width: 100%;
  padding: 1.2rem 1.6rem;
  display: flex;
  align-items: center;
  gap: 3.125%;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  overflow-y: auto;
  margin-bottom: 12px;
  .avatar {
    width: 5rem;
    height: 5rem;
  }
`;

export const AttendCrewInfoContainer = styled.div`
  width: 81.25%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const InfoLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const InfoMyRank = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  color: ${mainColor};
  margin-bottom: 0;
`;

export const InfoMyName = styled.p`
  font-size: 1.6rem;
  font-weight: 500;
  color: #111;
  margin-bottom: 0;
`;

export const InfoAgeName = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  color: #999;
  margin-bottom: 0;
`;
