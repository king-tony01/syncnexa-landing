import { Link } from "react-router-dom";
import "/src/css/about.css";
import { teamLong } from "../assets/res";
import { useEffect } from "react";
function About() {
  let counter = 0;
  useEffect(() => {
    const container = document.querySelector(".translate");
    const profiles = document.querySelectorAll(".profile-con");
    if (!window.innerWidth > 600) {
      setInterval(() => {
        counter++;
        if (counter == profiles.length) {
          counter = 0;
        }
        container.style.transform = `translateX(-${
          counter * container.children[counter].offsetWidth
        }px)`;
        profiles.forEach((p) => p.classList.remove("active"));
        profiles[counter].classList.add("active");
      }, 3000);
    }
  }, []);
  const team = [
    {
      role: "Chief Executive Officer (CEO)",
      image: "",
    },
    {
      role: "Chief Technical Officer(CTO)",
      image: "",
    },
    {
      role: "Sales Manager",
      image: "",
    },
    {
      role: "Marketing Manager",
      image: "",
    },
    {
      role: "Frontend Developer",
      image: "",
    },
    {
      role: "Product Designer",
      image: "",
    },
    {
      role: "Product Designer",
      image: "",
    },
    {
      role: "Product Designer",
      image: "",
    },
  ];
  return (
    <section className="about">
      <section className="about-hero">
        <h1>Meet Our Founders</h1>
        <p>
          SyncNexa was founded by a team of visionary entrepreneurs committed to
          revolutionizing the university experience through innovation and
          community-building
        </p>
        <Link to="/signup">
          Join now <i className="fas fa-arrow-long"></i>
        </Link>
        <section className="mobile">
          <section className="profiles translate">
            {team.map((t, i) => (
              <div className="profile-con" key={i}>
                <img src={t.image} alt="" />
                <b>{t.role}</b>
              </div>
            ))}
          </section>
        </section>
      </section>
      <section className="about-body">
        {teamLong.map((member, index) => (
          <section className="full-info" key={index}>
            <div className="top-info">
              <img src="" alt="" />
              <div>
                <h3>{member.fullName}</h3>
                <p>{member.role}</p>
                <hr />
                <div className="member-socials">
                  <a href="">
                    <i className="fab fa-linkedin"></i> {"King Tony"}
                  </a>
                  <a href="">
                    <i className="fab fa-instagram"></i> {"amucheanthony4"}
                  </a>
                  <a href="">
                    <i className="fab fa-twitter"></i> {"@AmucheOkolie"}
                  </a>
                </div>
              </div>
            </div>
            <p
              dangerouslySetInnerHTML={{
                __html: member.long.replace(/\n/g, "<br/>"),
              }}
            ></p>
          </section>
        ))}
      </section>
    </section>
  );
}
export default About;
