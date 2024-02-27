import { ChangeEvent } from "react";

export interface FormInputType {
  leftIcon: string;
  leftIconAlt: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  errorText: string;
  rightIcon?: boolean;
  showPassword?: boolean;
  togglePassword?: () => void;
}
