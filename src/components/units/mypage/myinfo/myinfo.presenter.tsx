import { Avatar } from "@mui/material";
import { getAge } from "../../../../commons/utils/getAge";
import PointBox from "../../../commons/pointCharge";
import MyPageNav from "../navigation";
import * as S from "./myinfo.styles";
import { IMyInfoUiProps } from "./myinfo.types";

const MyInfoUi = ({
  userDatas,
  onClickPointModal,
  onClickToReviewWrite,
  data,
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
          {data?.fetchVisitList.map((el) => {
            return (
              <S.MyMListBox key={el.id}>
                <S.ReviewBg className="reviewBg">
                  <S.MyMListThum
                    style={{
                      backgroundImage: `url(https://storage.googleapis.com/${el.crewBoard.thumbnail})`,
                    }}
                  ></S.MyMListThum>
                  <S.MyMListInfoBox>
                    <S.ListTitle>{el.crewBoard.title}</S.ListTitle>
                    <S.ListMountainName>
                      {el.crewBoard.mountain.mountain}
                    </S.ListMountainName>
                    <S.ListMountainDate>
                      {el.crewBoard.date} <span>|</span> {el.crewBoard.dateTime}
                    </S.ListMountainDate>
                    <S.ListWriterT>모집자</S.ListWriterT>
                    <S.ListWriterInfoBox>
                      <S.ListWriterInfoContainer>
                        <Avatar
                          alt="프로필 이미지"
                          src={`https://storage.googleapis.com/${String(
                            el.crewBoard.user.profile_img
                          )}`}
                        />
                        <S.ListWriterInfo>
                          <S.ListWriterName>
                            {el.crewBoard.user.nickname}
                          </S.ListWriterName>
                          <S.ListWriterAgeGender>
                            {getAge(el.crewBoard.user.birth)} ·{" "}
                            {el.crewBoard.user.gender === "male"
                              ? "남성"
                              : "여성"}
                          </S.ListWriterAgeGender>
                        </S.ListWriterInfo>
                      </S.ListWriterInfoContainer>
                      {/* <AvatarGroup max={6} spacing={"small"}>
                        {data?.fetchVisitList.map((el) => {
                          return (
                            <Avatar
                              alt="Remy Sharp"
                              src={`https://storage.googleapis.com/$`}
                              key={el.user.id}
                            />
                          );
                        })}
                      </AvatarGroup> */}
                    </S.ListWriterInfoBox>
                  </S.MyMListInfoBox>
                </S.ReviewBg>
                <S.ReviewWriteBtn
                  id={el.crewBoard.id}
                  className={`${el.id} reviewBtn`}
                  onClick={onClickToReviewWrite}
                >
                  리뷰 쓰기
                </S.ReviewWriteBtn>
              </S.MyMListBox>
            );
          })}
        </S.MyMListContainer>
      </S.InfoContainer>
      <PointBox />
    </S.Wrapper>
  );
};

export default MyInfoUi;
