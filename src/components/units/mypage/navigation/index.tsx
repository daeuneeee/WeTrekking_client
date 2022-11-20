import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import { mainColor } from "../../../../commons/styles/color";
import { mobile } from "../../../../commons/styles/media";

const mypageMenu = [
  { name: "내 정보", router: "/mypage" },
  { name: "정보수정", router: "/mypage/updateinfo" },
  { name: "찜 리스트", router: "/mypage/pickedlist" },
  { name: "신청 리스트", router: "/mypage/applylist" },
  { name: "올린내역", router: "/mypage/uploadlist" },
  { name: "충전내역", router: "/mypage/chargelist" },
  // { name: "사용내역", router: "/mypage/uselist" },
];

const Wrapper = styled.div`
  width: 100%;
  border-top: 1px solid #d9d9d9;
  border-bottom: 1px solid #d9d9d9;
  background-color: #fff;
  overflow-x: auto;
`;

const MyPageUl = styled.ul`
  width: 920px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  @media ${mobile} {
    width: 500px;
    padding: 0 30px;
    overflow-x: auto;
  }
`;

const MyPageLi = styled.li`
  display: block;
  font-size: 1.8rem;
  font-weight: 700;
  color: #999;
  padding: 3rem 0;
  box-sizing: content-box;
  cursor: pointer;
`;

interface IPageProps {
  page: string;
}

const MyPageNav = ({ page }: IPageProps) => {
  const router = useRouter();

  const onClickToPage = (event: MouseEvent<HTMLLIElement>) => {
    void router.push(event.currentTarget.id);
  };

  return (
    <Wrapper>
      <MyPageUl>
        {mypageMenu.map((el, index) => {
          return (
            <MyPageLi
              style={{
                borderBottom: page === el.name ? `4px solid ${mainColor}` : "",
                color: page === el.name ? `${mainColor}` : "",
              }}
              id={el.router}
              onClick={onClickToPage}
              key={index}
            >
              {el.name}
            </MyPageLi>
          );
        })}
      </MyPageUl>
    </Wrapper>
  );
};

export default MyPageNav;
