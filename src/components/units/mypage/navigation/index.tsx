import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { mainColor } from "../../../../commons/styles/color";

const mypageMenu = [
  { name: "내 정보", router: "/mypage" },
  { name: "정보수정", router: "/mypage" },
  { name: "찜 리스트", router: "/mypage/pickedlist" },
  { name: "신청 리스트", router: "/mypage" },
  { name: "올린내역", router: "/mypage" },
  { name: "충전내역", router: "/mypage" },
  { name: "사용내역", router: "/mypage" },
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
  const router = useRouter();

  const onClickToPage = (event) => {
    void router.push(`${event.target.id}`);
  };

  return (
    <Wrapper>
      <MyPageUl>
        {mypageMenu.map((el) => {
          return (
            <MyPageLi
              style={{
                borderBottom: page === el.name ? `4px solid ${mainColor}` : "",
                color: page === el.name ? `${mainColor}` : "",
              }}
              id={el.router}
              onClick={onClickToPage}
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
