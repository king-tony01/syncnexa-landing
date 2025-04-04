import { Link, useParams, useNavigate } from "react-router-dom";
import "/src/css/about.css";
import { teamLong } from "../assets/res";
import valentine from "/src/assets/valentine.jpg";
import { useEffect } from "react";

function About() {
  const { fullName } = useParams();
  const navigate = useNavigate(); // Initialize navigate function

  // Find the specific team member based on fullName
  const member = fullName
    ? teamLong.find(
        (m) =>
          m.fullName &&
          fullName &&
          m.fullName.toLowerCase().trim() === fullName.toLowerCase().trim()
      )
    : null;

  let counter = 0;
  useEffect(() => {
    const container = document.querySelector(".translate");
    const profiles = document.querySelectorAll(".profile-con");

    // Fix: Ensure correct condition for smaller screens
    if (window.innerWidth <= 600) {
      const interval = setInterval(() => {
        counter++;
        if (counter === profiles.length) {
          counter = 0;
        }
        container.style.transform = `translateX(-${
          counter * container.children[counter].offsetWidth
        }px)`;
        profiles.forEach((p) => p.classList.remove("active"));
        profiles[counter].classList.add("active");
      }, 3000);

      return () => clearInterval(interval); // Clean up interval on unmount
    }
  }, []);

  const team = [
    {
      fullName: "Amauche Anthony",
      role: "Chief Executive Officer (CEO)",
      image: "", // Provide default image
    },
    {
      fullName: "Ezeonyeasi Valentine",
      role: "Co-founder",
      image: valentine,
    },
    {
      fullName: "Team Member 1",
      role: "Chief Technical Officer(CTO)",
      image: "",
    },
    {
      fullName: "Nwammadu Confidence",
      role: "Media Manager",
      image: "",
    },
  ];

  // If a specific member is found, display only that member
  if (member) {
    return (
      <section className="about">
        <h1>{member.fullName}</h1>
        <p>{member.role}</p>
        <img src={member.image} alt={member.fullName} />
        <p dangerouslySetInnerHTML={{ __html: member.long.replace(/\n/g, "<br/>") }}></p>
        <Link to="/about">← Back to Team</Link>
      </section>
    );
  }

  return (
    <section className="about">
      <section className="about-hero">
        <h1>Meet Our Founders</h1>
        <p>
          SyncNexa was founded by a team of visionary entrepreneurs committed to
          revolutionizing the university experience through innovation and
          community-building.
        </p>
        <section className="mobile">
          <section className="profiles translate">
            {team.map((t, i) => (
              <div className="profile-con" key={i}>
                <img
                   // Navigate dynamically
                  // Indicate it's clickable
                  src={t.image}
                  alt={t.fullName}
                />
                <b>{t.role}</b>
              </div>
            ))}
          </section>
        </section>
      </section>

      <section className="about-body">
      {teamLong.map((member, index) => (
        <section className="full-info" key={index}>
          <div className="info-container">
            <div className="top-info">
              <img src={member.image} alt={member.fullName} className="member-image"/>
              <div className="member-details">
                <h3>{member.fullName}</h3>
                <p className="role">{member.role}</p>
                <div className="member-socials">
                  <a href="#" className="social-link linkedin"><i className="fab fa-linkedin"></i></a>
                  <a href="#" className="social-link instagram"><i className="fab fa-instagram"></i></a>
                  <a href="#" className="social-link twitter"><i className="fab fa-twitter"></i></a>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <div className="member-bio">
                    <h4>{member.fullName}</h4>
                    <p>{member.short}</p>
                    {/* Icon to indicate rotation on hover */}
                    <div className="rotate-icon">
                      <i className="fas fa-sync-alt"></i>
                      <p>Hover to rotate</p>
                    </div>
                  </div>
                </div>
                <div className="flip-card-back">
                  <h4>More about {member.fullName}</h4>
                  <p>{member.long}</p>
                </div>
              </div>
            </div>

          </div>
        </section>
      ))}
      </section>
    </section>
  );
}

export default About;
