import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Container = styled.div`
  width: 792px;
  margin: 80px auto 100px;
`;

export const ChargeContainer = styled.section`
  width: 100%;
`;

export const TitleUl = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  border-top: 2px solid #111;
  border-bottom: 2px solid #d9d9d9;
  padding: 3.5rem 0;
`;
export const ContentUl = styled.ul`
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #d9d9d9;
  padding: 3.2rem 0;
`;

export const ListLiNum = styled.li`
  width: 20%;
  font-size: 1.6rem;
  font-weight: 400;
  color: #666;
  text-align: center;
`;
export const ListLiDate = styled.li`
  width: 10%;
  font-size: 1.6rem;
  font-weight: 400;
  color: #111;
  text-align: center;
`;
export const ListLiChargePoint = styled.li`
  width: 55%;
  font-size: 1.6rem;
  font-weight: 500;
  color: #111;
  padding-left: 5.5rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  a {
    color: #111;
  }
`;
export const ListLiSign = styled.li`
  width: 10.41%;
  font-size: 1.6rem;
  font-weight: 500;
  color: #111;
  text-align: center;
  position: relative;
`;

export const RefundBtn = styled.button`
  width: 80px;
  padding: 0.9rem 0;
  border-radius: 4px;
  background: linear-gradient(90.25deg, #426a3a 0.19%, #2f4b2a 99.78%);
  border: none;
  cursor: pointer;
  font-size: 1.6rem;
  font-weight: 400;
  color: #fff;
`;
