import MyPageNav from "../navigation";
import * as S from "../applylist/applylist.styles";
import "antd/dist/antd.css";
import UList from "../list";
import { IUploadListUiProps } from "./uploadlist.types";

const UploadListUi = ({
  data,
  isModalActive,
  onClickModalToggle,
  onClickListDel,
  onClickModalCancel,
}: IUploadListUiProps) => {
  return (
    <S.Wrapper>
      <MyPageNav page="올린내역" />
      <S.Container>
        <S.ApplyListContainer>
          <S.TitleUl>
            <S.ListLiNum className="mobile">No.</S.ListLiNum>
            <S.ListLiMountain>산</S.ListLiMountain>
            <S.ListLiTitle>제목</S.ListLiTitle>
            <S.ListLiSign>신청자</S.ListLiSign>
            <S.ListLiCancel>취소</S.ListLiCancel>
          </S.TitleUl>
          {data?.fetchHostCrewList[0]?.map((el, index) => {
            return (
              <UList
                el={el}
                index={index}
                key={el.id}
                isModalActive={isModalActive}
                onClickModalToggle={onClickModalToggle}
                onClickListDel={onClickListDel}
                onClickModalCancel={onClickModalCancel}
              />
            );
          })}
        </S.ApplyListContainer>
      </S.Container>
    </S.Wrapper>
  );
};

export default UploadListUi;
