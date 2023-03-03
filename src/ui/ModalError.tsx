import styled from "styled-components";
import Modal from "./Modal";

const StyledModalError = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 20px;

  .modal-error__heading {
    font-size: 24px;
    color: #fe4141;
  }
`;

interface IModalErrorProps {
  closeCb: () => void;
  error: Error;
}
export default function ModalError({ closeCb, error }: IModalErrorProps) {
  return (
    <Modal closeCb={closeCb}>
      <StyledModalError>
        <h3 className="modal-error__heading">Oops...</h3>
        <p className="modal-error__message">{error.message}</p>
      </StyledModalError>
    </Modal>
  );
}
