import FormInput from "../../../components/ui/FormInput";
import SubmitButton from "../../../components/ui/SubmitButton";
import InputDropDown from "../../../components/ui/InputDropDown";
import { useRegisterForm } from "./hook";
import { FaHome } from "react-icons/fa";
const Index = () => {
  const {
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
  } = useRegisterForm();

  return (
    <div className="w-screen h-screen flex justify-center items-center  text-black bg-black/30 ">
      <div className="p-5 rounded-[10px] text-black w-[30vw] bg-white">
        <div className="flex justify-end items-center gap-25">
          <h2 className="text-2xl font-bold text-center">Register</h2>
          <FaHome className="cursor-pointer" onClick={() => navigate("/")} />
        </div>

        {/* Name */}
        <FormInput
          name="Name"
          type="text"
          placeholder="Your name"
          state={name}
          handler={nameHandler}
          errorHandler={nameErrorHandler}
          isError={nameError}
          errorMessage={nameErrorMsg}
        />
        {/* role */}
        <InputDropDown selectedRole={selectedRole} roleHandler={roleHandler} />
        {/* Email */}
        <FormInput
          name="Email"
          type="email"
          placeholder="you@example.com"
          state={email}
          handler={emailHandler}
          errorHandler={emailErrorHandler}
          isError={emailError}
          errorMessage={emailErrorMsg}
        />
        {/* Password */}
        <FormInput
          name="Password"
          type="password"
          placeholder="Enter password"
          state={password}
          handler={passwordHandler}
          errorHandler={passwordErrorHandler}
          isError={passwordError}
          errorMessage={passwordErrorMsg}
        />

        {/* Repeat Password */}
        <FormInput
          name="Confirm Password"
          type="password"
          placeholder="Confirm Password"
          state={confirmPassword}
          handler={confirmPasswordHandler}
          errorHandler={confirmPasswordErrorHandler}
          isError={confirmPasswordError}
          errorMessage={confirmPasswordErrorMsg}
        />

        {/* Submit button */}
        <SubmitButton
          name="Register"
          loading={loading}
          disable={
            nameError ||
            emailError ||
            passwordError ||
            confirmPasswordError ||
            !name ||
            !email ||
            !password ||
            !confirmPassword
          }
          submitHandler={submitRegistrationFormHandler}
        />

        {/* Not registered yet link */}
        <h5 className="text-center mt-4 text-sm">
          Already have a account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="link link-primary"
          >
            Login
          </span>
        </h5>
      </div>
    </div>
  );
};

export default Index;
