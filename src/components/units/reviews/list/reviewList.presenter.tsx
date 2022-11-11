import { Pagination } from "antd";
import * as S from "./reviewList.styles";
import { IReviewListUiProps } from "./reviewList.types";

const ReviewListUi = ({ data, onClickList, reviewId }: IReviewListUiProps) => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.ReviewListContainer>
          <S.TitleUl>
            <S.ListLiNum>No.</S.ListLiNum>
            <S.ListLiMountain>산 이름</S.ListLiMountain>
            <S.ListLiTitle>제목</S.ListLiTitle>
            <S.ListLiWrite>작성자</S.ListLiWrite>
            <S.ListLiCreatedAt>작성일</S.ListLiCreatedAt>
          </S.TitleUl>
          {data?.fetchReviewBoards.map((ReviewsMap, index) => (
            <S.ContentUl key={ReviewsMap.id}>
              <S.ListLiNum>{Number(index) + 1}</S.ListLiNum>
              <S.ListLiMountain>백두산</S.ListLiMountain>
              <S.ListLiTitle>
                <S.Title
                  onClick={onClickList}
                  id={ReviewsMap.id}
                  className={reviewId === ReviewsMap.id ? "on" : ""}
                >
                  {ReviewsMap.title}
                </S.Title>
              </S.ListLiTitle>
              <S.ListLiWrite>
                <S.Write>춘딩딩</S.Write>
              </S.ListLiWrite>
              <S.ListLiCreatedAt>
                <S.CreatedAt>2022.10.10</S.CreatedAt>
              </S.ListLiCreatedAt>
            </S.ContentUl>
          ))}
        </S.ReviewListContainer>
        <S.PaginationContainer>
          <Pagination defaultCurrent={1} total={50} />
        </S.PaginationContainer>
      </S.Container>
    </S.Wrapper>
  );
};

export default ReviewListUi;
