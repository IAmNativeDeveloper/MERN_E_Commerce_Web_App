import "./WelcomeStyles.css";

export default function Welcome() {
  return (
    <div className="welcomeMainContainer">
      <img src="/source/assets/images/logo.png" alt="app-logo" />
      <h1>Welcome to Margaret</h1>
      <div className="welcomeButtonContainer">
        <button className="welcomeLoginButton">Get Started</button>
        <button className="welcomeJoinButton">Join Now</button>
      </div>
    </div>
  );
}
