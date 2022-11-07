import MyPageNav from "../navigation";
import * as S from "../applylist/applylist.styles";
import { Pagination } from "antd";
import "antd/dist/antd.css";
import UList from "../list";

const UploadListUi = () => {
  return (
    <S.Wrapper>
      <MyPageNav page="올린내역" />
      <S.Container>
        <S.ApplyListContainer>
          <S.TitleUl>
            <S.ListLiNum>No.</S.ListLiNum>
            <S.ListLiMountain>산 이름</S.ListLiMountain>
            <S.ListLiTitle>제목</S.ListLiTitle>
            <S.ListLiSign>신청자</S.ListLiSign>
            <S.ListLiCancle>취소</S.ListLiCancle>
          </S.TitleUl>
          <UList />
        </S.ApplyListContainer>
      </S.Container>
    </S.Wrapper>
  );
};

export default UploadListUi;
