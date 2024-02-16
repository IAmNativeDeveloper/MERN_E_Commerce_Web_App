import { Link } from "react-router-dom";
import "./WelcomeStyles.css";
import APP_TEXTS from "../../utilities/appTexts";

export default function Welcome() {
  return (
    <div className="welcomeMainContainer">
      <img
        src="/source/assets/images/logo.png"
        alt="app-logo"
        className="welcomeLogo"
      />
      <h1 className="welcomeHeading">{APP_TEXTS.welcomeTitle}</h1>
      <div className="welcomeButtonContainer">
        <Link to="/login">
          <button className="welcomeLoginButton">
            {APP_TEXTS.getStartedText}
          </button>
        </Link>
        <Link to="/home">
          <button className="welcomeJoinButton">{APP_TEXTS.joinNowText}</button>
        </Link>
      </div>
    </div>
  );
}
