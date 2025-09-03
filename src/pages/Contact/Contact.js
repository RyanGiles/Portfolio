import "./Contact.scss";
import BG_Transition from "../../Assets/BG_Transition.mp4";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  return (
    <div className="contact">
          <video autoPlay muted className="homepage-bg">
            <source src={BG_Transition} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
          <div className="contact__info">
            <img onClick={() => {navigate(-1)}} src="/back.png" alt="back" className="back" />
            <div className="contact__block contact__desc">Howdy! My name is Ryan Giles, and I am a Game Development student at SCAD (Savannah College of Art and Design) set to graduate in May '26. Before going to SCAD, I spent 2 years studying Computer Science at Texas A&M University. I also recieved a Software Development Diploma from Brainstation Coding Bootcamp, where I learned to design and program websites using HTML, CSS, and React.js <br/><br/>Throughout this time, I have learned to be the bridge between Designers and Engineers. I frequently assist Designers not only in the ideation and creation of designs, but also in ensuring that the design will mesh well with the abilities of engineers and capabilities of technology. I also regularly help engineers keep in mind a human-centered design that will be user-friendly when ideating and creating product functionality.</div>
            <img src="/headshot.png" alt="Professional Headshot" className="contact__block" />
            <form action="submit" className="contact__block form"></form>
            <img src="/LogoTV.png" alt="logo" className="TVlogo" />
          </div>
        </div>
  );
}

export default Contact;
