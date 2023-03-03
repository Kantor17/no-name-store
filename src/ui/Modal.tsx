import closeIcon from "../assets/close.svg";
import styled from "styled-components";

const StyledModal = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  color: #fff;
  cursor: pointer;

  .modal__content {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 40%;
    min-width: 60%;
    max-width: 90%;
    padding: 20px;
    border-radius: 12px;
    background-color: #26272b;
    cursor: default;
    animation: grow 0.3s;
  }

  .modal__close-btn {
    position: absolute;
    top: 12px;
    right: 12px;
    width: 30px;
    height: 30px;
    background-color: inherit;
    cursor: pointer;
  }

  @keyframes grow {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
`;

interface IModalProps {
  closeCb: () => void;
  children: React.ReactNode;
}

export default function Modal({ closeCb, children }: IModalProps) {
  return (
    <StyledModal onClick={closeCb}>
      <div
        className="modal__content"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="modal__close-btn" onClick={closeCb}>
          <img src={closeIcon} alt="close" className="modal__close-icon" />
        </button>
        {children}
      </div>
    </StyledModal>
  );
}
