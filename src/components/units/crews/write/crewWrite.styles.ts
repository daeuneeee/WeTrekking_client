import styled from "@emotion/styled";
import { Space, TimePicker, Slider } from "antd";
import { subColor } from "../../../../commons/styles/color";
import { mobile, tablet } from "../../../../commons/styles/media";
import dynamic from "next/dynamic";

const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export const Wrapper = styled.div`
  width: 792px;
  margin: 0 auto;
  @media ${mobile} {
    width: 90%;
  }
`;

export const Header = styled.div`
  margin-bottom: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media ${mobile} {
    margin: 0 auto;
    width: 100%;
  }
`;

export const Title = styled.span`
  font-weight: 700;
  font-size: 3.2rem;
  color: #111;
  margin-bottom: 6rem;
`;

export const ImgBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
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
  margin-bottom: 0.5rem;
`;

export const UnderLine = styled.div`
  width: 100%;
  height: 1px;
  background: #d9d9d9;
  margin-bottom: 6rem;
  @media ${mobile} {
    background: transparent;
  }
`;

export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const InputBox = styled.div`
  width: 588px;
  margin: 0 auto 2.4rem;
  display: flex;
  flex-direction: column;
  @media ${mobile} {
    width: 100%;
  }
`;

export const Label = styled.label`
  margin-bottom: 0.6rem;
  color: #999;
  font-weight: 400;
  font-size: 1.3rem;
`;

export const Input = styled.input`
  background: #fff;
  width: 100%;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  margin: 0 auto;
  padding: 1.65rem 1.2rem;
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
  @media ${mobile} {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const Date = styled(Space)`
  .ant-picker-focused {
    border-color: transparent;

    box-shadow: 0 0 0 2px ${subColor};
  }
  .ant-picker-input > input {
    font-size: 1.4rem;
  }
  .ant-picker {
    width: 285px;
    border-radius: 4px;
    padding: 1.65rem 1.2rem;
  }
  .ant-picker:hover {
    border-color: #d9d9d9;
  }
  @media ${mobile} {
    .ant-picker {
      width: 100%;
    }
  }
`;

export const Time = styled(TimePicker)`
  &.ant-picker {
    border-radius: 4px;
    :hover {
      border-color: #d9d9d9;
    }
  }
  width: 285px;
  padding: 1.65rem 1.2rem;

  &.ant-picker-focused {
    border-color: transparent;
    box-shadow: 0 0 0 2px ${subColor};
  }

  @media ${mobile} {
    width: 100%;
  }
  .ant-picker-input > input {
    font-size: 1.4rem;
  }
`;

export const BtnInputBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3.5%;
  margin-top: 1rem;
`;

export const BtnInput = styled.input`
  width: 442px;
  padding: 1.65rem 1.2rem;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
  background: #fff;
  font-weight: 400;
  font-size: 1.6rem;
  color: #111;
  :focus {
    outline-color: ${subColor};
  }
`;

export const Btn = styled.button`
  width: 138px;
  padding: 1.65rem 1.2rem;
  font-weight: 700;
  font-size: 1.4rem;
  color: #fff;
  background: linear-gradient(90.25deg, #426a3a 0.19%, #2f4b2a 99.78%);
  border-radius: 4px;
  border: none;
  cursor: pointer;
  @media ${mobile} {
    width: 40%;
  }
`;

export const GenderBox = styled.div`
  background: #fff;
  width: 100%;
  border-radius: 4px;
  color: #111;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Gender01 = styled.label`
  border: 1px solid #d9d9d9;
  width: 196px;
  padding: 1.65rem 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 1.6rem;
  color: #999;
  border-radius: 4px 0 0 4px;
  cursor: pointer;
  @media ${mobile} {
    width: 34%;
  }
`;

export const Gender02 = styled.label`
  border: 1px solid #d9d9d9;
  width: 196px;
  padding: 1.65rem 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 1.6rem;
  color: #999;
  cursor: pointer;
  @media ${mobile} {
    width: 34%;
  }
`;

export const Gender03 = styled.label`
  border: 1px solid #d9d9d9;
  width: 196px;
  padding: 1.65rem 1.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 1.6rem;
  color: #999;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  @media ${mobile} {
    width: 34%;
  }
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
  padding-left: 2.5rem;
`;

export const PeopleSlider = styled(Slider)`
  width: 80%;
  .ant-slider-track {
    background-color: ${subColor};
  }
  .ant-slider-handle {
    border: 2px solid ${subColor};
    width: 1.4rem;
    height: 1.4rem;
  }
  :hover .ant-slider-handle:not(.ant-tooltip-open) {
    border-color: ${subColor};
  }
  :hover .ant-slider-track {
    background-color: ${subColor};
  }

  @media ${mobile} {
    .ant-slider-handle {
      width: 10px;
      height: 10px;
      margin-top: -3px;
    }
  }
`;

export const People = styled.span`
  width: 40px;
  font-weight: 700;
  font-size: 1.3rem;
  color: #999;
`;

export const TextArea = styled(ReactQuill)`
  width: 100%;
  /* height: 160px; */
  padding: 1.2rem 1.2rem 2rem;
  /* min-height: 160px; */
  color: #111;
  font-weight: 400;
  font-size: 1.6rem;
  border: 1px solid #dcdfe4;
  border-radius: 4px;
  resize: none;
  margin-bottom: 1.2rem;
  :focus {
    outline-color: ${subColor};
  }
  & .ql-snow {
    border: none;
  }
  & .ql-toolbar {
    display: none;
  }
  .ql-editor {
    font-size: 1.6rem;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2.4rem;
  justify-content: center;
  align-items: center;
  margin-bottom: 10.4rem;
`;

export const CancelBtn = styled.button`
  width: 282px;
  padding: 2.5rem 1.2rem;
  background: #999;
  border: none;
  font-weight: 700;
  font-size: 1.8rem;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  @media ${mobile} {
    width: 49%;
  }
`;

export const RegisterBtn = styled.button`
  width: 282px;
  padding: 2.5rem 1.2rem;
  background: linear-gradient(90.25deg, #426a3a 0.19%, #2f4b2a 99.78%);
  border: none;
  font-weight: 700;
  font-size: 1.8rem;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  @media ${mobile} {
    width: 49%;
  }
`;

export const DefaultFileInput = styled.input`
  display: none;
`;

// export const ImgBox = styled.div`
// `

// export const ImgBox = styled.div`
// `

// export const ImgBox = styled.div`
// `
