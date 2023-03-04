import styled from "styled-components";
import AuthForm from "../components/AuthForm";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";

const StyledAuthPage = styled.div``;
export default function AuthPage({ type }: { type: "login" | "register" }) {
  return (
    <StyledAuthPage>
      <Header />
      <Main>
        <AuthForm type={type} />
      </Main>
      <Footer />
    </StyledAuthPage>
  );
}
