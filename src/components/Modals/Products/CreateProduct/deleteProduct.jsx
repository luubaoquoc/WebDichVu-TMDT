import React from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex; align-items: center; justify-content: center;
  z-index: 1000;
`;

const ModalBox = styled.div`
  background: white;
  padding: 30px;
  border-radius: 8px;
  width: 400px;
  max-width: 90%;
  text-align: center;
`;

const ModalTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 20px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  color: white;
  background-color: ${(props) => (props.danger ? "#e74c3c" : "#3498db")};

  &:hover {
    opacity: 0.9;
  }
`;

const ConfirmDeleteModal = ({ onClose, onConfirm }) => {
    return (
        <ModalOverlay>
            <ModalBox>
                <ModalTitle>Bạn có chắc muốn xóa sản phẩm này?</ModalTitle>
                <ButtonGroup>
                    <Button onClick={onClose}>Hủy</Button>
                    <Button danger onClick={onConfirm}>Xóa</Button>
                </ButtonGroup>
            </ModalBox>
        </ModalOverlay>
    );
};

export default ConfirmDeleteModal;
