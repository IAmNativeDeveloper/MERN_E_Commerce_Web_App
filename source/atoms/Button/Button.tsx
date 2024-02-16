import "./ButtonStyles.css";

interface ButtonType {
  title: string;
  onClick?: () => void;
}

export default function Button({ title, onClick }: ButtonType) {
  return (
    <button className="ButtonContainer" onClick={onClick}>
      {title}
    </button>
  );
}
