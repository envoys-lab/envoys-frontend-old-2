import styled, { DefaultTheme } from "styled-components";

const Input = styled.input`
  background-color: #F5F6F7;
  border: 0;
  border-radius: 36px;
//   color: ;
  display: block;
  font-size: 16px;
  outline: 0;
  padding: 0 16px;
  width: 100%;
  height: 44px;
  // border: 1px solid green;
  &::placeholder {
    color: #0F2B46;
    opacity: 0.3;
  }
  &:disabled {
    background-color: gray;
    box-shadow: none;
    // color: black;
    cursor: not-allowed;
  }
  &:focus:not(:disabled) {
    box-shadow: black;
  }
`;


export default Input;