import "./NavBar.scss";
import { Link } from "react-router-dom";
import { NetflixLogo } from "../Logos/NetflixLogo";

const NavBar = () => {
  return (
    <>
      <div className="navBarContainer">
        <NetflixLogo />
        <Link to="/">
            Home
        </Link>
      </div>
    </>
  );
};
export default NavBar;
