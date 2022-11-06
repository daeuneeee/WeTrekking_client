import * as S from "./chat.styles";
import { AvatarGroup, Avatar } from "@mui/material";

const ChatUi = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.ChatContainer>
          <S.ChatFList>
            <S.ChatFListTitle>참가중인 크루원</S.ChatFListTitle>
          </S.ChatFList>
          <S.ChatView>
            <S.ChatViewHead>
              <AvatarGroup max={3}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                <Avatar
                  alt="Trevor Henderson"
                  src="/static/images/avatar/5.jpg"
                />
              </AvatarGroup>
              <S.ChatTitleAndUser>
                <S.ChattingTitle>채팅 제목이 들어갑니다...</S.ChattingTitle>
                <S.ChattingUser>
                  춘딩딩, 땅오, 참가자, 참가자 외 2명
                </S.ChattingUser>
              </S.ChatTitleAndUser>
            </S.ChatViewHead>
            <S.ChatViewBody>
              <S.ChatGroup>
                <S.ProfileChatBox>
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 56, height: 56 }}
                  />
                  <S.ChatMsgContainer>
                    <S.GroupChatMsgBox>안녕하세요 ㅎㅎ</S.GroupChatMsgBox>
                    <S.ChatMstTime>8:00 PM</S.ChatMstTime>
                  </S.ChatMsgContainer>
                </S.ProfileChatBox>
              </S.ChatGroup>
              <S.ChatGroup>
                <S.ProfileChatBox>
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 56, height: 56 }}
                  />
                  <S.ChatMsgContainer>
                    <S.GroupChatMsgBox>안녕하세요 ㅎㅎ</S.GroupChatMsgBox>
                    <S.ChatMstTime>8:00 PM</S.ChatMstTime>
                  </S.ChatMsgContainer>
                </S.ProfileChatBox>
              </S.ChatGroup>
              <S.ChatMy>
                <S.MyProfileChatBox>
                  <Avatar
                    alt="Remy Sharp"
                    src="/static/images/avatar/1.jpg"
                    sx={{ width: 56, height: 56 }}
                  />
                  <S.MyChatMsgContainer>
                    <S.MyGroupChatMsgBox>
                      다들 어디쯤 오셨나요??
                    </S.MyGroupChatMsgBox>
                    <S.ChatMstTime>8:00 PM</S.ChatMstTime>
                  </S.MyChatMsgContainer>
                </S.MyProfileChatBox>
              </S.ChatMy>
            </S.ChatViewBody>
            <S.ChatViewFoot>
              <S.ChatForm>
                <S.ChatInput type="text" placeholder="채팅을 입력해주세요." />
                <S.ChatBtn>전송</S.ChatBtn>
              </S.ChatForm>
            </S.ChatViewFoot>
          </S.ChatView>
        </S.ChatContainer>
      </S.Container>
    </S.Wrapper>
  );
};

export default ChatUi;
