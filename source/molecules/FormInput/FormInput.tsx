import "./FormInputStyles.css";
import { FormInputType } from "../../types/FormInputType";

export default function FormInput({
  leftIcon,
  leftIconAlt,
  type,
  placeholder,
  value,
  onChange,
  errorText,
  rightIcon,
  showPassword,
  togglePassword,
}: FormInputType) {
  return (
    <>
      <div className="FormInputContainer">
        <img
          src={`/source/assets/icons/${leftIcon}.png`}
          alt={leftIconAlt}
          className="FormInputIcon"
        />
        <input
          type={type}
          className="FormInput"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {rightIcon && (
          <img
            src={`/source/assets/icons/${showPassword ? "eye-off" : "eye"}.png`}
            alt="eye-icon"
            onClick={togglePassword}
            className="FormInputIcon"
          />
        )}
      </div>
      <p className="FormInputError">{errorText}</p>
    </>
  );
}
