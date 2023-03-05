import styled from "styled-components";
import { useTypedSelector } from "../hooks/reduxHooks";
import avatarImg from "../assets/avatar.png";
import Button from "../ui/Button";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import Page from "./Page";

const StyledProfile = styled.div`
  .user-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    row-gap: 8px;
  }
  .avatar {
    display: block;
    width: 180px;
    height: 180px;
  }
`;

export default function Profile() {
  const user = useTypedSelector((state) => state.auth.user);
  return (
    <StyledProfile className="page-wrapper">
      <Page>
        <div className="user-info">
          <img src={avatarImg} alt="Avatar" className="avatar" />
          <p className="email">{user?.email}</p>
          <Button onClick={() => signOut(auth)}>Logout</Button>
        </div>
      </Page>
    </StyledProfile>
  );
}
