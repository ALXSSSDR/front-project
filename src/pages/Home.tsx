import './../styles/Home.css';
import profileImage from './../assets/IMG_5282.jpg';
import { Link } from 'react-router-dom'; 

export const Home = () => {
  return (
    <section className="home">
      <div className="intro">
        <h1 className="intro-title">Hello, I'm Alexandr Zhukov</h1>
        <p className="intro-description">
          A Full Stack Developer passionate about creating intuitive and dynamic web experiences.
        </p>
        <Link to="/contact">
          <button className="contact-button">Contact Me</button>
        </Link>
      </div>
      <div className="intro-image">
        <img src={profileImage} alt="Alexandr Zhukov" />
      </div>
    </section>
  );
};
