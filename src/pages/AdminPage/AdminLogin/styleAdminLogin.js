import styled from "styled-components";



export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #f4f6f9;
`;

export const LoginBox = styled.form`
  background: white;
  padding: 40px 30px;
  border-radius: 8px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  text-align: center;

  h2 {
    margin-bottom: 24px;
    font-size: 24px;
    color: #333;
  }
`;

export const Input = styled.input`
  width: 80%;
  padding: 12px 15px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.2);
  }
`;

export const Button = styled.button`
  width: 88%;
  padding: 12px 15px;
  border: none;
  background: #007bff;
  color: white;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;