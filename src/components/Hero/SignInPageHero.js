import "./SignInPageHero.scss"
import HeroImage from "../../assets/images/landing-bg.jpg"
import { NetflixLogo } from "../../components/Logos/NetflixLogo"
import { LangContext } from "../../redux/language/languageContext"
import { useContext } from "react"
import { Link } from "react-router-dom"
import ButtonRed from "../ButtonRed/ButtonRed"

const SignInPageHero = () => {
  const { language } = useContext(LangContext)
  return (
    <>
      <div
        className="heroImage"
        style={{ backgroundImage: `url(${HeroImage})` }}
      ></div>
      <div className="signInBannerWrapper">
        <div className="signInBannerTitle">
          <Link to="/">
            <NetflixLogo />
          </Link>
        </div>
        <div className="signInBanner">
          <form className="signInForm">
            <h2 className="formTitle">
              {language === "EN" ? "Sign In" : "Inloggen"}
            </h2>
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
            <Link to="/home">
              <ButtonRed>
                {language === "EN" ? "Sign In" : "Inloggen"}
              </ButtonRed>
            </Link>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignInPageHero
