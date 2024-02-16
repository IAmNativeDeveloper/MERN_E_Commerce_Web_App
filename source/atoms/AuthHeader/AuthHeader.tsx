import "./AuthHeaderStyles.css";

interface AuthHeaderType {
  title: string;
}

export default function AuthHeader({ title }: AuthHeaderType) {
  return <h1 className="AuthHeaderText">{title}</h1>;
}
