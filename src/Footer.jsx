import whiteLogo from "/src/assets/white-logo.png";
import "/src/css/footer.css";
function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        <img src={whiteLogo} alt="" />
        <p>SyncNexa</p>
      </div>
      <section className="footer-divider">
        <div>
          <h4>Useful links</h4>
          <ul>
            <li>
              <a href="/">
                <i className="fas fa-home"></i> Home
              </a>
            </li>
            <li>
              <a href="/about">
                <i className="fas fa-users"></i> Team
              </a>
            </li>
            <li>
              <a href="/signup">
                <i className="fas fa-envelope"></i> Waitlist
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Contact Us</h4>
          <ul>
            <li>
              <a href="tel:+2349063213825">
                <i className="fas fa-phone"></i> +234 (0) 9063 2138 25
              </a>
            </li>
            <li>
              <a href="mailto:kingtony3825@gmail.com">
                <i className="fas fa-users"></i> contact@syncnexa.com
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4>Follow Us</h4>
          <ul>
            <li>
              <a href="">
                <i className="fab fa-facebook"></i> Facebook
              </a>
            </li>
            <li>
              <a href="">
                <i className="fab fa-twitter"></i> X
              </a>
            </li>
            <li>
              <a href="">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </li>
            <li>
              <a href="">
                <i className="fab fa-instagram"></i> Instagram
              </a>
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
