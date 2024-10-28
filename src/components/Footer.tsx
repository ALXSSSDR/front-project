import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTelegram, faInstagram, faVk } from '@fortawesome/free-brands-svg-icons';
import '../styles/Footer.css';

export const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-info">
          <h3>Zhukov Alexandr</h3>
          <p>A Full Stack Developer creating dynamic websites and web applications, focusing on both frontend and backend solutions to drive overall product success.</p>
        </div>
        <div className="footer-social"> 
          <a href="https://github.com/ALXSSSDR" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="social-icon" />
          </a>
          <a href="https://t.me/alxsssdr" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTelegram} className="social-icon" />
          </a>
          <a href="https://instagram.com/alxsssdr" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="social-icon" />
          </a>
          <a href="https://vk.com/blue_chill" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faVk} className="social-icon" />
          </a>
        </div>
      </div>
      <div className="footer-signature">
        <p>© 2024 Zhukov Alexandr. All rights reserved.</p>
      </div>
    </footer>
  );
};
