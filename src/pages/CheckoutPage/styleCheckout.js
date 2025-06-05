import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  padding: 20px 150px;
  margin: 150px 0 80px 0;
`;

export const CheckoutForm = styled.form`
  flex: 1.2;
  background: #fff;
  border-radius: 8px;
  padding: 32px 24px 24px 24px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
  min-width: 420px;
`;

export const SectionTitle = styled.div`
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 18px;
  color: #222;
`;

export const FormRow = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
`;

export const FormGroup = styled.div`
  margin-bottom: 10px;
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-weight: 600;
  font-size: 15px;
  margin-bottom: 6px;
`;

export const Input = styled.input`
  padding: 8px 10px;
  border: 1px solid #bbb;
  border-radius: 4px;
  font-size: 15px;
  margin-bottom: 2px;
`;

export const Select = styled.select`
  padding: 8px 10px;
  border: 1px solid #bbb;
  border-radius: 4px;
  font-size: 15px;
  margin-bottom: 2px;
`;

export const CheckboxRow = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 15px;
`;

export const Textarea = styled.textarea`
  width: 100%;
  min-height: 60px;
  padding: 8px 10px;
  border: 1px solid #bbb;
  border-radius: 4px;
  font-size: 15px;
  margin-top: 6px;
`;

export const OrderSummary = styled.div`
  flex: 1;
  background: #fff;
  border-radius: 8px;
  padding: 7px 24px 24px 24px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.06);
  min-width: 340px;
  border: 1px solid #bbb;
`;

export const OrderBack = styled.p`
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const OrderTitle = styled.div`
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 18px;
  color: #222;
`;

export const OrderTable = styled.table`
  width: 100%;
  margin-bottom: 16px;
  th,
  td {
    text-align: left;
    padding: 8px 0;
    font-size: 15px;
  }
  th {
    color: #888;
    font-weight: 700;
    border-bottom: 1px solid #eee;
  }
  td {
    border-bottom: 1px solid #eee;
  }
`;

export const OrderTotalRow = styled.tr`
  font-weight: 700;
  td {
    font-size: 17px;
    color: #222;
  }
`;

export const PlaceOrderButton = styled.button`
  width: 100%;
  background: #d26b3c;
  color: #fff;
  border: none;
  padding: 14px 0;
  border-radius: 4px;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 18px;
  transition: background 0.2s;
  &:hover {
    background: #b85c2e;
  }
`;

export const PaymentNote = styled.div`
  margin-top: 14px;
  font-size: 15px;
  color: #444;
`;
