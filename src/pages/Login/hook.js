import { useState } from "react";
import { submitLogin } from "./service";
import { useNavigate } from "react-router-dom";

export function useRegisterForm() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMsg, setEmailErrorMessage] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMsg, setPasswordErrorMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // --- Email ---
  function emailHandler(e) {
    setEmail(e.target.value);
    if (emailError) {
      setEmailError(false);
      setEmailErrorMessage("");
    }
  }

  function emailErrorHandler() {
    if (!email) return;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError(true);
      setEmailErrorMessage("Please enter a valid email address");
    }
  }

  // --- Password ---
  function passwordHandler(e) {
    setPassword(e.target.value);
    if (passwordError) {
      setPasswordError(false);
      setPasswordErrorMessage("");
    }
  }

  function passwordErrorHandler() {
    if (!password) return;

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    if (!passwordRegex.test(password)) {
      setPasswordError(true);
      setPasswordErrorMessage(
        "Password must be at least 8 characters and include uppercase, lowercase, number, and special character"
      );
    }
  }

  // user Login succeed
  function clearFields() {
    try {
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  }

  // --- Submit Login ---
  async function submitLoginFormHandler() {
    try {
      const payLoad = {
        email,
        password,
      };

      await submitLogin(payLoad, clearFields, navigate, setLoading);
    } catch (error) {
      console.log(error);
    }
  }

  return {
    email,
    emailError,
    emailErrorMsg,
    emailHandler,
    emailErrorHandler,
    password,
    passwordError,
    passwordErrorMsg,
    passwordHandler,
    passwordErrorHandler,
    submitLoginFormHandler,
    navigate,
    loading,
  };
}
