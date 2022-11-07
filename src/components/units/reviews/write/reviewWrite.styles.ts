import styled from "@emotion/styled";
import { Rate } from "antd";
import { subColor } from "../../../../commons/styles/color";

export const Wrapper = styled.div`
  width: 588px;
  margin: 0 auto;
`;

export const Container = styled.div`
  width: 65.31%;
  margin: 0 auto;
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
  gap: 12px;
  margin-bottom: 60px;
`;

export const MainImgBox = styled.div`
  width: 384px;
  height: 316px;
  background: #fafafa;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const MainImg = styled.img`
  width: 12.5%;
  margin-bottom: 10px;
`;

export const SubImgBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const SubImg = styled.div`
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
  margin-bottom: 24px;
  outline-color: ${subColor};

  ::placeholder {
    color: #999;
  }
`;

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
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
  margin-bottom: 40px;
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
  margin-bottom: 104px;
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
`;
export const RegisterBtn = styled(CancelBtn)`
  background: linear-gradient(90.25deg, #426a3a 0.19%, #2f4b2a 99.78%);
`;
