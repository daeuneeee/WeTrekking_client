import styled from "@emotion/styled";
import { Space, TimePicker, Slider } from "antd";
import { subColor } from "../../../../commons/styles/color";

export const Wrapper = styled.div`
  width: 792px;
  margin: 0 auto;
`;

export const Header = styled.div`
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.span`
  font-weight: 700;
  font-size: 3.2rem;
  color: #111;
  margin-bottom: 60px;
`;

export const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
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
`;

export const MainImg = styled.img`
  width: 12.5%;
  margin-bottom: 10px;
`;

export const SubImgBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between; ;
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

export const UnderLine = styled.div`
  width: 100%;
  height: 1px;
  background: #d9d9d9;
  margin-bottom: 60px;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputBox = styled.div`
  width: 588px;
  margin: 0 auto 24px;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 6px;
  color: #999;
  font-weight: 400;
  font-size: 1.3rem;
`;

export const Input = styled.input`
  background: #fff;
  width: 100%;
  height: 52px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  margin: 0 auto;
  padding: 12px;
  font-weight: 400;
  font-size: 1.6rem;
  color: #111;
  :focus {
    outline-color: ${subColor};
  }
`;

export const DateBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Date = styled(Space)`
  .ant-picker-focused {
    border-color: ${subColor};
    box-shadow: 0 0 0 1px ${subColor};
  }
  .ant-picker {
    height: 52px;
    width: 285px;
    border-radius: 4px;
  }
  .ant-picker:hover {
    border-color: #d9d9d9;
  }
`;

export const Time = styled(TimePicker)`
  &.ant-picker {
    border-radius: 4px;
  }
  height: 52px;
  width: 285px;
  &.ant-picker-focused {
    border-color: ${subColor};
    box-shadow: 0 0 0 1px ${subColor};
  }
  :hover {
    border-color: #d9d9d9;
  }
`;

export const AddressBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3.5%;
  margin-top: 10px;
`;

export const AddressDetail = styled.input`
  width: 442px;
  height: 52px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  background: #fff;
  padding: 12px;
  font-weight: 400;
  font-size: 1.6rem;
  color: #111;
  :focus {
    outline-color: ${subColor};
  }
`;

export const AddressBtn = styled.button`
  width: 138px;
  height: 52px;
  font-weight: 700;
  font-size: 1.4rem;
  color: #fff;
  background: linear-gradient(90.25deg, #426a3a 0.19%, #2f4b2a 99.78%);
  border-radius: 4px;
  border: none;
  cursor: pointer;
`;

export const GenderBox = styled.div`
  background: #fff;
  width: 100%;
  height: 52px;
  border-radius: 4px;
  color: #111;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Gender01 = styled.label`
  border: 1px solid #d9d9d9;
  width: 196px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 1.6rem;
  color: #999;
  border-radius: 4px 0 0 4px;
  cursor: pointer;
`;

export const Gender02 = styled.label`
  border: 1px solid #d9d9d9;
  width: 196px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 1.6rem;
  color: #999;
  cursor: pointer;
`;

export const Gender03 = styled.label`
  border: 1px solid #d9d9d9;
  width: 196px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 1.6rem;
  color: #999;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
`;

export const RadioInput = styled.input`
  display: none;
`;

export const PeopleBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3%;
  width: 100%;
  height: 52px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  justify-content: center;
`;

export const PeopleSlider = styled(Slider)`
  .ant-slider-track {
    background-color: ${subColor};
  }
  .ant-slider-handle {
    border: 2px solid ${subColor};
  }
  :hover .ant-slider-handle:not(.ant-tooltip-open) {
    border-color: ${subColor};
  }
  :hover .ant-slider-track {
    background-color: ${subColor};
  }
`;

export const People = styled.span`
  width: 40px;
  font-weight: 700;
  font-size: 1.3rem;
  color: #999;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 160px;
  color: #111;
  font-weight: 400;
  font-size: 1.6rem;
  border: 1px solid #dcdfe4;
  border-radius: 4px;
  resize: none;
  padding: 12px;
  margin-bottom: 12px;
  :focus {
    outline-color: ${subColor};
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  justify-content: center;
  align-items: center;
  margin-bottom: 104px;
`;

export const CancelBtn = styled.button`
  width: 282px;
  height: 64px;
  background: #999;
  border: none;
  font-weight: 700;
  font-size: 1.8rem;
  color: #fff;
  border-radius: 4px;
`;

export const RegisterBtn = styled.button`
  width: 282px;
  height: 64px;
  background: linear-gradient(90.25deg, #426a3a 0.19%, #2f4b2a 99.78%);
  border: none;
  font-weight: 700;
  font-size: 1.8rem;
  color: #fff;
  border-radius: 4px;
`;

// export const ImgBox = styled.div`
// `

// export const ImgBox = styled.div`
// `

// export const ImgBox = styled.div`
// `
