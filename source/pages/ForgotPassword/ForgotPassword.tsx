import { useState } from "react";
import { validateEmail } from "../../utilities/validations";
import AuthHeader from "../../atoms/AuthHeader/AuthHeader";
import APP_TEXTS from "../../utilities/appTexts";
import FormInput from "../../molecules/FormInput/FormInput";
import Button from "../../atoms/Button/Button";
import "./ForgotPasswordStyles.css";
import CommonHeader from "../../molecules/CommonHeader/CommonHeader";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const navigate = useNavigate();

  const handleForgotPasswordSubmit = () => {
    if (!email || emailError) {
      setEmailError(validateEmail(email));
    } else {
      console.info("Email:", email);
      navigate("/reset-password");
    }
  };

  return (
    <div className="ForgotPasswordMainContainer">
      <img
        src="/source/assets/images/logo.png"
        alt="app-logo"
        className="ForgotPasswordImage"
      />
      <div className="ForgotPasswordCardContainer">
        <CommonHeader title={APP_TEXTS.forgotPasswordPageHeader} />
        <AuthHeader title={APP_TEXTS.forgotPasswordHeader} marginTop={40} />
        <form className="ForgotPasswordFormContainer">
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
        </form>
        <Button
          title={APP_TEXTS.forgotPasswordButton}
          onClick={handleForgotPasswordSubmit}
        />
      </div>
    </div>
  );
}
