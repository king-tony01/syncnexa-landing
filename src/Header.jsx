import { Link } from "react-router-dom";
import logo from "/src/assets/logo.png";
function Header() {
  return (
    <header>
      <nav>
        <Link id="logo">
          <img src={logo} alt="" />
          <h2>SyncNexa</h2>
        </Link>
        <ul>
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
        <Link to="" id="join">
          Join Waitlist
        </Link>
      </nav>
    </header>
  );
}
export default Header;
