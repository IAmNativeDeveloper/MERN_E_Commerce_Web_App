import "./ButtonStyles.css";
import { ButtonType } from "../../types/ButtonType";

export default function Button({ title, onClick }: ButtonType) {
  return (
    <button className="ButtonContainer" onClick={onClick}>
      {title}
    </button>
  );
}
