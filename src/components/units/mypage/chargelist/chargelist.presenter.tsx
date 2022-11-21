import MyPageNav from "../navigation";
import * as S from "./chargelist.styles";
import * as A from "../applylist/applylist.styles";
import { Pagination } from "antd";
import "antd/dist/antd.css";
import { IChargeListUiProps } from "./chargelist.types";
import ConfirmModal from "../../../commons/modals/confirmModal";

const ChargeListUi = ({
  data,
  pageNum,
  onChangePage,
  isActive,
  onClickModalOn,
  onClickModalOff,
  onClickcancelPoint,
}: IChargeListUiProps) => {
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
          {data?.fetchPointPayments[pageNum].map((el, index) => {
            return (
              <S.ContentUl key={el.id}>
                <S.ListLiNum className="mobile">{index + 1}</S.ListLiNum>
                <S.ListLiDate>{el.createdAt.slice(0, 10)}</S.ListLiDate>
                <S.ListLiChargePoint>{el.amount}P</S.ListLiChargePoint>
                <S.ListLiSign>
                  {el.status === "CANCEL" ? null : (
                    <S.RefundBtn id={el.impUid} onClick={onClickModalOn}>
                      환불하기
                    </S.RefundBtn>
                  )}
                </S.ListLiSign>
              </S.ContentUl>
            );
          })}
        </S.ChargeContainer>
        <A.PaginationContainer>
          <Pagination
            defaultCurrent={1}
            total={data ? Number(data?.fetchPointPayments.length) * 10 : 0}
            onChange={onChangePage}
          />
        </A.PaginationContainer>
      </S.Container>
      <ConfirmModal
        open={isActive}
        onOk={onClickcancelPoint}
        onCancel={onClickModalOff}
        contents="환불 하시겠습니까?"
      />
    </S.Wrapper>
  );
};

export default ChargeListUi;
