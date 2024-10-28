import './../styles/Home.css';
import profileImage from './../assets/IMG_5282.jpg';
import { Link } from 'react-router-dom'; 
import { useEffect } from 'react';

export const Home = () => {
  useEffect(() => {
    const handleScroll = () => {
      const parallaxImage = document.querySelector('.intro-image img') as HTMLImageElement;

      if (parallaxImage) {
        const offset = window.pageYOffset;
        parallaxImage.style.transform = `translateY(${offset * 0.1}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
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
