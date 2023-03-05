import closeIcon from "../assets/close.svg";
import styled from "styled-components";
import { useTypedDispatch } from "../hooks/reduxHooks";
import { setModal } from "../store/slices/modalSlice";
import { ModalInfo } from "../types";

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
    flex-direction: column;
    justify-content: space-between;
    row-gap: 12px;
    min-height: 30%;
    min-width: 30%;
    max-width: 90%;
    padding: 20px;
    border-radius: 12px;
    background-color: #26272b;
    cursor: default;
    animation: grow 0.3s;
  }
  .modal__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1 1 80%;
    row-gap: 8px;
  }
  .modal__buttons {
    display: flex;
    justify-content: center;
    column-gap: 8px;
  }
  .modal__button {
    width: 120px;
    height: 30px;
    background-color: inherit;
    color: inherit;
    border: 2px solid #fff;
    border-radius: 12px;
    transition: 0.2s;
    text-transform: uppercase;
    &:hover {
      background-color: #bbb;
    }
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
  .modal__message {
    text-align: center;
  }
  .modal-error {
    display: flex;
    align-items: center;
    flex-direction: column;
    row-gap: 20px;
    &__heading {
      font-size: 24px;
      color: #fe4141;
    }
    &__message {
      &::first-letter {
        text-transform: uppercase;
      }
    }
  }
`;

export default function Modal({
  modalInfo,
}: {
  modalInfo: ModalInfo;
  children?: React.ReactElement;
}) {
  const dispatch = useTypedDispatch();
  function onClose() {
    if (modalInfo.closeCb) modalInfo.closeCb();
    dispatch(setModal(null));
  }
  return (
    <StyledModal onClick={onClose}>
      <div
        className="modal__content"
        onClick={(event) => event.stopPropagation()}
      >
        <button className="modal__close-btn" onClick={onClose}>
          <img src={closeIcon} alt="close" className="modal__close-icon" />
        </button>
        <div className="modal__info">
          {modalInfo.error && (
            <div className="modal-error">
              <h3 className="modal-error__heading">Oops...</h3>
              <p className="modal-error__message">{modalInfo.error?.message}</p>
            </div>
          )}
          {modalInfo.message && (
            <p className="modal__message">{modalInfo.message}</p>
          )}
        </div>
        {modalInfo.buttons && (
          <div className="modal__buttons">
            {modalInfo.buttons.map((button) => (
              <button
                className="modal__button"
                onClick={() => {
                  button.action();
                  onClose();
                }}
                key={button.title}
              >
                {button.title}
              </button>
            ))}
          </div>
        )}
      </div>
    </StyledModal>
  );
}
