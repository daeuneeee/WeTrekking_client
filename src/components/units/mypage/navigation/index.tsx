import styled from "@emotion/styled";
import { mainColor } from "../../../../commons/styles/color";

const mypageMenu = [
  "내 정보",
  "찜 리스트",
  "신청 리스트",
  "올린내역",
  "충전내역",
  "사용내역",
  "정보수정",
];

const Wrapper = styled.div`
  width: 100%;
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
  background-color: #fff;
`;

const MyPageUl = styled.ul`
  display: flex;
  justify-content: center;
  gap: 7rem;
  align-items: center;
`;

const MyPageLi = styled.li`
  font-size: 1.8rem;
  font-weight: 700;
  color: #999;
  padding: 40px 0;
  box-sizing: content-box;
  cursor: pointer;
`;

interface IPageProps {
  page: string;
}

const MyPageNav = ({ page }: IPageProps) => {
  return (
    <Wrapper>
      <MyPageUl>
        {mypageMenu.map((el) => {
          return (
            <MyPageLi
              style={{
                borderBottom: page === el ? `4px solid ${mainColor}` : "",
                color: page === el ? `${mainColor}` : "",
              }}
            >
              {el}
            </MyPageLi>
          );
        })}
      </MyPageUl>
    </Wrapper>
  );
};

export default MyPageNav;
