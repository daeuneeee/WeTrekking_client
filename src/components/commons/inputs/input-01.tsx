import styled from "@emotion/styled";
import { ChangeEvent } from "react";
import { mainColor } from "../../../commons/styles/color";

const InputStyle01 = styled.input`
  display: block;
  width: 100%;
  height: 5.2rem;
  border: 1px solid #d9d9d9;
  padding: 0 1.2rem;
  border-radius: 4px;
  font-size: 1.6rem;
  font-weight: 400;
  color: #999;
  :focus {
    outline-color: ${mainColor};
  }
`;

interface IInputProps01 {
  type: string;
  placeholder: string;
  maxLength: number;
  name: string;
  register: any;
  isUpdate: boolean;
}

const Input01 = (props: IInputProps01) => {
  return (
    <InputStyle01
      type={props.type}
      placeholder={props.placeholder}
      maxLength={props.maxLength}
      {...props.register(props.name)}
      disabled={props.isUpdate ? true : false}
    />
  );
};

export default Input01;
