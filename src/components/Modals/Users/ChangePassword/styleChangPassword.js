import styled from "styled-components";

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 30px;
  border-radius: 12px;
  width: 400px;
  position: relative;
  font-size: 16px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 15px;
  border: none;
  background: none;
  font-size: 20px;
  cursor: pointer;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.label`
  margin-bottom: 5px;
  display: block;
`;

export const Input = styled.input`
  padding: 8px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Button = styled.button`
  padding: 10px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background: #0056b3;
  }
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 0.9em;
  margin-top: 5px;
`;
