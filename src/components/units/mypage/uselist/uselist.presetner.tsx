import MyPageNav from "../navigation";
import * as S from "../chargelist/chargelist.styles";
import * as A from "./uselist.styles";
import * as D from "../applylist/applylist.styles";
import { Pagination } from "antd";
import "antd/dist/antd.css";

const UseListUi = () => {
  return (
    <S.Wrapper>
      <MyPageNav page="사용내역" />
      <S.Container>
        <S.ChargeContainer>
          <S.TitleUl>
            <S.ListLiNum>No.</S.ListLiNum>
            <A.ListLiDateTitle>날짜</A.ListLiDateTitle>
            <S.ListLiSign>사용금액</S.ListLiSign>
          </S.TitleUl>
          <S.ContentUl>
            <S.ListLiNum>1</S.ListLiNum>
            <A.ListLiDate>2022.01.01</A.ListLiDate>
            <S.ListLiSign>2,0000P</S.ListLiSign>
          </S.ContentUl>
        </S.ChargeContainer>
        <D.PaginationContainer>
          <Pagination defaultCurrent={1} total={50} />
        </D.PaginationContainer>
      </S.Container>
    </S.Wrapper>
  );
};

export default UseListUi;
