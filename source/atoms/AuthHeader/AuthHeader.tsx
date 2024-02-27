import "./AuthHeaderStyles.css";
import { AuthHeaderType } from "../../types/AuthHeaderType";

export default function AuthHeader({ title }: AuthHeaderType) {
  return <h1 className="AuthHeaderText">{title}</h1>;
}
