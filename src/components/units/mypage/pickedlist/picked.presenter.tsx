import * as S from "./picked.styles";
import * as A from "../../crews/list/crewList.styles";
import PickFalseSvg from "../../../commons/svg/pickFalse";
import { Avatar, AvatarGroup } from "@mui/material";
import MyPageNav from "../navigation";
import { IPickedListUiProps } from "./picked.types";

const PickedListUi = ({ data }: IPickedListUiProps) => {
  return (
    <S.Wrapper>
      <MyPageNav page="찜 리스트" />
      <S.Container>
        <S.PickedListContainer>
          <A.ListBox>
            <A.ListHeader>
              <A.ListInform>
                <Avatar
                  alt="Crew Image"
                  src="/images/commons/profile-img.png"
                  sx={{ width: 32, height: 32 }}
                ></Avatar>
                <A.ListNickName>춘딩딩</A.ListNickName>
              </A.ListInform>
              <A.ListPick>
                <PickFalseSvg />
              </A.ListPick>
            </A.ListHeader>
            <A.ListContainer>
              <A.ListThumbnail></A.ListThumbnail>
              <A.ListBody>
                <A.ListTitleBox>
                  <A.ListTitle>제목이 들어갑니다.</A.ListTitle>
                  <A.ListCreatedAt>2022.10.31</A.ListCreatedAt>
                </A.ListTitleBox>
                <A.ListCrewsBox>
                  {/* <A.ListCrewsImg></A.ListCrewsImg> */}
                  <AvatarGroup max={4}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                      sx={{ width: 24, height: 24 }}
                    />
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                      sx={{ width: 24, height: 24 }}
                    />
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                      sx={{ width: 24, height: 24 }}
                    />
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                      sx={{ width: 24, height: 24 }}
                    />
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                      sx={{ width: 24, height: 24 }}
                    />
                  </AvatarGroup>
                  <A.ListCrewsNum>모집인원 3/15</A.ListCrewsNum>
                </A.ListCrewsBox>
              </A.ListBody>
              <A.ListFooter>
                <A.ListLocationBox>
                  <A.Location>설악산</A.Location>
                </A.ListLocationBox>
                <A.ListTimeAndDayBox>
                  <A.Day>2022.01.01</A.Day>
                  <A.TimePartition></A.TimePartition>
                  <A.Time>10:00 AM</A.Time>
                </A.ListTimeAndDayBox>
              </A.ListFooter>
            </A.ListContainer>
          </A.ListBox>
        </S.PickedListContainer>
        <S.MoreBtn>더 보기</S.MoreBtn>
      </S.Container>
    </S.Wrapper>
  );
};

export default PickedListUi;
