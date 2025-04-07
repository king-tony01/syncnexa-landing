import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import logo from "/src/assets/logo.png";
import { useState } from "react";
function Header() {
  const [isHidden, setIsHidden] = useState(true);
  const navigate = useNavigate();

  const toggleNav = () => {
    setIsHidden(!isHidden);
  };
  const homeF = () => {
    navigate("/");
    setIsHidden(!isHidden);
  }
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
            <NavLink to="/about" activeClassName="active">Team</NavLink>
          </li>
          <li>
            <i class="fas fa-envelope"></i>
            <NavLink to="/contact-us" activeClassName="active" >Contact Us</NavLink>
          </li>
        </ul>
        {/* <div className="navbar">
          <Link to="/signup" id="join" className="notShow">
            Join Waitlist
          </Link>
        </div> */}
          <div className="navIcon" onClick={toggleNav}>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="40px" 
            height="40px" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="#000000" 
            stroke-width="2" 
            stroke-linecap="round" 
            stroke-linejoin="round"
            className="svg"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>

          </div>
      </nav>
      <div className={`hidden-nav ${isHidden ? "" : "show"}`}>
        <img onClick={homeF} className="image" src={logo} alt="" />
        <div className="nav-exit" onClick={() => setIsHidden(true)}>
        <i className="fas fa-times"></i>
        </div>
        <ul className="mobile-menu">
          <li className="team">
            <i class="fas fa-info-circle"></i>
            <Link to="/about" onClick={toggleNav}>
              Team
            </Link>
          </li>
          <li className="contact">
            <i class="fas fa-envelope"></i>
            <Link to="/contact-us" onClick={toggleNav}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/signup" onClick={toggleNav} className="join-button">
            <i class="fas fa-lock"></i>
              Join Waitlist
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
export default Header;
