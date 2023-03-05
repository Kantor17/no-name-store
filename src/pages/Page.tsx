import styled from "styled-components";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import { useTypedSelector } from "../hooks/reduxHooks";
import Modal from "../ui/Modal";

const StyledPage = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export default function Page({ children }: { children: React.ReactElement }) {
  const modalInfo = useTypedSelector((state) => state.modal.modal);
  return (
    <StyledPage>
      <Header />
      <Main>
        {children}
        {modalInfo && (
          <Modal modalInfo={modalInfo}/>
        )}
      </Main>
      <Footer />
    </StyledPage>
  );
}
