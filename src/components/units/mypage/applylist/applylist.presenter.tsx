import { Pagination } from "antd";
import MyPageNav from "../navigation";
import * as S from "./applylist.styles";
import "antd/dist/antd.css";
import { IApplyListUiProps } from "./applylist.types";
import ConfirmModal from "../../../commons/modals/confirmModal";

const ApplyListUi = ({
  data,
  crewCancelBtn,
  onClickModalOn,
  onClickModalOff,
  isActive,
}: IApplyListUiProps) => {
  return (
    <S.Wrapper>
      <MyPageNav page="신청 리스트" />
      <S.Container>
        <S.ApplyListContainer>
          <S.TitleUl>
            <S.ListLiNum className="mobile">No.</S.ListLiNum>
            <S.ListLiMountain>산 이름</S.ListLiMountain>
            <S.ListLiTitle>제목</S.ListLiTitle>
            <S.ListLiSign>상태</S.ListLiSign>
            <S.ListLiCancel>취소</S.ListLiCancel>
          </S.TitleUl>
          {data?.fetchCrewUserList.map((el, index) => {
            return (
              <S.ContentUl key={el.id}>
                <S.ListLiNum className="mobile">{index + 1}</S.ListLiNum>
                <S.ListLiMountain>
                  {el.crewBoard.mountain.mountain}
                </S.ListLiMountain>
                <S.ListLiTitle>
                  <a>{el.crewBoard.title}</a>
                </S.ListLiTitle>
                <S.ListLiSign>
                  <S.SignBtn>{el.status}</S.SignBtn>
                </S.ListLiSign>
                <S.ListLiCancel>
                  <S.CancelBtn>
                    <S.CancelMent id={el.crewBoard.id} onClick={onClickModalOn}>
                      취소하기
                    </S.CancelMent>
                  </S.CancelBtn>
                </S.ListLiCancel>
              </S.ContentUl>
            );
          })}
        </S.ApplyListContainer>
        <S.PaginationContainer>
          <Pagination defaultCurrent={1} total={50} />
        </S.PaginationContainer>
      </S.Container>
      <ConfirmModal
        open={isActive}
        onOk={crewCancelBtn}
        onCancel={onClickModalOff}
        contents="정말 취소하시겠습니까?"
      />
    </S.Wrapper>
  );
};

export default ApplyListUi;
