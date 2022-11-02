import styled from "@emotion/styled";

const InputStyle01 = styled.input`
  display: block;
  width: 100%;
  height: 52px;
  border: 1px solid #d9d9d9;
  padding: 0 12px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 400;
  color: #999;
  outline: none;
`;

interface IInputProps01 {
  type: string;
  placeholder: string;
  maxLength: number;
}

const Input01 = (props: IInputProps01) => {
  return (
    <InputStyle01
      type={props.type}
      placeholder={props.placeholder}
      maxLength={props.maxLength}
    />
  );
};

export default Input01;
