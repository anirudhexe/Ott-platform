import "./navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useContext, useState } from "react";
import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthActions";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { dispatch } = useContext(AuthContext);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <img
            src={logo}
            alt=""
          />
          <Link to="/" className="link">
            <span>Homepage</span>
          </Link>
          <Link to="/series" className="link">
            <span className="navbarmainLinks">Series</span>
          </Link>
          <Link to="/movies" className="link">
            <span className="navbarmainLinks">Movies</span>
          </Link>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <SearchIcon className="icon" />
          
          <Link to="/subscription" className="icon-link">
            <AccountCircleIcon className="icon" />
          </Link>

          <div className="profile">
            <button onClick={()=>dispatch(logout())}><PowerSettingsNewIcon style={{margin:'0 12 0'}} /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
