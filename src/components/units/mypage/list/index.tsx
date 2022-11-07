import * as A from "../uploadlist/uploadlist.styles";
import * as S from "../applylist/applylist.styles";
import { Avatar } from "@mui/material";
import { useState } from "react";

const UList = () => {
  const [isActive, setIsActive] = useState(false);

  const onClickUserActive = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <S.ContentUl>
      <S.ListLiNum>1</S.ListLiNum>
      <S.ListLiMountain>백두산</S.ListLiMountain>
      <S.ListLiTitle>
        <a>백두산 가실분 구합니다.</a>
      </S.ListLiTitle>
      <S.ListLiSign>
        <A.UserViewBtn onClick={onClickUserActive}>신청자 보기</A.UserViewBtn>
        {isActive && (
          <A.UserModal>
            <A.UserModalContainer>
              <A.ModalTitle>
                신청자 <span>11명</span>
              </A.ModalTitle>
              <A.UserListContainer>
                <A.UserListBox>
                  <A.UserProfileInfoBox>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                      sx={{ width: 50, height: 50 }}
                    />
                    <A.UserProfileInfo>
                      <A.UserName>땅오</A.UserName>
                      <A.UserAgeGender>26 · 남성</A.UserAgeGender>
                    </A.UserProfileInfo>
                  </A.UserProfileInfoBox>
                  <A.UserBtnBox>
                    <A.UserCancleBtn>거절</A.UserCancleBtn>
                    <A.UserOkBtn>수락</A.UserOkBtn>
                  </A.UserBtnBox>
                </A.UserListBox>
                <A.UserListBox>
                  <A.UserProfileInfoBox>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                      sx={{ width: 50, height: 50 }}
                    />
                    <A.UserProfileInfo>
                      <A.UserName>땅오</A.UserName>
                      <A.UserAgeGender>26 · 남성</A.UserAgeGender>
                    </A.UserProfileInfo>
                  </A.UserProfileInfoBox>
                  <A.UserBtnBox>
                    <A.UserCancleBtn>거절</A.UserCancleBtn>
                    <A.UserOkBtn>수락</A.UserOkBtn>
                  </A.UserBtnBox>
                </A.UserListBox>
                <A.UserListBox>
                  <A.UserProfileInfoBox>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                      sx={{ width: 50, height: 50 }}
                    />
                    <A.UserProfileInfo>
                      <A.UserName>땅오</A.UserName>
                      <A.UserAgeGender>26 · 남성</A.UserAgeGender>
                    </A.UserProfileInfo>
                  </A.UserProfileInfoBox>
                  <A.UserBtnBox>
                    <A.UserCancleBtn>거절</A.UserCancleBtn>
                    <A.UserOkBtn>수락</A.UserOkBtn>
                  </A.UserBtnBox>
                </A.UserListBox>
                <A.UserListBox>
                  <A.UserProfileInfoBox>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                      sx={{ width: 50, height: 50 }}
                    />
                    <A.UserProfileInfo>
                      <A.UserName>땅오</A.UserName>
                      <A.UserAgeGender>26 · 남성</A.UserAgeGender>
                    </A.UserProfileInfo>
                  </A.UserProfileInfoBox>
                  <A.UserBtnBox>
                    <A.UserCancleBtn>거절</A.UserCancleBtn>
                    <A.UserOkBtn>수락</A.UserOkBtn>
                  </A.UserBtnBox>
                </A.UserListBox>
                <A.UserListBox>
                  <A.UserProfileInfoBox>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                      sx={{ width: 50, height: 50 }}
                    />
                    <A.UserProfileInfo>
                      <A.UserName>땅오</A.UserName>
                      <A.UserAgeGender>26 · 남성</A.UserAgeGender>
                    </A.UserProfileInfo>
                  </A.UserProfileInfoBox>
                  <A.UserBtnBox>
                    <A.UserCancleBtn>거절</A.UserCancleBtn>
                    <A.UserOkBtn>수락</A.UserOkBtn>
                  </A.UserBtnBox>
                </A.UserListBox>
                <A.UserListBox>
                  <A.UserProfileInfoBox>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                      sx={{ width: 50, height: 50 }}
                    />
                    <A.UserProfileInfo>
                      <A.UserName>땅오</A.UserName>
                      <A.UserAgeGender>26 · 남성</A.UserAgeGender>
                    </A.UserProfileInfo>
                  </A.UserProfileInfoBox>
                  <A.UserBtnBox>
                    <A.UserCancleBtn>거절</A.UserCancleBtn>
                    <A.UserOkBtn>수락</A.UserOkBtn>
                  </A.UserBtnBox>
                </A.UserListBox>
                <A.UserListBox>
                  <A.UserProfileInfoBox>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                      sx={{ width: 50, height: 50 }}
                    />
                    <A.UserProfileInfo>
                      <A.UserName>땅오</A.UserName>
                      <A.UserAgeGender>26 · 남성</A.UserAgeGender>
                    </A.UserProfileInfo>
                  </A.UserProfileInfoBox>
                  <A.UserBtnBox>
                    <A.UserCancleBtn>거절</A.UserCancleBtn>
                    <A.UserOkBtn>수락</A.UserOkBtn>
                  </A.UserBtnBox>
                </A.UserListBox>
              </A.UserListContainer>
              <A.ModalCancleBtn onClick={onClickUserActive}>
                닫기
              </A.ModalCancleBtn>
            </A.UserModalContainer>
          </A.UserModal>
        )}
      </S.ListLiSign>
      <S.ListLiCancle>
        <S.CancleBtn>
          <S.CancleMent>취소하기</S.CancleMent>
        </S.CancleBtn>
      </S.ListLiCancle>
    </S.ContentUl>
  );
};

export default UList;
