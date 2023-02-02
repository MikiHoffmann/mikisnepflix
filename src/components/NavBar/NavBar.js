import "./NavBar.scss"
import { Link } from "react-router-dom"
import { NepflixLogo } from "../Logos/NepflixLogo"
import { useContext } from "react"
import { LangContext } from "../../redux/language/languageContext"
import { useState } from "react"

const NavBar = () => {
  const { language } = useContext(LangContext)
  const [isScrolled, setIsScrolled] = useState(false)
  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? true : false)
    return () => (window.onscroll = 0)
  }
  
  return (
    <>
      <div className={isScrolled ? "navBarContainer" : "navBarContainer isScrolled"}>
        <Link to="/">
          <NepflixLogo />
        </Link>
        <Link to="/home">
          <span>{language === "EN" ? "Homepage" : "Homepagina"}</span>
        </Link>
        <Link to="/movies">
          <span>{language === "EN" ? "Movies" : "Films"}</span>
        </Link>
        <Link to="/series">
          <span>Series</span>
        </Link>
        <Link to="/mylist">
          <span>{language === "EN" ? "My list" : "Mijn lijst"}</span>
        </Link>
      </div>
    </>
  )
}
export default NavBar
