import { Avatar } from "@mui/material";
import PickTrueSvg from "../../../commons/svg/pickTrue";
import CrewCommentList from "../../crewComment/list/crewCommentList.container";
import CrewCommentWrite from "../../crewComment/write";
import * as S from "./crewDetail.styles";

const CrewDetailUi = ({ data }) => {
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
                  <S.Title>{data?.fetchCrewBoard.title}</S.Title>
                </S.LocationTitleBox>
                <S.PickChatContainer>
                  <S.PickChatBox>
                    <S.ChatBox></S.ChatBox>
                  </S.PickChatBox>
                  <S.PickChatBox>
                    <S.PickBox>
                      <PickTrueSvg />
                    </S.PickBox>
                  </S.PickChatBox>
                </S.PickChatContainer>
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
                <S.DetailData>{data?.fetchCrewBoard.date}</S.DetailData>
              </S.DetailInform>
              <S.Line></S.Line>
              <S.DetailInform>
                <S.DetailTitle>등산 시간</S.DetailTitle>
                <S.DetailData>
                  {data?.fetchCrewBoard.dateTime
                    .replace("am", "AM")
                    .replace("pm", "PM")}
                </S.DetailData>
              </S.DetailInform>
              <S.Line></S.Line>
              <S.DetailInform>
                <S.DetailTitle>모집 성별</S.DetailTitle>
                <S.DetailData>{data?.fetchCrewBoard.gender}</S.DetailData>
              </S.DetailInform>
              <S.Line></S.Line>
              <S.DetailInform>
                <S.DetailTitle>모집 인원</S.DetailTitle>
                <S.DetailData>{data?.fetchCrewBoard.peoples}명</S.DetailData>
              </S.DetailInform>
              {/* <S.Line></S.Line>
              <S.DetailInform>
                <S.TrailBtn>등산로 보기</S.TrailBtn>
              </S.DetailInform> */}
            </S.DetailInformBox>
            <S.DueBox>
              <S.DueText>회비</S.DueText>
              <S.DueData>{`${String(data?.fetchCrewBoard.dues).replace(
                /(\d)(?=(?:\d{3})+(?!\d))/g,
                "$1,"
              )}`}</S.DueData>
              <S.DueWon>원</S.DueWon>
            </S.DueBox>
            <S.Description>{data?.fetchCrewBoard.description}</S.Description>
          </S.InformBox>
        </S.Header>
        <S.MiddleUnderLine></S.MiddleUnderLine>
        <S.Body>
          <S.MapBox>
            <S.BodyTitle>지도</S.BodyTitle>
            <S.Map></S.Map>
            <S.AddressBox>
              <S.Address>{data?.fetchCrewBoard.address}</S.Address>
              <S.Address>{data?.fetchCrewBoard.addressDetail}</S.Address>
            </S.AddressBox>
          </S.MapBox>
          <S.ListBox>
            <S.ResponsiveUnderLine></S.ResponsiveUnderLine>
            <S.ListInform>
              <S.BodyTitle>참가원 리스트</S.BodyTitle>
              <S.CrewListBox>
                <S.CrewList>14</S.CrewList>
                <S.CrewListAll>/{data?.fetchCrewBoard.peoples}</S.CrewListAll>
                <S.Img src="/images/detail/profile-detail.png" />
              </S.CrewListBox>
            </S.ListInform>
            <S.CrewBox>
              <S.CrewInformBox>
                <S.CrewInform>
                  <Avatar
                    alt="Crew Image"
                    src="/images/commons/profile-img.png"
                    className="avatar"
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
                    className="avatar"
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
                    className="avatar"
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
                    className="avatar"
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
                    className="avatar"
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
                    className="avatar"
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
                    className="avatar"
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
                    className="avatar"
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
                    className="avatar"
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
                    className="avatar"
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
                    className="avatar"
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
          <CrewCommentList />
        </S.CommentContainer>
      </S.Wrapper>
    </>
  );
};

export default CrewDetailUi;
