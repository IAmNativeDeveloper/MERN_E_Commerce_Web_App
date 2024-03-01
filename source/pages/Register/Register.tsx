import { useState } from "react";
import {
  validateEmail,
  validateName,
  validatePhone,
  validatePassword,
} from "../../utilities/validations";
import AuthHeader from "../../atoms/AuthHeader/AuthHeader";
import APP_TEXTS from "../../utilities/appTexts";
import FormInput from "../../molecules/FormInput/FormInput";
import Button from "../../atoms/Button/Button";
import "./RegisterStyles.css";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleRegisterSubmit = () => {
    if (
      !name ||
      !email ||
      !phone ||
      !password ||
      nameError ||
      emailError ||
      phoneError ||
      passwordError
    ) {
      setNameError(validateName(name));
      setEmailError(validateEmail(email));
      setPhoneError(validatePhone(phone));
      setPasswordError(validatePassword(password));
    } else {
      console.info("Name:", name);
      console.info("Email:", email);
      console.info("Phone:", phone);
      console.info("Password:", password);
    }
  };

  return (
    <div className="RegisterMainContainer">
      <img
        src="/source/assets/images/logo.png"
        alt="app-logo"
        className="RegisterImage"
      />
      <div className="RegisterCardContainer">
        <AuthHeader title={APP_TEXTS.registerHeader} />
        <form className="RegisterFormContainer">
          <FormInput
            leftIcon="person"
            leftIconAlt="person-icon"
            type="text"
            placeholder={APP_TEXTS.namePlaceholder}
            value={name}
            onChange={(e: { target: { value: string } }) => {
              setName(e.target.value);
              setNameError(validateName(e.target.value));
            }}
            errorText={nameError}
          />
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
            leftIcon="phone"
            leftIconAlt="phone-icon"
            type="number"
            placeholder={APP_TEXTS.phonePlaceholder}
            value={phone}
            onChange={(e: { target: { value: string } }) => {
              setPhone(e.target.value);
              setPhoneError(validatePhone(e.target.value));
            }}
            errorText={phoneError}
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
        <Button
          title={APP_TEXTS.registerButton}
          onClick={handleRegisterSubmit}
        />
      </div>
      <p className="RegisterSignupText">
        {APP_TEXTS.loginText}{" "}
        <span className="RegisterSignupLink" onClick={() => navigate(-1)}>
          {APP_TEXTS.signInText}
        </span>
      </p>
    </div>
  );
}
