import { useContext } from "react";
import { NetworkContext } from "./App";
import { Link } from "react-router-dom";
import { attributes, teamShort } from "./assets/res";

function Home() {
  const { online } = useContext(NetworkContext);
  return (
    <main>
      <section className="hero">
        <h1>Unlock Your University Experience: Join the Future with</h1>
        <h1>
          <span>Sync</span>
          <span>Nexa</span>
        </h1>
        <Link>
          Join Now
          <i className="fas fa-arrow-right-long"></i>
        </Link>
        <div className="counter-section">
          <div className="c-card">
            <h2>20K</h2>
            <span>
              <i className="fas fa-users"></i> <p>Active Community</p>
            </span>
          </div>
          <div className="c-card">
            <h2>1.3K</h2>
            <span>
              <i className="fas fa-store"></i> <p>Active Marketplace</p>
            </span>
          </div>
        </div>
      </section>
      <section className="attributes">
        {attributes.map((attribute, i) => (
          <div className="attribute-card" key={i}>
            <img src={attribute.image} alt="" />
            <h2>{attribute.title}</h2>
            <p>{attribute.body}</p>
          </div>
        ))}
      </section>
      <section className="join">
        <h2>Join the SyncNexa Community</h2>
        <p>
          Join us in shaping the future of university social media. Secure your
          place on the SyncNexa waitlist today and be among the first to
          experience a transformative platform dedicated to linking minds and
          building futures.
        </p>
        <Link to="">Sign Up Now to Secure a Spot</Link>
      </section>
      <section className="founders">
        <h2>Meet Our Founders</h2>
        <p id="intro">
          SyncNexa was founded by a team of visionary entrepreneurs committed to
          revolutionizing the university experience through innovation and
          community-building
        </p>
        {teamShort.map((member, i) => (
          <section className="team-card" key={i}>
            <img src="" alt="" />
            <div>
              <strong>{member.fullName}</strong>
              <p>{member.role}</p>
              <div>
                <a href="">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
              <p className="desc">{member.short}</p>
              <Link to="" className="more">
                Learn more <i className="fas fa-chevron-right"></i>
              </Link>
            </div>
          </section>
        ))}
      </section>
    </main>
  );
}

export default Home;
