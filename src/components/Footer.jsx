import "./Footer.css";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-content">

        {/* Social Icons */}
        <div className="social-icons">
          <a href="#">
            <FaFacebookF />
          </a>

          <a href="#">
            <FaInstagram />
          </a>

          <a href="#">
            <FaTwitter />
          </a>

          <a href="#">
            <FaYoutube />
          </a>
        </div>

        

        
        <div className="footer-contact">

          <p>
            <FaPhone className="icon" />
            +961 70 123 456
          </p>

          <p>
            <FaEnvelope className="icon" />
            info@example.com
          </p>

          <p>
            <FaMapMarkerAlt className="icon" />
            Beirut, Lebanon
          </p>

        </div>

      </div>

     
      <div className="footer-bottom">
        <p>Copyright ©2026 | Rosa Saaib</p>
      </div>

    </footer>
  );
};

export default Footer;