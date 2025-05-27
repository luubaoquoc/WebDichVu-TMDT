import styled from "styled-components";

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 12px;
  width: 400px;
  position: relative;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 14px;
  font-size: 24px;
  background: none;
  border: none;
  cursor: pointer;
`;

export const Title = styled.h3`
  margin-top: 0;
  margin-bottom: 20px;
`;

export const Form = styled.form``;

export const FormGroup = styled.div`
  margin-bottom: 16px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 6px;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

export const Button = styled.button`
  background-color: #2ecc71;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  margin-top: 10px;

  &:hover {
    background-color: #27ae60;
  }
`;