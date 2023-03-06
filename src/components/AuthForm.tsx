import { FirebaseError } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { auth, provider } from "../firebase";
import { useTypedDispatch } from "../hooks/reduxHooks";
import { setModal } from "../store/slices/modalSlice";
import Button from "../ui/Button";

const StyledAuthForm = styled.form`
  max-width: 400px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  row-gap: 8px;
  .input {
    width: 200px;
    height: 35px;
    padding: 2px 4px;
  }
  .field {
    display: flex;
    flex-direction: column;
  }
`;

export default function AuthForm({ type }: { type: "login" | "register" }) {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useTypedDispatch();
  const navigate = useNavigate();
  async function handleAuth(
    event: React.FormEvent | React.MouseEvent<HTMLButtonElement, MouseEvent>,
    authType: "login" | "register" | "google"
  ) {
    event.preventDefault();
    setIsLoading(true);
    try {
      switch (authType) {
        case "login": {
          await signInWithEmailAndPassword(auth, email, password);
          break;
        }
        case "register": {
          await createUserWithEmailAndPassword(auth, email, password);
          break;
        }
        case "google": {
          await signInWithPopup(auth, provider);
          break;
        }
      }
      navigate("/profile");
    } catch (err) {
      const authErr = err as FirebaseError;
      authErr.message = authErr.code
        .slice(authErr.code.indexOf("/") + 1, authErr.code.length)
        .split("-")
        .join(" ");
      dispatch(setModal({ error: authErr }));
    }
    setIsLoading(false);
  }
  return (
    <StyledAuthForm onSubmit={(event) => handleAuth(event, type)}>
      <div className="field">
        <label htmlFor="email">E-mail</label>
        <input
          id="email"
          type="email"
          required
          className="input"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="field">
        <label htmlFor="password">Password</label>
        <input
          minLength={6}
          id="password"
          type="password"
          required
          className="password input"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <Button type="submit" isLoading={isLoading}>
        {type}
      </Button>
      <Button
        onClick={(event) => handleAuth(event, "google")}
        isLoading={isLoading}
      >
        Sign in with Google
      </Button>
      {type === "login" && (
        <div className="register-proposition">
          Don't have an account yet?{" "}
          <Link className="link" to={"/register"}>
            Register
          </Link>
        </div>
      )}
      {type === "register" && (
        <div className="register-proposition">
          Already have an account? <Link to={"/login"}>Login</Link>
        </div>
      )}
    </StyledAuthForm>
  );
}
