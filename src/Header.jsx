import { Link } from "react-router-dom";
import logo from "/src/assets/logo.png";
import { useState } from "react";
function Header() {
  const [isHidden, setIsHidden] = useState(true);

  const toggleNav = () => {
    setIsHidden(!isHidden);
  };
  return (
    <header>
      <nav>
        <Link id="logo">
          <img src={logo} alt="" />
          <h2>SyncNexa</h2>
        </Link>
        <ul className="notShow">
          <li></li>
          <li>
            <Link to="">About Us</Link>
          </li>
          <li>
            <Link to="">Contact Us</Link>
          </li>
          <li>
            <Link to="">Community</Link>
          </li>
          <li>
            <Link to="">Sponsorship</Link>
          </li>
        </ul>
        <div className="navbar">
          <Link to="" id="join" className="notShow">
            Join Waitlist
          </Link>
          <div className="navIcon" onClick={toggleNav}>        
            <svg fill="#000000" width="40px" height="40px" 
             viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h30v4H10z"/><path d="M10 22h30v4H10z"/><path d="M10 32h30v4H10z"/>
            </svg>
          </div>
        </div>
      </nav>
      <div className={`hiddenNav ${isHidden ? 'hide' : ''}`}>
        <ul>
          <div>
            <Link to={""}>About Us</Link>
          </div>
          <div>
            <Link to={""}>Contact</Link>
          </div>
          <div>
            <Link to={""}>Community</Link>
          </div>
          <div>
            <Link to={""}>Sponsorship</Link>
          </div>
        </ul>
        <Link to={""} id="joinNow">
          Join Waitlist
        </Link>
      </div>
    </header>
  );
}
export default Header;
