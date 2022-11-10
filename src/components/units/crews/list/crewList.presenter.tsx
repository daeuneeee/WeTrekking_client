import { Select, Space } from "antd";
import * as S from "./crewList.styles";
import "antd/dist/antd.css";
import PickFalseSvg from "../../../commons/svg/pickFalse";
import { ICrewListUiProps } from "./crewList.types";
import { Avatar, AvatarGroup } from "@mui/material";
import Link from "next/link";

const CrewListUi = ({
  data,
  onClickToWrite,
  sort,
  deadLine,
  onClickLatest,
  onClickDeadLine,
}: ICrewListUiProps) => {
  const { Option } = Select;
  // const { RangePicker }: any = DatePicker;

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };
  return (
    <>
      <S.Wrapper>
        <S.RankingBox>
          <S.RankingTitle>TOP 3</S.RankingTitle>
          <S.RankingContainer>
            <S.Ranking>
              <Avatar
                alt="Crew Image"
                src="/images/commons/profile-img.png"
                className="avatar"
              ></Avatar>
              <S.RankingInform>
                <S.RankingNickName>춘딩딩</S.RankingNickName>
                <S.RankingEmail>123@123.com</S.RankingEmail>
              </S.RankingInform>
              <S.RankingNumBox>
                <S.RankingNum>TOP 1</S.RankingNum>
              </S.RankingNumBox>
            </S.Ranking>
            {/* 여기부터 삭제 */}
            <S.Ranking>
              <Avatar
                alt="Crew Image"
                src="/images/commons/profile-img.png"
                className="avatar"
              ></Avatar>
              <S.RankingInform>
                <S.RankingNickName>땅오</S.RankingNickName>
                <S.RankingEmail>456@123.com</S.RankingEmail>
              </S.RankingInform>
              <S.RankingNumBox>
                <S.RankingNum>TOP 2</S.RankingNum>
              </S.RankingNumBox>
            </S.Ranking>
            <S.Ranking>
              <Avatar
                alt="Crew Image"
                src="/images/commons/profile-img.png"
                className="avatar"
              ></Avatar>
              <S.RankingInform>
                <S.RankingNickName>짱구</S.RankingNickName>
                <S.RankingEmail>789@123.com</S.RankingEmail>
              </S.RankingInform>
              <S.RankingNumBox>
                <S.RankingNum>TOP 3</S.RankingNum>
              </S.RankingNumBox>
            </S.Ranking>
            {/* 여기까지 삭제 */}
          </S.RankingContainer>
        </S.RankingBox>
        <S.CrewBox>
          <S.Header>
            <S.TitleBox>
              <S.Title>크루 리스트</S.Title>
              <S.OrderBox>
                <S.OrderList
                  onClick={onClickLatest}
                  className={sort ? "active" : ""}
                >
                  · 최신순 보기
                </S.OrderList>
                <S.OrderList
                  onClick={onClickDeadLine}
                  className={sort ? "" : "active"}
                >
                  · 마감순 보기
                </S.OrderList>
              </S.OrderBox>
            </S.TitleBox>
            <S.SearchBox>
              <S.SelectDateBox>
                <S.SelectAntD
                  defaultValue="서울"
                  // style={{ width: 120 }}
                  onChange={handleChange}
                >
                  <Option value="서울">서울</Option>
                  <Option value="경기도">경기도</Option>
                  <Option value="인천">인천</Option>
                </S.SelectAntD>
                <S.Partition></S.Partition>
                <Space direction="vertical">
                  <S.DateAntD placeholder={["시작 날짜", "끝 날짜"]} />
                </Space>
              </S.SelectDateBox>
              <S.Partition></S.Partition>
              <S.Search placeholder="검색어를 입력해주세요" />
              <S.SearchBtnBox>
                <S.SearchBtn>검색</S.SearchBtn>
                <S.RegisterBtn onClick={onClickToWrite}>글쓰기</S.RegisterBtn>
              </S.SearchBtnBox>
            </S.SearchBox>
          </S.Header>
          <S.Body>
            {sort
              ? data?.fetchCrewBoardsLatestFirst[0]?.map((listMap) => (
                  <S.ListBox key={listMap.id}>
                    <S.ListHeader>
                      <S.ListInform>
                        <Avatar
                          alt="Crew Image"
                          src="/images/commons/profile-img.png"
                          sx={{ width: 32, height: 32 }}
                        ></Avatar>
                        <S.ListNickName>춘딩딩</S.ListNickName>
                      </S.ListInform>
                      <S.ListPick>
                        <PickFalseSvg />
                      </S.ListPick>
                    </S.ListHeader>
                    <Link href={`crews/${listMap.id}`}>
                      <S.ListContainer>
                        <S.ListThumbnail></S.ListThumbnail>
                        <S.ListBody>
                          <S.ListTitleBox>
                            <S.ListTitle>{listMap.title}</S.ListTitle>
                            <S.ListCreatedAt>2022.10.31</S.ListCreatedAt>
                          </S.ListTitleBox>
                          <S.ListCrewsBox>
                            {/* <S.ListCrewsImg></S.ListCrewsImg> */}
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
                            <S.ListCrewsNum>
                              모집인원 3/{listMap.peoples}
                            </S.ListCrewsNum>
                          </S.ListCrewsBox>
                        </S.ListBody>
                        <S.ListFooter>
                          <S.ListLocationBox>
                            {/* <S.LocationImg>
                        <img src="/images/crew/location.png" />
                      </S.LocationImg> */}
                            <S.Location>설악산</S.Location>
                          </S.ListLocationBox>
                          <S.ListTimeAndDayBox>
                            {/* <S.TimeImg>
                        <img src="/images/crew/time.png" />
                      </S.TimeImg> */}
                            <S.Day>{listMap.date}</S.Day>
                            <S.TimePartition></S.TimePartition>
                            <S.Time>
                              {listMap.dateTime
                                .replace("am", "AM")
                                .replace("pm", "PM")}
                            </S.Time>
                          </S.ListTimeAndDayBox>
                        </S.ListFooter>
                      </S.ListContainer>
                    </Link>
                  </S.ListBox>
                ))
              : deadLine?.fetchCrewBoardsDeadlineFirst[0]?.map((listMap) => (
                  <S.ListBox key={listMap.id}>
                    <S.ListHeader>
                      <S.ListInform>
                        <Avatar
                          alt="Crew Image"
                          src="/images/commons/profile-img.png"
                          sx={{ width: 32, height: 32 }}
                        ></Avatar>
                        <S.ListNickName>춘딩딩</S.ListNickName>
                      </S.ListInform>
                      <S.ListPick>
                        <PickFalseSvg />
                      </S.ListPick>
                    </S.ListHeader>
                    <Link href={`crews/${listMap.id}`}>
                      <S.ListContainer>
                        <S.ListThumbnail></S.ListThumbnail>
                        <S.ListBody>
                          <S.ListTitleBox>
                            <S.ListTitle>{listMap.title}</S.ListTitle>
                            <S.ListCreatedAt>2022.10.31</S.ListCreatedAt>
                          </S.ListTitleBox>
                          <S.ListCrewsBox>
                            {/* <S.ListCrewsImg></S.ListCrewsImg> */}
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
                            <S.ListCrewsNum>
                              모집인원 3/{listMap.peoples}
                            </S.ListCrewsNum>
                          </S.ListCrewsBox>
                        </S.ListBody>
                        <S.ListFooter>
                          <S.ListLocationBox>
                            {/* <S.LocationImg>
                        <img src="/images/crew/location.png" />
                      </S.LocationImg> */}
                            <S.Location>설악산</S.Location>
                          </S.ListLocationBox>
                          <S.ListTimeAndDayBox>
                            {/* <S.TimeImg>
                        <img src="/images/crew/time.png" />
                      </S.TimeImg> */}
                            <S.Day>{listMap.date}</S.Day>
                            <S.TimePartition></S.TimePartition>
                            <S.Time>
                              {listMap.dateTime
                                .replace("am", "AM")
                                .replace("pm", "PM")}
                            </S.Time>
                          </S.ListTimeAndDayBox>
                        </S.ListFooter>
                      </S.ListContainer>
                    </Link>
                  </S.ListBox>
                ))}
          </S.Body>
          <S.Footer>
            <S.MoreBtn>더보기</S.MoreBtn>
          </S.Footer>
        </S.CrewBox>
      </S.Wrapper>
    </>
  );
};

export default CrewListUi;
