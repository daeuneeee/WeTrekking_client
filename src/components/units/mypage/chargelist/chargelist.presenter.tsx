import MyPageNav from "../navigation";
import * as S from "./chargelist.styles";
import * as A from "../applylist/applylist.styles";
import { Pagination } from "antd";
import "antd/dist/antd.css";

const ChargeListUi = () => {
  return (
    <S.Wrapper>
      <MyPageNav page="충전내역" />
      <S.Container>
        <S.ChargeContainer>
          <S.TitleUl>
            <S.ListLiNum className="mobile">No.</S.ListLiNum>
            <S.ListLiDate>날짜</S.ListLiDate>
            <S.ListLiChargePoint>충전금액</S.ListLiChargePoint>
            <S.ListLiSign>환불하기</S.ListLiSign>
          </S.TitleUl>
          <S.ContentUl>
            <S.ListLiNum className="mobile">1</S.ListLiNum>
            <S.ListLiDate>2022.01.01</S.ListLiDate>
            <S.ListLiChargePoint>20,000P</S.ListLiChargePoint>
            <S.ListLiSign>
              <S.RefundBtn>환불하기</S.RefundBtn>
            </S.ListLiSign>
          </S.ContentUl>
        </S.ChargeContainer>
        <A.PaginationContainer>
          <Pagination defaultCurrent={1} total={50} />
        </A.PaginationContainer>
      </S.Container>
    </S.Wrapper>
  );
};

export default ChargeListUi;
