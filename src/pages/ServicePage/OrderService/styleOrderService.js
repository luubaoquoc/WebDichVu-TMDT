import styled from "styled-components";

export const Container = styled.div`
  margin: 150px 0 0 150px;
  padding: 20px 0;
  width: 50%;
`;

export const Breadcrumb = styled.p`
  color: gray;
  font-size: 16px;
  margin-bottom: 10px;
`;

export const Title = styled.h2`
  font-size: 36px;
  font-weight: bold;
  color: #003366;
  margin-bottom: 20px;
`;

export const FormWrapper = styled.div`
  flex: 2;
  padding: 30px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  font-size: 16px;

  .ant-form-item-label > label {
    font-size: 18px;
    font-weight: 500;
  }

  .ant-input,
  .ant-select-selector,
  .ant-picker,
  .ant-input-textarea {
    font-size: 16px;
    padding: 10px;
  }

  .ant-checkbox-wrapper {
    font-size: 16px;
  }

  .ant-btn {
    font-size: 24px;
    padding: 8px 24px;
    width: 300px;
    font-weight: bold;
  }
`;

export const TimeSlotGrid = styled.div`
  display: grid;
  gap: 5px;
  margin-top: 10px;
`;

export const TimeSlot = styled.div`
  padding: 12px 0;
  text-align: center;
  background-color: ${({ selected }) => (selected ? "#2283c5" : "#a3b1bd")};
  color: ${({ selected }) => (selected ? "#fff" : "#000")};
  border: ${({ selected }) => (selected ? "2px solid #1c7ed6" : "1px solid #999")};
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: ${({ selected }) => (selected ? "bold" : "normal")};
  transition: background-color 0.3s, border 0.3s;

  &:hover {
    background-color: ${({ selected }) => (selected ? "#4dabf7" : "#91a3b0")};
  }
`;
