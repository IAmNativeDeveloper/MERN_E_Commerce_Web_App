import { useNavigate } from "react-router-dom";
import { CommonHeaderType } from "../../types/CommonHeaderType";
import "./CommonHeaderStyles.css";

export default function CommonHeader({ title }: CommonHeaderType) {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="CommonHeaderContainer">
      <img
        src="/source/assets/icons/arrow-left.png"
        alt="back-icon"
        className="CommonHeaderBackIcon"
        onClick={goBack}
      />
      <p className="CommonHeaderText">{title}</p>
    </div>
  );
}
