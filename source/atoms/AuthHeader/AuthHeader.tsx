import "./AuthHeaderStyles.css";
import { AuthHeaderType } from "../../types/AuthHeaderType";

export default function AuthHeader({ title, marginTop }: AuthHeaderType) {
  return (
    <h1
      className="AuthHeaderText"
      style={{ marginTop: marginTop ? `${marginTop}px` : 0 }}
    >
      {title}
    </h1>
  );
}
