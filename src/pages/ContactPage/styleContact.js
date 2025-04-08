import styled from 'styled-components';

export const PageContainer = styled.div`
  padding: 20px 150px;
    margin-top: 150px;
`;

export const Breadcrumb = styled.p`
  color: gray;
  font-size: 14px;
  margin-bottom: 10px;
`;

export const Title = styled.h1`
  font-size: 28px;
  color: #333;
  margin-bottom: 30px;
`;

export const FormWrapper = styled.div`
  display: flex;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FormLeft = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-weight: 500;
  margin: 10px 0 5px;
  font-size: 16px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  margin-top: 15px;
  width: 100px;
  padding: 10px;
  background-color: #2c3e50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #34495e;
  }
`;

export const FormRight = styled.div`
  flex: 1;
`;

export const MapIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
`;
