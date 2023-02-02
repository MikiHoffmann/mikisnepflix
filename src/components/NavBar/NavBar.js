import "./NavBar.scss"
import { Link } from "react-router-dom"
import { NetflixLogo } from "../Logos/NetflixLogo"
import { useContext } from "react"
import { LangContext } from "../../redux/language/languageContext"

const NavBar = () => {
  const { language } = useContext(LangContext)
  return (
    <>
      <div className="navBarContainer">
        <Link to="/">
          <NetflixLogo />
        </Link>
        <Link to="/home">
          <span>{language === "EN" ? "Homepage" : "Homepagina"}</span>
        </Link>
      </div>
    </>
  )
}
export default NavBar
