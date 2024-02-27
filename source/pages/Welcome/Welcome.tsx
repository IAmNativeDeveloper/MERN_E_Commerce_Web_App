import { Link } from "react-router-dom";
import "./WelcomeStyles.css";
import APP_TEXTS from "../../utilities/appTexts";

export default function Welcome() {
  return (
    <div className="WelcomeMainContainer">
      <img
        src="/source/assets/images/logo.png"
        alt="app-logo"
        className="WelcomeLogo"
      />
      <h1 className="WelcomeHeading">{APP_TEXTS.welcomeTitle}</h1>
      <div className="WelcomeButtonContainer">
        <Link to="/login">
          <button className="WelcomeLoginButton">
            {APP_TEXTS.getStartedText}
          </button>
        </Link>
        <Link to="/home">
          <button className="WelcomeJoinButton">{APP_TEXTS.joinNowText}</button>
        </Link>
      </div>
    </div>
  );
}
