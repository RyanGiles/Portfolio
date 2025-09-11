import "./Contact.scss";
import BG_Transition from "../../Assets/BG_Transition.mp4";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";

function Contact() {
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8pzw9mn",
        "template_8nwnl2b",
        e.target,
        "AQZoBVofxCM_-3mqv"
      )
      .then((result) => {
        console.log("Email successfully sent!", result.text);
        document.getElementById("contactForm").reset();
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  }
  return (
    <div className="contact">
      <video autoPlay muted className="homepage-bg">
        <source src={BG_Transition} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <div className="contact__info">
        <img
          onClick={() => {
            navigate(-1);
          }}
          src="/back.png"
          alt="back"
          className="back"
        />
        <div className="contact__block contact__desc">
          <div className="contact__block">
            <img
              src="/Ryan.jpg"
              alt="Professional Headshot"
              className="contact__img"
            />
          </div>
          <div className="contact__texttop">
            Howdy! My name is Ryan Giles, and I am a Game Development student at
            SCAD (Savannah College of Art and Design) set to graduate in May
            '26. Before going to SCAD, I spent 2 years studying Computer Science
            at Texas A&M University.
          </div>
          <div className="contact__textbottom">
            I also recieved a Software Development Diploma from Brainstation
            Coding Bootcamp, where I learned to design and program websites
            using HTML, CSS, and React.js.Throughout this time, I have learned
            to be the bridge between Designers and Engineers. I frequently
            assist Designers not only in the ideation and creation of designs,
            but also in ensuring that the design will mesh well with the
            abilities of Engineers and capabilities of technology. I also
            regularly help Engineers keep in mind a human-centered design that
            will be user-friendly when ideating and creating product
            functionality.
          </div>
        </div>

        <form
          id="contactForm"
          className="contact__block contact__form"
          onSubmit={handleSubmit}
        >
          <label htmlFor="name" className="form__label">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="form__input"
            placeholder="A Totally Real Name"
          />

          <label htmlFor="email" className="form__label">
            Your Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="form__input"
            placeholder="realemail@email.com"
          />

          <label htmlFor="subject" className="form__label">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="form__input"
            placeholder="Very Important Topic"
          />

          <label htmlFor="message" className="form__label">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="form__input form__textarea"
            placeholder="The most important message ever..."
          ></textarea>

          <button type="submit" className="form__submit">
            Contact Me!
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
