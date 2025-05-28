import styled from "styled-components";

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

export const ModalContent = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 24px;
  width: 450px;
  max-width: 90vw;
  position: relative;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  font-size: 28px;
  border: none;
  background: none;
  cursor: pointer;
  color: #555;
  font-weight: bold;

  &:hover {
    color: #000;
  }
`;

// Phần còn lại của styled-components như Container, Title, Form, FormGroup, Label, Input, CheckboxWrapper, CheckboxLabel, Button giữ nguyên từ bạn đã có.
export const Container = styled.div`
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  margin-bottom: 24px;
  font-size: 28px;
  color: #333;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 8px;
  font-weight: 600;
  color: #555;
  font-size: 16px;
`;

export const Input = styled.input`
  padding: 10px 12px;
  font-size: 16px;
  border: 1.5px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const CheckboxLabel = styled(Label)`
  margin-bottom: 0;
`;

export const Button = styled.button`
  padding: 12px 20px;
  background-color: #007bff;
  border: none;
  color: white;
  font-size: 17px;
  font-weight: 600;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  align-self: flex-start;

  &:hover {
    background-color: #0056b3;
  }
`;

export const LoadingText = styled.p`
  padding: 20px;
  font-size: 18px;
  color: #777;
`;