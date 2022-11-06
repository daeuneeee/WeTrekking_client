import { Avatar } from "@mui/material";
import PickTrueSvg from "../../../commons/svg/pickTrue";
import CrewCommentWrite from "../../crewComment/write";
import * as S from "./crewDetail.styles";

const CrewDetailUi = () => {
  return (
    <>
      <S.Wrapper>
        <S.Header>
          <S.ImgBox>
            <S.MainImg></S.MainImg>
            <S.SubImgBox>
              <S.SubImg></S.SubImg>
              <S.SubImg></S.SubImg>
              <S.SubImg></S.SubImg>
            </S.SubImgBox>
          </S.ImgBox>
          <S.InformBox>
            <S.LocationToProfile>
              <S.LocationPickBox>
                <S.LocationTitleBox>
                  <S.LocationBox>
                    <S.LocationImg src="/images/detail/location.png" />
                    <S.Location>설악산</S.Location>
                  </S.LocationBox>
                  <S.Title>설악산 같이 가실래요?</S.Title>
                </S.LocationTitleBox>
                <S.PickBox>
                  <S.Pick>
                    <PickTrueSvg />
                  </S.Pick>
                </S.PickBox>
              </S.LocationPickBox>
              <S.ProfileBox>
                <S.ProfileImg></S.ProfileImg>
                <S.ProfileInform>
                  <S.NickName>춘딩딩</S.NickName>
                  <S.AgeGenderBox>
                    <S.AgeGender>28</S.AgeGender>
                    <S.AgeGender>·</S.AgeGender>
                    <S.AgeGender>남성</S.AgeGender>
                  </S.AgeGenderBox>
                </S.ProfileInform>
              </S.ProfileBox>
            </S.LocationToProfile>
            <S.UnderLine></S.UnderLine>
            <S.DetailInformBox>
              <S.DetailInform>
                <S.DetailTitle>등산 날짜</S.DetailTitle>
                <S.DetailData>2022-11-24</S.DetailData>
              </S.DetailInform>
              <S.Line></S.Line>
              <S.DetailInform>
                <S.DetailTitle>등산 시간</S.DetailTitle>
                <S.DetailData>2:00 PM</S.DetailData>
              </S.DetailInform>
              <S.Line></S.Line>
              <S.DetailInform>
                <S.DetailTitle>모집 성별</S.DetailTitle>
                <S.DetailData>상관없음</S.DetailData>
              </S.DetailInform>
              <S.Line></S.Line>
              <S.DetailInform>
                <S.DetailTitle>모집 인원</S.DetailTitle>
                <S.DetailData>15명</S.DetailData>
              </S.DetailInform>
              {/* <S.Line></S.Line>
              <S.DetailInform>
                <S.TrailBtn>등산로 보기</S.TrailBtn>
              </S.DetailInform> */}
            </S.DetailInformBox>
            <S.DueBox>
              <S.DueText>회비</S.DueText>
              <S.DueData>10,000</S.DueData>
              <S.DueWon>원</S.DueWon>
            </S.DueBox>
            <S.TextArea></S.TextArea>
          </S.InformBox>
        </S.Header>
        <S.MiddleUnderLine></S.MiddleUnderLine>
        <S.Body>
          <S.MapBox>
            <S.BodyTitle>지도</S.BodyTitle>
            <S.Map></S.Map>
            <S.AddressBox>
              <S.Address>경기도 고양시 덕양구 고양시청로10</S.Address>
              <S.Address>호수공원</S.Address>
            </S.AddressBox>
          </S.MapBox>
          <S.ListBox>
            <S.ListInform>
              <S.BodyTitle>참가원 리스트</S.BodyTitle>
              <S.CrewListBox>
                <S.CrewList>14</S.CrewList>
                <S.CrewListAll>/15</S.CrewListAll>
                <S.Img src="/images/detail/profile-detail.png" />
              </S.CrewListBox>
            </S.ListInform>
            <S.CrewBox>
              <S.CrewInformBox>
                <S.CrewInform>
                  <Avatar
                    alt="Crew Image"
                    src="/images/commons/profile-img.png"
                    sx={{ width: 50, height: 50 }}
                  ></Avatar>
                  <S.CrewPositionNickName>
                    <S.CrewPosition>방장</S.CrewPosition>
                    <S.CrewNickName>춘딩딩</S.CrewNickName>
                  </S.CrewPositionNickName>
                </S.CrewInform>
                <S.CrewAgeGenderBox>
                  <S.CrewAgeGender>28</S.CrewAgeGender>
                  <S.CrewAgeGender>·</S.CrewAgeGender>
                  <S.CrewAgeGender>남성</S.CrewAgeGender>
                </S.CrewAgeGenderBox>
              </S.CrewInformBox>
              {/* 여기부터 맵돌리기 */}
              <S.CrewInformBox>
                <S.CrewInform>
                  <Avatar
                    alt="Crew Image"
                    src="/images/commons/profile-img.png"
                    sx={{ width: 50, height: 50 }}
                  ></Avatar>
                  <S.CrewPositionNickName>
                    <S.CrewNickName>춘딩딩</S.CrewNickName>
                  </S.CrewPositionNickName>
                </S.CrewInform>
                <S.CrewAgeGenderBox>
                  <S.CrewAgeGender>28</S.CrewAgeGender>
                  <S.CrewAgeGender>·</S.CrewAgeGender>
                  <S.CrewAgeGender>남성</S.CrewAgeGender>
                </S.CrewAgeGenderBox>
              </S.CrewInformBox>
              {/* 여기까지 맵돌리기 */}
              {/* 여기부터 삭제하기 */}
              <S.CrewInformBox>
                <S.CrewInform>
                  <Avatar
                    alt="Crew Image"
                    src="/images/commons/profile-img.png"
                    sx={{ width: 50, height: 50 }}
                  ></Avatar>
                  <S.CrewPositionNickName>
                    <S.CrewNickName>춘딩딩</S.CrewNickName>
                  </S.CrewPositionNickName>
                </S.CrewInform>
                <S.CrewAgeGenderBox>
                  <S.CrewAgeGender>28</S.CrewAgeGender>
                  <S.CrewAgeGender>·</S.CrewAgeGender>
                  <S.CrewAgeGender>남성</S.CrewAgeGender>
                </S.CrewAgeGenderBox>
              </S.CrewInformBox>
              <S.CrewInformBox>
                <S.CrewInform>
                  <Avatar
                    alt="Crew Image"
                    src="/images/commons/profile-img.png"
                    sx={{ width: 50, height: 50 }}
                  ></Avatar>
                  <S.CrewPositionNickName>
                    <S.CrewNickName>춘딩딩</S.CrewNickName>
                  </S.CrewPositionNickName>
                </S.CrewInform>
                <S.CrewAgeGenderBox>
                  <S.CrewAgeGender>28</S.CrewAgeGender>
                  <S.CrewAgeGender>·</S.CrewAgeGender>
                  <S.CrewAgeGender>남성</S.CrewAgeGender>
                </S.CrewAgeGenderBox>
              </S.CrewInformBox>
              <S.CrewInformBox>
                <S.CrewInform>
                  <Avatar
                    alt="Crew Image"
                    src="/images/commons/profile-img.png"
                    sx={{ width: 50, height: 50 }}
                  ></Avatar>
                  <S.CrewPositionNickName>
                    <S.CrewNickName>춘딩딩</S.CrewNickName>
                  </S.CrewPositionNickName>
                </S.CrewInform>
                <S.CrewAgeGenderBox>
                  <S.CrewAgeGender>28</S.CrewAgeGender>
                  <S.CrewAgeGender>·</S.CrewAgeGender>
                  <S.CrewAgeGender>남성</S.CrewAgeGender>
                </S.CrewAgeGenderBox>
              </S.CrewInformBox>
              <S.CrewInformBox>
                <S.CrewInform>
                  <Avatar
                    alt="Crew Image"
                    src="/images/commons/profile-img.png"
                    sx={{ width: 50, height: 50 }}
                  ></Avatar>
                  <S.CrewPositionNickName>
                    <S.CrewNickName>춘딩딩</S.CrewNickName>
                  </S.CrewPositionNickName>
                </S.CrewInform>
                <S.CrewAgeGenderBox>
                  <S.CrewAgeGender>28</S.CrewAgeGender>
                  <S.CrewAgeGender>·</S.CrewAgeGender>
                  <S.CrewAgeGender>남성</S.CrewAgeGender>
                </S.CrewAgeGenderBox>
              </S.CrewInformBox>
              <S.CrewInformBox>
                <S.CrewInform>
                  <Avatar
                    alt="Crew Image"
                    src="/images/commons/profile-img.png"
                    sx={{ width: 50, height: 50 }}
                  ></Avatar>
                  <S.CrewPositionNickName>
                    <S.CrewNickName>춘딩딩</S.CrewNickName>
                  </S.CrewPositionNickName>
                </S.CrewInform>
                <S.CrewAgeGenderBox>
                  <S.CrewAgeGender>28</S.CrewAgeGender>
                  <S.CrewAgeGender>·</S.CrewAgeGender>
                  <S.CrewAgeGender>남성</S.CrewAgeGender>
                </S.CrewAgeGenderBox>
              </S.CrewInformBox>
              <S.CrewInformBox>
                <S.CrewInform>
                  <Avatar
                    alt="Crew Image"
                    src="/images/commons/profile-img.png"
                    sx={{ width: 50, height: 50 }}
                  ></Avatar>
                  <S.CrewPositionNickName>
                    <S.CrewNickName>춘딩딩</S.CrewNickName>
                  </S.CrewPositionNickName>
                </S.CrewInform>
                <S.CrewAgeGenderBox>
                  <S.CrewAgeGender>28</S.CrewAgeGender>
                  <S.CrewAgeGender>·</S.CrewAgeGender>
                  <S.CrewAgeGender>남성</S.CrewAgeGender>
                </S.CrewAgeGenderBox>
              </S.CrewInformBox>
              <S.CrewInformBox>
                <S.CrewInform>
                  <Avatar
                    alt="Crew Image"
                    src="/images/commons/profile-img.png"
                    sx={{ width: 50, height: 50 }}
                  ></Avatar>
                  <S.CrewPositionNickName>
                    <S.CrewNickName>춘딩딩</S.CrewNickName>
                  </S.CrewPositionNickName>
                </S.CrewInform>
                <S.CrewAgeGenderBox>
                  <S.CrewAgeGender>28</S.CrewAgeGender>
                  <S.CrewAgeGender>·</S.CrewAgeGender>
                  <S.CrewAgeGender>남성</S.CrewAgeGender>
                </S.CrewAgeGenderBox>
              </S.CrewInformBox>
              <S.CrewInformBox>
                <S.CrewInform>
                  <Avatar
                    alt="Crew Image"
                    src="/images/commons/profile-img.png"
                    sx={{ width: 50, height: 50 }}
                  ></Avatar>
                  <S.CrewPositionNickName>
                    <S.CrewNickName>춘딩딩</S.CrewNickName>
                  </S.CrewPositionNickName>
                </S.CrewInform>
                <S.CrewAgeGenderBox>
                  <S.CrewAgeGender>28</S.CrewAgeGender>
                  <S.CrewAgeGender>·</S.CrewAgeGender>
                  <S.CrewAgeGender>남성</S.CrewAgeGender>
                </S.CrewAgeGenderBox>
              </S.CrewInformBox>
              <S.CrewInformBox>
                <S.CrewInform>
                  <Avatar
                    alt="Crew Image"
                    src="/images/commons/profile-img.png"
                    sx={{ width: 50, height: 50 }}
                  ></Avatar>
                  <S.CrewPositionNickName>
                    <S.CrewNickName>춘딩딩</S.CrewNickName>
                  </S.CrewPositionNickName>
                </S.CrewInform>
                <S.CrewAgeGenderBox>
                  <S.CrewAgeGender>28</S.CrewAgeGender>
                  <S.CrewAgeGender>·</S.CrewAgeGender>
                  <S.CrewAgeGender>남성</S.CrewAgeGender>
                </S.CrewAgeGenderBox>
              </S.CrewInformBox>
              {/* 여기까지 삭제하기 */}
            </S.CrewBox>
          </S.ListBox>
        </S.Body>
        <S.Footer>
          <S.ListBtn>목록</S.ListBtn>
          <S.ApplyBtn>참가</S.ApplyBtn>
        </S.Footer>
        <S.MiddleUnderLine></S.MiddleUnderLine>
        <S.CommentContainer>
          <CrewCommentWrite />
        </S.CommentContainer>
      </S.Wrapper>
    </>
  );
};

export default CrewDetailUi;
