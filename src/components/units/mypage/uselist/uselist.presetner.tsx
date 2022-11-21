import MyPageNav from "../navigation";
import * as S from "../chargelist/chargelist.styles";
import * as A from "./uselist.styles";
import * as D from "../applylist/applylist.styles";
import { Pagination } from "antd";
import "antd/dist/antd.css";
import { IUseListUiProps } from "./uselist.types";

const UseListUi = ({ data, onChangePage }: IUseListUiProps) => {
  return (
    <S.Wrapper>
      <MyPageNav page="이용내역" />
      <S.Container>
        <S.ChargeContainer>
          <S.TitleUl>
            <S.ListLiNum>No.</S.ListLiNum>
            <A.ListLiDateTitle>날짜</A.ListLiDateTitle>
            <S.ListLiSign>사용금액</S.ListLiSign>
          </S.TitleUl>
          {data?.fetchPointHistory.map((el: any, index: number) => {
            return (
              <S.ContentUl key={el.id}>
                <S.ListLiNum>{index + 1}</S.ListLiNum>
                <A.ListLiDate>{el.createdAt.slice(0, 10)}</A.ListLiDate>
                <S.ListLiSign>{el.amount}P</S.ListLiSign>
              </S.ContentUl>
            );
          })}
        </S.ChargeContainer>
        <D.PaginationContainer>
          <Pagination
            defaultCurrent={1}
            total={data?.fetchPointHistory.length}
            onChange={onChangePage}
          />
        </D.PaginationContainer>
      </S.Container>
    </S.Wrapper>
  );
};

export default UseListUi;
