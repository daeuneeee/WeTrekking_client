import * as S from "./chat.styles";
import { AvatarGroup, Avatar } from "@mui/material";
import { IChatUiProps } from "./chat.types";
import { IQuery } from "../../../commons/types/generated/types";
import { useRecoilState } from "recoil";
import { userInfo } from "../../../store";
import { getAge } from "../../../commons/utils/getAge";

const ChatUi = ({
  onChangeInput,
  onClickSendBtn,
  data,
  chatInput,
  crewDetail,
  crewUsers,
}: IChatUiProps) => {
  const [userDatas] = useRecoilState<Pick<IQuery, "fetchUser">>(userInfo);

  return (
    <S.Wrapper>
      <S.Container>
        <S.ChatContainer>
          <S.ChatFList className="mobile">
            <S.ChatFListTitle>참가중인 크루원</S.ChatFListTitle>
            {crewUsers?.fetchChatUsers?.map((el: any) => {
              return (
                <S.AttendCrewBox key={el.user.id}>
                  <Avatar
                    alt="Remy Sharp"
                    src={`https://storage.googleapis.com/${String(
                      el.user.profile_img
                    )}`}
                    className="avatar"
                  />
                  <S.AttendCrewInfoContainer>
                    <S.InfoLeft>
                      {el.user.name === userDatas?.fetchUser.name ? (
                        <S.InfoMyRank>me</S.InfoMyRank>
                      ) : null}

                      <S.InfoMyName>{el.user.name}</S.InfoMyName>
                    </S.InfoLeft>
                    <S.InfoAgeName>
                      {getAge(el.user.birth)} ·{" "}
                      {el.user.gender === "male" ? "남성" : "여성"}
                    </S.InfoAgeName>
                  </S.AttendCrewInfoContainer>
                </S.AttendCrewBox>
              );
            })}
          </S.ChatFList>
          <S.ChatView>
            <S.ChatViewHead>
              <AvatarGroup max={3}>
                {crewUsers?.fetchChatUsers?.map((el: any) => {
                  return (
                    <Avatar
                      alt="유저 프로필 이미지"
                      src={`https://storage.googleapis.com/${String(
                        el.user.profile_img
                      )}`}
                      className="groupAvatar"
                      key={el.user.id}
                    />
                  );
                })}
              </AvatarGroup>
              <S.ChatTitleAndUser>
                <S.ChattingTitle>
                  {crewDetail?.fetchCrewBoard.title}
                </S.ChattingTitle>
                <S.ChattingUser>
                  {userDatas?.fetchUser.nickname}님 외 3명
                </S.ChattingUser>
              </S.ChatTitleAndUser>
            </S.ChatViewHead>
            <S.ChatViewBody>
              {data?.fetchLogs.map((el: any) => {
                return (
                  <>
                    {el.name !== userDatas?.fetchUser.name ? (
                      <S.ChatGroup>
                        <S.ProfileChatBox>
                          <Avatar
                            alt="Remy Sharp"
                            src={`https://storage.googleapis.com/${String(
                              userDatas?.fetchUser.profile_img
                            )}`}
                            className="chatAvatar"
                          />
                          <S.ChatMsgContainer>
                            <S.GroupChatMsgBox>{el.message}</S.GroupChatMsgBox>
                            <S.ChatMstTime>8:00 PM</S.ChatMstTime>
                          </S.ChatMsgContainer>
                        </S.ProfileChatBox>
                      </S.ChatGroup>
                    ) : (
                      <S.ChatMy>
                        <S.MyProfileChatBox>
                          <Avatar
                            alt="Remy Sharp"
                            src={`https://storage.googleapis.com/${String(
                              userDatas?.fetchUser.profile_img
                            )}`}
                            className="chatAvatar"
                          />
                          <S.MyChatMsgContainer>
                            <S.MyGroupChatMsgBox>
                              {el.message}
                            </S.MyGroupChatMsgBox>
                            <S.ChatMstTime>8:00 PM</S.ChatMstTime>
                          </S.MyChatMsgContainer>
                        </S.MyProfileChatBox>
                      </S.ChatMy>
                    )}
                  </>
                );
              })}
            </S.ChatViewBody>
            <S.ChatViewFoot>
              <S.ChatForm>
                <S.ChatInput
                  type="text"
                  placeholder="채팅을 입력해주세요."
                  onChange={onChangeInput}
                  ref={chatInput}
                  onKeyPress={(event) => {
                    if (event.key === "Enter") {
                      onClickSendBtn();
                    }
                  }}
                />
                <S.ChatBtn type="button" onClick={onClickSendBtn}>
                  전송
                </S.ChatBtn>
              </S.ChatForm>
            </S.ChatViewFoot>
          </S.ChatView>
        </S.ChatContainer>
      </S.Container>
    </S.Wrapper>
  );
};

export default ChatUi;
