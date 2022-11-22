import styled from "@emotion/styled";
import { Rate } from "antd";
import { subColor } from "../../../../commons/styles/color";
import { mobile, tablet } from "../../../../commons/styles/media";

export const Wrapper = styled.div`
  width: 588px;
  margin: 0 auto;
  @media ${tablet} {
    width: 90%;
  }
`;

export const Container = styled.div`
  width: 65.31%;
  margin: 0 auto;
  @media ${tablet} {
    width: 80%;
  }
`;

export const Title = styled.p`
  font-weight: 700;
  font-size: 3.2rem;
  margin: 60px 0;
  text-align: center;
`;

export const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-bottom: 3rem;
  @media ${mobile} {
    width: 100%;
  }
`;

export const MainImgBox = styled.label`
  width: 384px;
  padding: 28% 0;
  background: #fafafa;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  cursor: pointer;
  @media ${tablet} {
    width: 100%;
  }
`;
export const MainImgHidden = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MainImg = styled.img`
  width: 12.5%;
  margin-bottom: 1rem;
`;

export const SubImgBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between; ;
`;

export const SubImg = styled.label`
  width: 120px;
  height: 100px;
  background: #fafafa;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  img {
    width: 40%;
  }
  @media ${tablet} {
    width: 32%;
    height: auto;
    padding: 8% 0;
  }
`;
export const MainText = styled.p`
  font-weight: 700;
  font-size: 1.6rem;
  color: #666;
`;

export const SubText = styled.p`
  font-weight: 400;
  font-size: 1.3rem;
  color: #999;
  margin-bottom: 5px;
`;

export const Label = styled.label`
  font-weight: 400;
  font-size: 1.3rem;
  color: #999;
`;

export const Input = styled.input`
  background: #fff;
  width: 384px;
  height: 52px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  padding: 12px;
  color: #111;
  font-weight: 400;
  font-size: 1.6rem;
  outline-color: ${subColor};
  margin-bottom: 0.2rem;
  ::placeholder {
    color: #999;
  }
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 2.4rem;
`;

export const Star = styled(Rate)`
  font-size: 60px;
`;

export const StarBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  padding: 0 3px;
  margin-bottom: 40px;
`;

export const Rating = styled.span`
  font-weight: 400;
  font-size: 1.3rem;
  color: #666;
  padding-bottom: 2%;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 160px;
  border: 1px solid #dcdfe4;
  border-radius: 4px;
  padding: 12px;
  resize: none;
  /* margin-bottom: 40px; */
  font-weight: 400;
  font-size: 1.6rem;
  color: #111;
  outline-color: ${subColor};
  ::placeholder {
    color: #999;
  }
`;

export const BtnBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4%;
  margin: 4rem 0 10.4rem;
`;

export const CancelBtn = styled.button`
  width: 588px;
  height: 68px;
  background: #999;
  border: none;
  border-radius: 4px;
  font-weight: 700;
  font-size: 1.8rem;
  color: #fff;
  cursor: pointer;
  ${tablet} {
    width: 90%;
  }
`;
export const RegisterBtn = styled(CancelBtn)`
  background: linear-gradient(90.25deg, #426a3a 0.19%, #2f4b2a 99.78%);
`;

export const DefaultFileInput = styled.input`
  display: none;
`;

export const Error = styled.span`
  color: red;
  font-size: 1.3rem;
  font-weight: 500;
`;
