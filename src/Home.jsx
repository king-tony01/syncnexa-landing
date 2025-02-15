import { useContext, useState } from "react";
import { NetworkContext } from "./App";
import { Link } from "react-router-dom";
import { attributes, teamShort } from "./assets/res";
import x from "./assets/x.png";
import linkedin from "./assets/linkedin.png";
import facebook from "./assets/facebook.png";
import instagram from "./assets/instagram.png";
import form from "./assets/form.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Alert from "./Alert";

function Home() {
  const { online } = useContext(NetworkContext);
  const [user, setUser] = useState({
    email: "",
    first: "",
    last: "",
    agree: false,
  });
  const [message, setMessage] = useState({
    message: "",
    alertType: "",
    icon: "",
  });

  async function sendWaitlist(event) {
    event.preventDefault();
    try {
      if (!online) {
        setMessage({
          message:
            "Please connect to a network first before attempting this operation!",
          alertType: "warning",
          icon: "fa-exclamation-triangle",
        });
        count();
        return;
      }
      if (!Object.values(user).every((input) => input !== "")) {
        setMessage({
          message: "Please fill all field",
          alertType: "error",
          icon: "fa-xmark-circle",
        });
        count();
        return;
      }
      const response = await fetch(`${location.origin}/api/waitlist`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      const responseData = await response.json();
      if (responseData.stat && responseData.code == 1) {
        setUser({ email: "", first: "", last: "", agree: false });
        setMessage({
          message: responseData.message,
          alertType: "success",
          icon: "fa-check-circle",
        });
        count();
      } else if (responseData.code == 2) {
        setMessage({
          message: responseData.message,
          alertType: "warning",
          icon: "fa-exclamation-triangle",
        });
        count();
      } else {
        setMessage({
          message: responseData.message,
          alertType: "error",
          icon: "fa-xmark-circle",
        });
        count();
      }
    } catch (err) {
      console.log(err);
    }
  }

  function count() {
    document.querySelector(".alert").classList.add("active");
    let time = setInterval(() => {
      document.querySelector(".alert").classList.remove("active");
      clearInterval(time);
    }, 5000);
  }

  useEffect(() => {
    AOS.init({
      duration: 1000, // Customize the animation duration (in milliseconds)
    });
  }, []);
  return (
    <main>
      <Alert {...message} />
      <section className="hero">
        <h1>Unlock Your University Experience: Join the Future with</h1>
        <h1>
          <span>Sync</span>
          <span>Nexa</span>
        </h1>
        <Link data-aos="fade-up" data-aos-delay="10">
          Join Now
          <i className="fas fa-arrow-right-long"></i>
        </Link>
        <div className="counter-section">
          <div className="c-card" data-aos="fade-right" data-aos-delay="10">
            <h2>20K</h2>
            <span>
              <i className="fas fa-users"></i> <p>Active Community</p>
            </span>
          </div>
          <div className="c-card" data-aos="fade-left" data-aos-delay="10">
            <h2>1.3K</h2>
            <span>
              <i className="fas fa-store"></i> <p>Active Marketplace</p>
            </span>
          </div>
        </div>
      </section>
      <section className="attributes">
        {attributes.map((attribute, i) => (
          <div
            className="attribute-card"
            key={i}
            data-aos="fade-up"
            data-aos-delay={`${i * 10}`}
          >
            <img src={attribute.image} alt="" />
            <h2>{attribute.title}</h2>
            <p>{attribute.body}</p>
          </div>
        ))}
      </section>
      <section className="join">
        <h2 data-aos="fade-right" data-aos-delay="10">
          Join the SyncNexa Community
        </h2>
        <p data-aos="fade-up" data-aos-delay="10">
          Join us in shaping the future of university social media. Secure your
          place on the SyncNexa waitlist today and be among the first to
          experience a transformative platform dedicated to linking minds and
          building futures.
        </p>
        <Link to="" data-aos="fade-up" data-aos-delay="10">
          Sign Up Now to Secure a Spot
        </Link>
      </section>
      <section className="founders">
        <h2 data-aos="fade-up" data-aos-delay="10">
          Meet Our Founders
        </h2>
        <p id="intro" data-aos="fade-right" data-aos-delay="10">
          SyncNexa was founded by a team of visionary entrepreneurs committed to
          revolutionizing the university experience through innovation and
          community-building
        </p>
        {teamShort.map((member, i) => (
          <section className="team-card" key={i}>
            <img
              src={member.image}
              alt=""
              data-aos="fade-up-right"
              data-aos-delay="10"
            />
            <div>
              <strong data-aos="fade-up" data-aos-delay="10">
                {member.fullName}
              </strong>
              <p className="role" data-aos="fade-up" data-aos-delay="10">
                {member.role}
              </p>
              <div>
                <a
                  href={member.socials.linkedin}
                  target="_blank"
                  data-aos="fade-up"
                  data-aos-delay="10"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href={member.socials.instagram}
                  target="_blank"
                  data-aos="fade-up"
                  data-aos-delay="20"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href={member.socials.x}
                  target="_blank"
                  data-aos="fade-up"
                  data-aos-delay="30"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
              <p className="desc" data-aos="fade-up" data-aos-delay="10">
                {member.short}
              </p>
              <Link
                to=""
                className="more"
                data-aos="fade-up"
                data-aos-delay="10"
              >
                Learn more <i className="fas fa-chevron-right"></i>
              </Link>
            </div>
          </section>
        ))}
      </section>
      <section className="form">
        <img
          src={form}
          alt=""
          id="form-image"
          data-aos="fade-up"
          data-aos-delay="10"
        />
        <form>
          <h2 data-aos="fade-up" data-aos-delay="10">
            Join Us
          </h2>
          <div className="input">
            <i className="fas fa-envelope"></i>
            <input
              type="email"
              name=""
              id=""
              placeholder="Email"
              value={user.email}
              onInput={(e) => setUser({ ...user, email: e.target.value })}
            />
          </div>
          <div className="input">
            <i className="fas fa-user"></i>
            <input
              type="text"
              name=""
              id=""
              placeholder="First name"
              value={user.first}
              onInput={(e) => setUser({ ...user, first: e.target.value })}
            />
          </div>
          <div className="input">
            <i className="fas fa-user"></i>
            <input
              type="text"
              name=""
              id=""
              placeholder="Last name"
              value={user.last}
              onInput={(e) => setUser({ ...user, last: e.target.value })}
            />
          </div>
          <div className="check-area">
            <div className="checkbox">
              <input
                type="checkbox"
                name=""
                id=""
                checked={user.agree}
                onChange={() => setUser({ ...user, agree: !user.agree })}
              />
              <span></span>
            </div>
            <small>
              Sign me up for weekly topics and insights on what is happening in
              campuses
            </small>
          </div>
          <button
            data-aos="fade-right"
            data-aos-delay="10"
            onClick={(e) => sendWaitlist(e)}
          >
            Sign Up
          </button>
          <div className="social-area" data-aos="fade-up" data-aos-delay="10">
            <h3 data-aos="fade-up" data-aos-delay="10">
              Follow Us
            </h3>
            <div>
              <a href="">
                <img src={facebook} />
              </a>
              <a href="">
                <img src={instagram} />
              </a>
              <a href="">
                <img src={linkedin} />
              </a>
              <a href="">
                <img src={x} />
              </a>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Home;
