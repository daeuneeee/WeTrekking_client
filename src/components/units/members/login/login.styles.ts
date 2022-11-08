import styled from "@emotion/styled";
import { mainColor } from "../../../../commons/styles/color";
import { mobile, tablet } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Container = styled.section`
  width: 384px;
  margin: 0 auto;
  padding-top: 14rem;
  @media ${mobile} {
    width: 90%;
  }
`;

export const LoginTitle = styled.h2`
  font-size: 4.2rem;
  font-weight: 700;
  color: #2f4b2a;
  margin-bottom: 6rem;
  span {
    display: block;
    margin: 12px 0 0 7px;
    color: #111;
  }
`;

export const LoginForm = styled.form`
  width: 100%;
  margin-bottom: 2.4rem;
`;

export const LoginInputContainer = styled.div`
  width: 100%;
  margin-bottom: 2.5rem;
`;

export const LoginInputTitle = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
  color: #999;
  margin-bottom: 4px;
  span {
    color: #bf0e0e;
    margin-left: 2px;
  }
`;

export const LoginSubList = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;
`;

export const RememberIdBox = styled.div``;

export const RememberId = styled.label`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 1.3rem;
  font-weight: 400;
  color: #999;
  cursor: pointer;
`;

export const FindIdAndPw = styled.button`
  font-size: 1.3rem;
  font-weight: 400;
  color: #999;
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
`;

export const LoginSubmit = styled.button`
  display: block;
  width: 100%;
  height: 6.4rem;
  border: none;
  border-radius: 4px;
  background: linear-gradient(90.25deg, #426a3a 0.19%, #2f4b2a 99.78%);
  font-size: 1.8rem;
  font-weight: 700;
  color: #fff;
  cursor: pointer;
`;

export const SnsLoginTitleBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;
`;

export const SnsTitleLine = styled.div`
  width: 39%;
  height: 1px;
  background-color: #d9d9d9;
`;

export const SnsTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 400;
  color: #999;
`;

export const SnsLoginBtnBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  margin-bottom: 14rem;
`;

export const SnsLoginBtn = styled.button`
  display: block;
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
`;

export const JoinToMent = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  color: #999;
  text-align: center;
  margin-bottom: 8rem;
  span {
    color: #111;
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const RememberIdCheckBox = styled.div`
  width: 1.6rem;
  height: 1.6rem;
  /* background-color: ${mainColor}; */
  border-radius: 4px;
  border: 1px solid ${mainColor};
  position: relative;
  @media ${mobile} {
    width: 2.4rem;
    height: 2.4rem;
  }
  img {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;
