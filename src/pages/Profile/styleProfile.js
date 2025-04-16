import styled from "styled-components";

export const ProfileContainer = styled.div`
  padding: 40px 150px;
  background-color: #fff;
  min-height: 500px;
  margin: 150px;
`;

export const ProfileTitle = styled.h2`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
  color: #1d3557;
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
  font-weight: 600;
  margin-bottom: 8px;
  font-size: 16px;
`;

export const Input = styled.input`
  padding: 10px 14px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 6px;

  &:focus {
    border-color: #1d3557;
    outline: none;
  }
`;

export const SubmitButton = styled.button`
  padding: 12px 20px;
  font-size: 16px;
  background-color: #1d3557;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  align-self: flex-start;

  &:hover {
    background-color: #457b9d;
  }
`;
