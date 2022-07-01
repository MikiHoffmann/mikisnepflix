import "./NavBar.scss"
import { Link } from "react-router-dom"
import { NetflixLogo } from "../Logos/NetflixLogo"

const NavBar = () => {
  return (
    <>
      <div className="navBarContainer">
        <Link to="/">
          <NetflixLogo />
        </Link>
        <Link to="/home">Home</Link>
      </div>
    </>
  )
}
export default NavBar
