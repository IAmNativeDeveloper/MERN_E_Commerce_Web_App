import { useState } from "react";
import "./LoginStyles.css";
import { validateEmail, validatePassword } from "../../utilities/validations";
import AuthHeader from "../../atoms/AuthHeader/AuthHeader";
import APP_TEXTS from "../../utilities/appTexts";
import FormInput from "../../molecules/FormInput/FormInput";
import Button from "../../atoms/Button/Button";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLoginSubmit = () => {
    if (!email || !password || emailError || passwordError) {
      setEmailError(validateEmail(email));
      setPasswordError(validatePassword(password));
    } else {
      console.info("Email:", email);
      console.info("Password:", password);
    }
  };

  return (
    <div className="LoginMainContainer">
      <img
        src="/source/assets/images/logo.png"
        alt="app-logo"
        className="LoginImage"
      />
      <div className="LoginCardContainer">
        <AuthHeader title={APP_TEXTS.loginHeader} />
        <form className="LoginFormContainer">
          <FormInput
            leftIcon="email"
            leftIconAlt="email-icon"
            type="email"
            placeholder={APP_TEXTS.emailPlaceholder}
            value={email}
            onChange={(e: { target: { value: string } }) => {
              setEmail(e.target.value);
              setEmailError(validateEmail(e.target.value));
            }}
            errorText={emailError}
          />
          <FormInput
            leftIcon="lock"
            leftIconAlt="lock-icon"
            type={showPassword ? "text" : "password"}
            placeholder={APP_TEXTS.passwordPlaceholder}
            value={password}
            onChange={(e: { target: { value: string } }) => {
              setPassword(e.target.value);
              setPasswordError(validatePassword(e.target.value));
            }}
            rightIcon
            showPassword={showPassword}
            togglePassword={togglePasswordVisibility}
            errorText={passwordError}
          />
        </form>
        <p
          className="LoginCardForgotText"
          onClick={() => navigate("/forgot-password")}
        >
          {APP_TEXTS.forgotPasswordText}
        </p>
        <Button title={APP_TEXTS.loginButton} onClick={handleLoginSubmit} />
      </div>
      <p className="LoginSignupText">
        {APP_TEXTS.signUpText}{" "}
        <span className="LoginSignupLink" onClick={() => navigate("/register")}>
          {APP_TEXTS.createAccountText}
        </span>
      </p>
    </div>
  );
}
