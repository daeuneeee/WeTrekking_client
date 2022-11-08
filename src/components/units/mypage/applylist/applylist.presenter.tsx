import { Pagination } from "antd";
import MyPageNav from "../navigation";
import * as S from "./applylist.styles";
import "antd/dist/antd.css";

const ApplyListUi = () => {
  return (
    <S.Wrapper>
      <MyPageNav page="신청 리스트" />
      <S.Container>
        <S.ApplyListContainer>
          <S.TitleUl>
            <S.ListLiNum>No.</S.ListLiNum>
            <S.ListLiMountain>산 이름</S.ListLiMountain>
            <S.ListLiTitle>제목</S.ListLiTitle>
            <S.ListLiSign>상태</S.ListLiSign>
            <S.ListLiCancel>취소</S.ListLiCancel>
          </S.TitleUl>
          <S.ContentUl>
            <S.ListLiNum>1</S.ListLiNum>
            <S.ListLiMountain>백두산</S.ListLiMountain>
            <S.ListLiTitle>
              <a>백두산 가실분 구합니다.</a>
            </S.ListLiTitle>
            <S.ListLiSign>
              <S.SignBtn>승인</S.SignBtn>
            </S.ListLiSign>
            <S.ListLiCancel>
              <S.CancelBtn>
                <S.CancelMent>취소하기</S.CancelMent>
              </S.CancelBtn>
            </S.ListLiCancel>
          </S.ContentUl>
        </S.ApplyListContainer>
        <S.PaginationContainer>
          <Pagination defaultCurrent={1} total={50} />
        </S.PaginationContainer>
      </S.Container>
    </S.Wrapper>
  );
};

export default ApplyListUi;
