import { useState } from "react";
import "/src/css/contact.css"; // Import your CSS file for styling


const faqs = [
    {
      question: "How can I get in touch with support?",
      answer:
        "You can reach our support team via email at support@example.com or through the live chat on this page.",
    },
    {
      question: "What are your customer service hours?",
      answer:
        "Our team is available Monday to Friday, 9 AM – 5 PM UTC. Response times may vary on weekends.",
    },
    {
      question: "Do you offer phone support?",
      answer:
        "Currently, we provide support via email and live chat only to ensure detailed responses and tracking.",
    },
    {
      question: "How long does it take to get a response?",
      answer:
        "We usually respond within 24 hours, but during peak periods, it may take up to 48 hours.",
    },
  ];
function ContactPage() {
    const [openFAQ, setOpenFAQ] = useState(null);

    const toggleFAQ = (index) => {
        setOpenFAQ(openFAQ === index ? null : index);
    };
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const maxChar = 500;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "message") {
      setCharCount(value.length);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
      setCharCount(0);
    }, 2000); // Simulate API call
  };

  return (
    <>
    <div className="contact-container">
      {/* Left - Contact Details */}
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>Have questions? We're here to help. Reach out to us via any of the methods.</p>

        {/* <div className="contact-details">
          <div className="detail">
            <i className="fas fa-map-marker-alt" title="Location"></i>
            <p>FUTO, IMO, Nigeria</p>
          </div>
          <div className="detail">
            <i className="fas fa-envelope" title="Email"></i>
            <p>support@syncnexa.com</p>
          </div>
          <div className="detail">
            <i className="fas fa-phone-alt" title="Phone"></i>
            <p>+234 00000000</p>
          </div>
        </div> */}

        {/* Social Links */}
        <div className="social-links">
          <a href="#"><i className="fab fa-twitter" title="Twitter"></i></a>
          <a href="#"><i className="fab fa-linkedin" title="LinkedIn"></i></a>
          <a href="#"><i className="fab fa-instagram" title="Instagram"></i></a>
        </div>
      </div>

      {/* Right - Contact Form */}
      <div className="contact-form">
        <h2>Send a Message</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="text" name="name" placeholder=" " required onChange={handleChange} value={formData.name} />
            <label>Name</label>
          </div>
          <div className="input-group">
            <input type="email" name="email" placeholder=" " required onChange={handleChange} value={formData.email} />
            <label>Email</label>
          </div>
          <div className="input-group">
            <textarea name="message" placeholder=" " required maxLength={maxChar} onChange={handleChange} value={formData.message}></textarea>
            <label>Message</label>
            <small>{charCount}/{maxChar} characters</small>
          </div>
          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? <i className="fas fa-spinner fa-spin"></i> : <i className="fas fa-paper-plane"></i>} 
            {isSubmitting ? " Sending..." : " Send Message"}
          </button>
        </form>
      </div>
    </div>
      {/* FAQ Section */}
      <div className="faq-container">
        <h3>Frequently Asked Questions</h3>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-card ${openFAQ === index ? "open" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-header">
                <h4>{faq.question}</h4>
                <span className="faq-icon">{openFAQ === index ? "−" : "+"}</span>
              </div>
              <div className="faq-body">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    {/* Google Map Embed */}
    {/* <div className="map-container">
    <iframe 
        src="https://maps.google.com/maps?q=IMO,Nigeria&t=&z=13&ie=UTF8&iwloc=&output=embed" 
        allowFullScreen
        loading="lazy"
    ></iframe>
    </div> */}
    </>
  );
}

export default ContactPage;
