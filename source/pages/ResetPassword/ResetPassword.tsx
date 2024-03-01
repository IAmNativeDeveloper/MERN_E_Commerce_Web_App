import { useState } from "react";
import { validatePassword, validateOtp } from "../../utilities/validations";
import AuthHeader from "../../atoms/AuthHeader/AuthHeader";
import APP_TEXTS from "../../utilities/appTexts";
import FormInput from "../../molecules/FormInput/FormInput";
import Button from "../../atoms/Button/Button";
import "./ResetPasswordStyles.css";
import CommonHeader from "../../molecules/CommonHeader/CommonHeader";

export default function ResetPassword() {
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");

  const [newPassword, setNewPassword] = useState("");
  const [newPasswordError, setNewPasswordError] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleResetPasswordSubmit = () => {
    if (!otp || otpError || !newPassword || newPasswordError) {
      setOtpError(validateOtp(otp));
      setNewPasswordError(validatePassword(newPassword));
    } else {
      console.info("OTP:", otp);
      console.info("New Password:", newPassword);
    }
  };

  return (
    <div className="ResetPasswordMainContainer">
      <img
        src="/source/assets/images/logo.png"
        alt="app-logo"
        className="ResetPasswordImage"
      />
      <div className="ResetPasswordCardContainer">
        <CommonHeader title={APP_TEXTS.resetPasswordPageHeader} />
        <AuthHeader title={APP_TEXTS.resetPasswordHeader} marginTop={40} />
        <form className="ResetPasswordFormContainer">
          <FormInput
            leftIcon="lock"
            leftIconAlt="otp-icon"
            type="number"
            placeholder={APP_TEXTS.otpPlaceholder}
            value={otp}
            onChange={(e: { target: { value: string } }) => {
              setOtp(e.target.value);
              setOtpError(validateOtp(e.target.value));
            }}
            errorText={otpError}
          />
          <FormInput
            leftIcon="lock"
            leftIconAlt="lock-icon"
            type={showPassword ? "text" : "password"}
            placeholder={APP_TEXTS.passwordPlaceholder}
            value={newPassword}
            onChange={(e: { target: { value: string } }) => {
              setNewPassword(e.target.value);
              setNewPasswordError(validatePassword(e.target.value));
            }}
            rightIcon
            showPassword={showPassword}
            togglePassword={togglePasswordVisibility}
            errorText={newPasswordError}
          />
        </form>
        <Button
          title={APP_TEXTS.resetPasswordButton}
          onClick={handleResetPasswordSubmit}
        />
      </div>
    </div>
  );
}
