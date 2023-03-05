import styled from "styled-components";
import AuthForm from "../components/AuthForm";
import Page from "./Page";

const StyledAuthPage = styled.div``;
export default function AuthPage({ type }: { type: "login" | "register" }) {
  return (
    <StyledAuthPage className="page-wrapper">
      <Page>
        <AuthForm type={type} />
      </Page>
    </StyledAuthPage>
  );
}
