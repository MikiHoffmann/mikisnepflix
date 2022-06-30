import "./SignInPageHero.scss";
import HeroImage from "../../assets/images/landing-bg.jpg";

import { LangContext } from "../../redux/language/languageContext";
import { useContext } from "react";
import ButtonRed from "../ButtonRed/ButtonRed";

const SignInPageHero = () => {
  const { language } = useContext(LangContext);
  return (
    <>
      <div
        className="heroImage"
        style={{ backgroundImage: `url(${HeroImage})` }}
      ></div>
      <div className="signInBannerWrapper">
        <div className="signInBanner">
          <form className="signInForm">
            <h2 className="formTitle">{language === "EN" ? "Sign In" : "Inloggen"}</h2>
            <div className="inputField">
              <span>
                {language === "EN"
                  ? "email address or phone number"
                  : "E-mailadres of telefoonnummer"}
              </span>
              <input type="text" placeholder="mymail@mail.com" />
            </div>
            <div className="inputField">
              <span>{language === "EN" ? "Password" : "Wachtwoord"}</span>
              <input
                type="text"
                placeholder={language === "EN" ? "Password" : "Wachtwoord"}
              />
            </div>
            <ButtonRed>{language === "EN" ? "Sign In" : "Inloggen"}</ButtonRed>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignInPageHero;
