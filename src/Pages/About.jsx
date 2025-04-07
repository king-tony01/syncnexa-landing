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
      image: "https://img.freepik.com/free-vector/young-boy-avatar-illustration_1308-176688.jpg?t=st=1744030665~exp=1744034265~hmac=90cdbe366e148a079724761d6bf8a21798d580dd9b1d9c980225e0392b603432&w=740", // Provide default image
    },
    {
      fullName: "Ezeonyeasi Valentine",
      role: "Co-founder",
      image: "https://img.freepik.com/free-vector/young-man-black-shirt_1308-173618.jpg?t=st=1744030898~exp=1744034498~hmac=b86c562af620a8af0d3db052ee8a3658009a31199ad5c91325a19a0296e2a519&w=740",
    },
    {
      fullName: "Chika Wisdom",
      role: "Graphic Designer",
      image: "https://img.freepik.com/free-vector/blond-man-with-eyeglasses-icon-isolated_24911-100831.jpg?t=st=1744030751~exp=1744034351~hmac=59c0e2cf6d3be2a5725b84b77eeef61c4a1c75ad5f587730f09fe012ba508c85&w=740",
    },
    {
      fullName: "Nwammadu Confidence",
      role: "Media Manager",
      image: "https://img.freepik.com/free-vector/confident-woman-red-jacket_1308-178355.jpg?t=st=1744030795~exp=1744034395~hmac=5c25e18c4f684e156ba28bf6ad33275ff640df3949667f83faf966674d5d91cd&w=740",
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
                      <p>More</p>
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
