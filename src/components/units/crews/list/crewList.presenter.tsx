import { Select, DatePicker, Space } from "antd";
import * as S from "./crewList.styles";
import "antd/dist/antd.css";
import PickFalseSvg from "../../../commons/svg/pickFalse";

const CrewListUi = () => {
  const { Option } = Select;
  const { RangePicker } = DatePicker;

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
              <S.RankingImg></S.RankingImg>
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
              <S.RankingImg></S.RankingImg>
              <S.RankingInform>
                <S.RankingNickName>땅오</S.RankingNickName>
                <S.RankingEmail>456@123.com</S.RankingEmail>
              </S.RankingInform>
              <S.RankingNumBox>
                <S.RankingNum>TOP 2</S.RankingNum>
              </S.RankingNumBox>
            </S.Ranking>
            <S.Ranking>
              <S.RankingImg></S.RankingImg>
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
                <S.OrderList>· 최신순 보기</S.OrderList>
                <S.OrderList>· 마감순 보기</S.OrderList>
              </S.OrderBox>
            </S.TitleBox>
            <S.SearchBox>
              <Select
                defaultValue="서울"
                style={{ width: 120 }}
                onChange={handleChange}
              >
                <Option value="서울">서울</Option>
                <Option value="경기도">경기도</Option>
                <Option value="인천">인천</Option>
              </Select>
              <S.Partition></S.Partition>
              <Space direction="vertical" size={12}>
                <RangePicker />
              </Space>
              <S.Partition></S.Partition>
              <S.Search placeholder="검색어를 입력해주세요" />
              <S.SearchBtn>검색</S.SearchBtn>
            </S.SearchBox>
          </S.Header>
          <S.Body>
            <S.ListBox>
              <S.ListHeader>
                <S.ListInform>
                  <S.ListImg></S.ListImg>
                  <S.ListNickName>춘딩딩</S.ListNickName>
                </S.ListInform>
                <S.ListPick>
                  <PickFalseSvg />
                </S.ListPick>
              </S.ListHeader>
              <S.ListContainer>
                <S.ListThumbnail></S.ListThumbnail>
                <S.ListBody>
                  <S.ListTitleBox>
                    <S.ListTitle>설악산 같이 가실래요?</S.ListTitle>
                    <S.ListCreatedAt>2022.10.31</S.ListCreatedAt>
                  </S.ListTitleBox>
                  <S.ListCrewsBox>
                    <S.ListCrewsImg></S.ListCrewsImg>
                    <S.ListCrewsNum>모집인원 3/4</S.ListCrewsNum>
                  </S.ListCrewsBox>
                </S.ListBody>
                <S.ListFooter>
                  <S.ListLocationBox>
                    <S.LocationImg>
                      <img src="/images/crew/location.png" />
                    </S.LocationImg>
                    <S.Location>설악산</S.Location>
                  </S.ListLocationBox>
                  <S.ListTimeAndDayBox>
                    <S.TimeImg>
                      <img src="/images/crew/time.png" />
                    </S.TimeImg>
                    <S.Day>2022.11.24</S.Day>
                    <S.TimePartition></S.TimePartition>
                    <S.Time>14:00</S.Time>
                  </S.ListTimeAndDayBox>
                </S.ListFooter>
              </S.ListContainer>
            </S.ListBox>
            {/* 여기부터삭제2 */}
            <S.ListBox>
              <S.ListHeader>
                <S.ListInform>
                  <S.ListImg></S.ListImg>
                  <S.ListNickName>춘딩딩</S.ListNickName>
                </S.ListInform>
                <S.ListPick>
                  <PickFalseSvg />
                </S.ListPick>
              </S.ListHeader>
              <S.ListThumbnail></S.ListThumbnail>
              <S.ListBody>
                <S.ListTitleBox>
                  <S.ListTitle>설악산 같이 가실래요?</S.ListTitle>
                  <S.ListCreatedAt>2022.10.31</S.ListCreatedAt>
                </S.ListTitleBox>
                <S.ListCrewsBox>
                  <S.ListCrewsImg></S.ListCrewsImg>
                  <S.ListCrewsNum>모집인원 3/4</S.ListCrewsNum>
                </S.ListCrewsBox>
              </S.ListBody>
              <S.ListFooter>
                <S.ListLocationBox>
                  <S.LocationImg>
                    <img src="/images/crew/location.png" />
                  </S.LocationImg>
                  <S.Location>설악산</S.Location>
                </S.ListLocationBox>
                <S.ListTimeAndDayBox>
                  <S.TimeImg>
                    <img src="/images/crew/time.png" />
                  </S.TimeImg>
                  <S.Day>2022.11.24</S.Day>
                  <S.TimePartition></S.TimePartition>
                  <S.Time>14:00</S.Time>
                </S.ListTimeAndDayBox>
              </S.ListFooter>
            </S.ListBox>
            <S.ListBox>
              <S.ListHeader>
                <S.ListInform>
                  <S.ListImg></S.ListImg>
                  <S.ListNickName>춘딩딩</S.ListNickName>
                </S.ListInform>
                <S.ListPick>
                  <PickFalseSvg />
                </S.ListPick>
              </S.ListHeader>
              <S.ListThumbnail></S.ListThumbnail>
              <S.ListBody>
                <S.ListTitleBox>
                  <S.ListTitle>설악산 같이 가실래요?</S.ListTitle>
                  <S.ListCreatedAt>2022.10.31</S.ListCreatedAt>
                </S.ListTitleBox>
                <S.ListCrewsBox>
                  <S.ListCrewsImg></S.ListCrewsImg>
                  <S.ListCrewsNum>모집인원 3/4</S.ListCrewsNum>
                </S.ListCrewsBox>
              </S.ListBody>
              <S.ListFooter>
                <S.ListLocationBox>
                  <S.LocationImg>
                    <img src="/images/crew/location.png" />
                  </S.LocationImg>
                  <S.Location>설악산</S.Location>
                </S.ListLocationBox>
                <S.ListTimeAndDayBox>
                  <S.TimeImg>
                    <img src="/images/crew/time.png" />
                  </S.TimeImg>
                  <S.Day>2022.11.24</S.Day>
                  <S.TimePartition></S.TimePartition>
                  <S.Time>14:00</S.Time>
                </S.ListTimeAndDayBox>
              </S.ListFooter>
            </S.ListBox>
            <S.ListBox>
              <S.ListHeader>
                <S.ListInform>
                  <S.ListImg></S.ListImg>
                  <S.ListNickName>춘딩딩</S.ListNickName>
                </S.ListInform>
                <S.ListPick>
                  <PickFalseSvg />
                </S.ListPick>
              </S.ListHeader>
              <S.ListThumbnail></S.ListThumbnail>
              <S.ListBody>
                <S.ListTitleBox>
                  <S.ListTitle>설악산 같이 가실래요?</S.ListTitle>
                  <S.ListCreatedAt>2022.10.31</S.ListCreatedAt>
                </S.ListTitleBox>
                <S.ListCrewsBox>
                  <S.ListCrewsImg></S.ListCrewsImg>
                  <S.ListCrewsNum>모집인원 3/4</S.ListCrewsNum>
                </S.ListCrewsBox>
              </S.ListBody>
              <S.ListFooter>
                <S.ListLocationBox>
                  <S.LocationImg>
                    <img src="/images/crew/location.png" />
                  </S.LocationImg>
                  <S.Location>설악산</S.Location>
                </S.ListLocationBox>
                <S.ListTimeAndDayBox>
                  <S.TimeImg>
                    <img src="/images/crew/time.png" />
                  </S.TimeImg>
                  <S.Day>2022.11.24</S.Day>
                  <S.TimePartition></S.TimePartition>
                  <S.Time>14:00</S.Time>
                </S.ListTimeAndDayBox>
              </S.ListFooter>
            </S.ListBox>
            <S.ListBox>
              <S.ListHeader>
                <S.ListInform>
                  <S.ListImg></S.ListImg>
                  <S.ListNickName>춘딩딩</S.ListNickName>
                </S.ListInform>
                <S.ListPick>
                  <PickFalseSvg />
                </S.ListPick>
              </S.ListHeader>
              <S.ListThumbnail></S.ListThumbnail>
              <S.ListBody>
                <S.ListTitleBox>
                  <S.ListTitle>설악산 같이 가실래요?</S.ListTitle>
                  <S.ListCreatedAt>2022.10.31</S.ListCreatedAt>
                </S.ListTitleBox>
                <S.ListCrewsBox>
                  <S.ListCrewsImg></S.ListCrewsImg>
                  <S.ListCrewsNum>모집인원 3/4</S.ListCrewsNum>
                </S.ListCrewsBox>
              </S.ListBody>
              <S.ListFooter>
                <S.ListLocationBox>
                  <S.LocationImg>
                    <img src="/images/crew/location.png" />
                  </S.LocationImg>
                  <S.Location>설악산</S.Location>
                </S.ListLocationBox>
                <S.ListTimeAndDayBox>
                  <S.TimeImg>
                    <img src="/images/crew/time.png" />
                  </S.TimeImg>
                  <S.Day>2022.11.24</S.Day>
                  <S.TimePartition></S.TimePartition>
                  <S.Time>14:00</S.Time>
                </S.ListTimeAndDayBox>
              </S.ListFooter>
            </S.ListBox>
            <S.ListBox>
              <S.ListHeader>
                <S.ListInform>
                  <S.ListImg></S.ListImg>
                  <S.ListNickName>춘딩딩</S.ListNickName>
                </S.ListInform>
                <S.ListPick>
                  <PickFalseSvg />
                </S.ListPick>
              </S.ListHeader>
              <S.ListThumbnail></S.ListThumbnail>
              <S.ListBody>
                <S.ListTitleBox>
                  <S.ListTitle>설악산 같이 가실래요?</S.ListTitle>
                  <S.ListCreatedAt>2022.10.31</S.ListCreatedAt>
                </S.ListTitleBox>
                <S.ListCrewsBox>
                  <S.ListCrewsImg></S.ListCrewsImg>
                  <S.ListCrewsNum>모집인원 3/4</S.ListCrewsNum>
                </S.ListCrewsBox>
              </S.ListBody>
              <S.ListFooter>
                <S.ListLocationBox>
                  <S.LocationImg>
                    <img src="/images/crew/location.png" />
                  </S.LocationImg>
                  <S.Location>설악산</S.Location>
                </S.ListLocationBox>
                <S.ListTimeAndDayBox>
                  <S.TimeImg>
                    <img src="/images/crew/time.png" />
                  </S.TimeImg>
                  <S.Day>2022.11.24</S.Day>
                  <S.TimePartition></S.TimePartition>
                  <S.Time>14:00</S.Time>
                </S.ListTimeAndDayBox>
              </S.ListFooter>
            </S.ListBox>
            <S.ListBox>
              <S.ListHeader>
                <S.ListInform>
                  <S.ListImg></S.ListImg>
                  <S.ListNickName>춘딩딩</S.ListNickName>
                </S.ListInform>
                <S.ListPick>
                  <PickFalseSvg />
                </S.ListPick>
              </S.ListHeader>
              <S.ListThumbnail></S.ListThumbnail>
              <S.ListBody>
                <S.ListTitleBox>
                  <S.ListTitle>설악산 같이 가실래요?</S.ListTitle>
                  <S.ListCreatedAt>2022.10.31</S.ListCreatedAt>
                </S.ListTitleBox>
                <S.ListCrewsBox>
                  <S.ListCrewsImg></S.ListCrewsImg>
                  <S.ListCrewsNum>모집인원 3/4</S.ListCrewsNum>
                </S.ListCrewsBox>
              </S.ListBody>
              <S.ListFooter>
                <S.ListLocationBox>
                  <S.LocationImg>
                    <img src="/images/crew/location.png" />
                  </S.LocationImg>
                  <S.Location>설악산</S.Location>
                </S.ListLocationBox>
                <S.ListTimeAndDayBox>
                  <S.TimeImg>
                    <img src="/images/crew/time.png" />
                  </S.TimeImg>
                  <S.Day>2022.11.24</S.Day>
                  <S.TimePartition></S.TimePartition>
                  <S.Time>14:00</S.Time>
                </S.ListTimeAndDayBox>
              </S.ListFooter>
            </S.ListBox>
            <S.ListBox>
              <S.ListHeader>
                <S.ListInform>
                  <S.ListImg></S.ListImg>
                  <S.ListNickName>춘딩딩</S.ListNickName>
                </S.ListInform>
                <S.ListPick>
                  <PickFalseSvg />
                </S.ListPick>
              </S.ListHeader>
              <S.ListThumbnail></S.ListThumbnail>
              <S.ListBody>
                <S.ListTitleBox>
                  <S.ListTitle>설악산 같이 가실래요?</S.ListTitle>
                  <S.ListCreatedAt>2022.10.31</S.ListCreatedAt>
                </S.ListTitleBox>
                <S.ListCrewsBox>
                  <S.ListCrewsImg></S.ListCrewsImg>
                  <S.ListCrewsNum>모집인원 3/4</S.ListCrewsNum>
                </S.ListCrewsBox>
              </S.ListBody>
              <S.ListFooter>
                <S.ListLocationBox>
                  <S.LocationImg>
                    <img src="/images/crew/location.png" />
                  </S.LocationImg>
                  <S.Location>설악산</S.Location>
                </S.ListLocationBox>
                <S.ListTimeAndDayBox>
                  <S.TimeImg>
                    <img src="/images/crew/time.png" />
                  </S.TimeImg>
                  <S.Day>2022.11.24</S.Day>
                  <S.TimePartition></S.TimePartition>
                  <S.Time>14:00</S.Time>
                </S.ListTimeAndDayBox>
              </S.ListFooter>
            </S.ListBox>
            {/* 여기까지 삭제2 */}
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
