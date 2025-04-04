import { Link, NavLink } from "react-router-dom";
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
        <Link id="logo" onClick={() => setIsHidden(true)}>
          <img src={logo} alt="" />
          <h2>SyncNexa</h2>
        </Link>
        <ul className="notShow">
          <li></li>
          <li>
            <i class="fas fa-info-circle"></i>
            <NavLink to="/about" activeClassName="active">About Us</NavLink>
          </li>
          <li>
            <i class="fas fa-envelope"></i>
            <NavLink to="/contact-us" activeClassName="active" >Contact Us</NavLink>
          </li>
          {/* <li>
            <Link to="">Community</Link>
          </li>
          <li>
            <Link to="">Sponsorship</Link>
          </li> */}
        </ul>
        {/* <div className="navbar">
          <Link to="/signup" id="join" className="notShow">
            Join Waitlist
          </Link>
        </div> */}
      </nav>
      {/* <div className="navIcon" onClick={toggleNav}>
            <svg
              fill="#000000"
              width="40px"
              height="40px"
              viewBox="0 0 50 50"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 12h30v4H10z" />
              <path d="M10 22h30v4H10z" />
              <path d="M10 32h30v4H10z" />
            </svg>
          </div> */}
      <div className={`hiddenNav ${isHidden ? "hide" : ""}`}>
        <ul>
          <div>
            <Link to={"/about"} onClick={toggleNav}>
              About Us
            </Link>
          </div>
          <div>
            <Link to={"/contact-us"} onClick={toggleNav}>
              Contact Us
            </Link>
          </div>
          {/* <div>
            <Link to={""} onClick={toggleNav}>
              Community
            </Link>
          </div>
          <div>
            <Link to={""} onClick={toggleNav}>
              Sponsorship
            </Link>
          </div> */}
        </ul>
        <Link to={"/signup"} id="joinNow" onClick={toggleNav}>
          Join Waitlist
        </Link>
      </div>
    </header>
  );
}
export default Header;
