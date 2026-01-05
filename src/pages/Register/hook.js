import { useState } from "react";
import { submitLogin } from "./service";
import { useNavigate } from "react-router-dom";

export function useRegisterForm() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [nameErrorMsg, setNameErrorMessage] = useState("");

  const [selectedRole, setSelectedRole] = useState<string>("User");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [emailErrorMsg, setEmailErrorMessage] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [passwordErrorMsg, setPasswordErrorMessage] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [confirmPasswordErrorMsg, setConfirmPasswordErrorMessage] =
    useState("");

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // --- Name ---
  function nameHandler(e) {
    setName(e.target.value);
    if (nameError) {
      setNameError(false);
      setNameErrorMessage("");
    }
  }

  function nameErrorHandler() {
    if (!name) return;
    if (name.trim().length < 3) {
      setNameError(true);
      setNameErrorMessage("Name must be at least 3 characters long");
    }
  }

  // --- Role ---
  function roleHandler(role) {
    setSelectedRole(role);
  }
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

  // --- Confirm Password ---
  function confirmPasswordHandler(e) {
    setConfirmPassword(e.target.value);
    if (confirmPasswordError) {
      setConfirmPasswordError(false);
      setConfirmPasswordErrorMessage("");
    }
  }

  function confirmPasswordErrorHandler() {
    if (!confirmPassword) return;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    if (!passwordRegex.test(confirmPassword)) {
      setConfirmPasswordError(true);
      setConfirmPasswordErrorMessage(
        "Confirm password must meet the password requirements"
      );
    } else if (password !== confirmPassword) {
      setConfirmPasswordError(true);
      setConfirmPasswordErrorMessage("Passwords do not match");
    }
  }
  // user registreation succeed
  function registrationSucceed() {
    try {
      setName("");
      setEmail("");
      setSelectedRole("User");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.log(error);
    }
  }
  // --- Submit registration ---
  async function submitRegistrationFormHandler() {
    try {
      const payLoad = {
        name,
        role: selectedRole.toLowerCase(),
        email,
        password,
      };
      await submitLogin(payLoad, registrationSucceed, navigate, setLoading);
    } catch (error) {
      console.log(error);
    }
  }

  return {
    name,
    nameError,
    nameErrorMsg,
    nameHandler,
    nameErrorHandler,
    selectedRole,
    roleHandler,
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
    confirmPassword,
    confirmPasswordError,
    confirmPasswordErrorMsg,
    confirmPasswordHandler,
    confirmPasswordErrorHandler,
    submitRegistrationFormHandler,
    navigate,
    loading,
  };
}
