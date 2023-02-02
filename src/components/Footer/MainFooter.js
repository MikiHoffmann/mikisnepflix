import "./Footer.scss"
import { useContext } from "react"
import { LangContext } from "../../redux/language/languageContext"
import { IconFacebook } from "../Icons/IconFacebook"

const MainFooter = () => {
  const { language } = useContext(LangContext)
  return (
    <>
      <div className="footerWrapper">
        <div className="footerHeader">
          <IconFacebook />
        </div>
        <div className="footerLinkWrapper">
          <span className="footerFakeLink">
            {language === "EN" ? "Audioscription" : "Audioscriptie"}
          </span>
          <span className="footerFakeLink">
            {language === "EN" ? "Relations with investors" : "Relaties met investeerders"}
          </span>
          <span className="footerFakeLink">
            {language === "EN" ? "Legal notices" : "Wettelijke bepalingen"}
          </span>
          <span className="footerFakeLink">
            {language === "EN" ? "Help centre" : "Helpcentrum"}
          </span>
          <span className="footerFakeLink">
            {language === "EN" ? "Jobs" : "Vacatures"}
          </span>
          <span className="footerFakeLink">
            {language === "EN" ? "Redeem Gift Cards" : "Cadeaubonnen gebruiken"}
          </span>
          <span className="footerFakeLink">
            {language === "EN" ? "Buy Gift Cards" : "Cadeaubonnen kopen"}
          </span>
          <span className="footerFakeLink">
            {language === "EN" ? "Ways to watch" : "Hoe kun je Netflix kijken?"}
          </span>
          <span className="footerFakeLink">
            {language === "EN" ? "Terms of use" : "Gebruiksvoorwaarden"}
          </span>
          <span className="footerFakeLink">
            {language === "EN" ? "Privacy" : "Privacy"}
          </span>
          <span className="footerFakeLink">
            {language === "EN" ? "Cookie Preferences" : "Cookie voorkeuren"}
          </span>
          <span className="footerFakeLink">
            {language === "EN" ? "Corporate information" : "Bedrijfsgegevens"}
          </span>
          <span className="footerFakeLink">
            {language === "EN" ? "Contact Us" : "Contact opnemen"}
          </span>
          <span className="footerFakeLink">
            {language === "EN" ? "Speed Test" : "Snelheidstest"}
          </span>
          <span className="footerFakeLink">
            {language === "EN" ? "Legal Notices" : "Wettelijke bepalingen"}
          </span>
          <span className="footerFakeLink">
            {language === "EN" ? "Only on Nepflix" : "Alleen op Nepflix"}
          </span>
          <span className="footerFakeLink"></span>
        </div>
      </div>
    </>
  )
}

export default MainFooter
