import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  margin: 150px 0 0 150px;
  padding: 20px 0;
  width:50%;
`;

export const Breadcrumb = styled.p`
  color: gray;
  font-size: 14px;
  margin-bottom: 10px;
`;

export const Title = styled.h2`
  font-size: 48px;
  font-weight: bold;
  color: #003366;
`;

export const FormWrapper = styled.div`
  flex: 2;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  font-size: 24px;
`;
export const TimeSlotGrid = styled.div`
  display: grid;
  gap: 5px;
  margin-top: 10px;
`;

export const TimeSlot = styled.div`
  padding: 10px 0;
  text-align: center;
  background-color: ${({ selected }) => (selected ? "#2283c5" : "#a3b1bd")}; // màu sáng hơn khi được chọn
  color: ${({ selected }) => (selected ? "#fff" : "#000")};
  border: ${({ selected }) => (selected ? "2px solid #1c7ed6" : "1px solid #999")};
  border-radius: 3px;
  cursor: pointer;
  font-size: 14px;
  font-weight: ${({ selected }) => (selected ? "bold" : "normal")};
  transition: background-color 0.3s, border 0.3s;

  &:hover {
    background-color: ${({ selected }) => (selected ? "#4dabf7" : "#91a3b0")};
  }
`;