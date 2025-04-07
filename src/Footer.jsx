import whiteLogo from "/src/assets/white-logo.png";
import "/src/css/footer.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer>
      <div className='footer-logo'>
        <img src={whiteLogo} alt='' />
        <p>SyncNexa</p>
      </div>
      <section className='footer-divider'>
        <div>
          <h4>Pages</h4>
          <ul>
            <li>
              <Link to='/'>
                <i className='fas fa-home'></i> Home
              </Link> 
            </li>
            <li>
              <Link to='/about'>
                <i className='fas fa-users'></i> Team
              </Link> 
            </li>
            {/* <li>
              <Link to='/signup'>
                <i className='fas fa-envelope'></i> Waitlist
              </Link> 
            </li> */}
          </ul>
        </div>
        <div>
          <h4>Contact Information</h4>
          <ul>
            <li>
              <Link to='tel:+2349063213825'>
                <i className='fas fa-phone'></i> Call Us
              </Link> 
            </li>
            <li>
              <Link to='mailto:kingtony3825@gmail.com'>
                <i className='fas fa-users'></i> contact@syncnexa.com
              </Link> 
            </li>
          </ul>
        </div>
        <div>
          <h4>Our Media</h4>
          <ul>
            <li>
              <Link to=''>
                <i className='fab fa-facebook'></i> Facebook
              </Link> 
            </li>
            <li>
              <Link to=''>
                <i className='fab fa-twitter'></i> X
              </Link> 
            </li>
            <li>
              <Link to=''>
                <i className='fab fa-linkedin'></i> LinkedIn
              </Link> 
            </li>
            <li>
              <Link to=''>
                <i className='fab fa-instagram'></i> Instagram
              </Link> 
            </li>
          </ul>
        </div>
      </section>
      <small>
        &copy;SyncNexa LLC. {new Date().getFullYear()}. All rights reserved.
      </small>
    </footer>
  );
}
export default Footer;
