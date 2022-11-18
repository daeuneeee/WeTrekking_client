import { Avatar, AvatarGroup } from "@mui/material";
import PointBox from "../../../commons/pointCharge";
import MyPageNav from "../navigation";
import * as S from "./myinfo.styles";
import { IMyInfoUiProps } from "./myinfo.types";

const MyInfoUi = ({
  userDatas,
  onClickPointModal,
  onClickToReviewWrite,
}: IMyInfoUiProps) => {
  return (
    <S.Wrapper>
      <MyPageNav page="내 정보" />
      <S.ProfileWrapper>
        <S.ProfileBox>
          <S.ProfileBody>
            <Avatar
              alt="Remy Sharp"
              src={`https://storage.googleapis.com/${String(
                userDatas?.fetchUser.profile_img
              )}`}
              className="AvatarImg"
            />
            <S.ProfileName>{userDatas?.fetchUser.name}</S.ProfileName>
            <S.ProfileEmail>{userDatas?.fetchUser.email}</S.ProfileEmail>
            <S.GenderPhoneBox>
              <S.UserGenderPhoneText>
                성별{" "}
                <span>
                  {userDatas?.fetchUser.gender === "male" ? "남성" : "여성"}
                </span>
              </S.UserGenderPhoneText>
              <S.GenderPhoneLine></S.GenderPhoneLine>
              <S.UserGenderPhoneText>
                phone{" "}
                <span>
                  {String(userDatas?.fetchUser.phone).replace(
                    /^(\d{2,3})(\d{3,4})(\d{4})$/,
                    `$1-$2-$3`
                  )}
                </span>
              </S.UserGenderPhoneText>
            </S.GenderPhoneBox>
          </S.ProfileBody>
          <S.ProfilePointBox>
            <S.ProfilePointTitle>Point</S.ProfilePointTitle>
            <S.ProfilePoint>
              {String(userDatas?.fetchUser.point).replaceAll(
                /(\d)(?=(?:\d{3})+(?!\d))/g,
                "$1,"
              )}
              P
            </S.ProfilePoint>
            <S.PointChargeBtn onClick={onClickPointModal}>
              충전
            </S.PointChargeBtn>
          </S.ProfilePointBox>
        </S.ProfileBox>
      </S.ProfileWrapper>
      <S.BannerContainer>
        <S.BannerContents>
          <S.BannerMent>
            <span>다양한 크루를 만나보세요!</span>
          </S.BannerMent>
          <S.GoPoint onClick={onClickPointModal}>
            포인트 충전하기 &gt;{" "}
          </S.GoPoint>
        </S.BannerContents>
      </S.BannerContainer>
      <S.InfoContainer>
        <S.MyMListTitle>갔던 산 리스트</S.MyMListTitle>
        <S.MyMListContainer>
          <S.MyMListBox>
            <S.ReviewBg className="reviewBg">
              <S.MyMListThum></S.MyMListThum>
              <S.MyMListInfoBox>
                <S.ListTitle>설악산 같이 가실?</S.ListTitle>
                <S.ListMountainName>설악산</S.ListMountainName>
                <S.ListMountainDate>
                  22.11.24 <span>|</span> 14:00
                </S.ListMountainDate>
                <S.ListWriterT>모집자</S.ListWriterT>
                <S.ListWriterInfoBox>
                  <S.ListWriterInfoContainer>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                    />
                    <S.ListWriterInfo>
                      <S.ListWriterName>깜장이</S.ListWriterName>
                      <S.ListWriterAgeGender>28 · 남성</S.ListWriterAgeGender>
                    </S.ListWriterInfo>
                  </S.ListWriterInfoContainer>
                  <AvatarGroup max={6} spacing={"small"}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                    />
                    <Avatar
                      alt="Travis Howard"
                      src="/static/images/avatar/2.jpg"
                    />
                    <Avatar
                      alt="Cindy Baker"
                      src="/static/images/avatar/3.jpg"
                    />
                    <Avatar
                      alt="Agnes Walker"
                      src="/static/images/avatar/4.jpg"
                    />
                    <Avatar
                      alt="Trevor Henderson"
                      src="/static/images/avatar/5.jpg"
                    />
                  </AvatarGroup>
                </S.ListWriterInfoBox>
              </S.MyMListInfoBox>
            </S.ReviewBg>
            <S.ReviewWriteBtn
              id="123"
              className="reviewBtn"
              onClick={onClickToReviewWrite}
            >
              리뷰 쓰기
            </S.ReviewWriteBtn>
          </S.MyMListBox>
        </S.MyMListContainer>
      </S.InfoContainer>
      <PointBox />
    </S.Wrapper>
  );
};

export default MyInfoUi;
