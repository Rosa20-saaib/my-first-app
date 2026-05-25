import { Link } from "react-router-dom";
import "./Nav.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaLaptopCode} from "react-icons/fa"
const Nav = () => {
  return (
    <header className="py-2">
      <nav className="container d-flex justify-content-between align-items-center">
        <div className="logo">
       
          <FaLaptopCode  className="logo-icon" >Computer Sience</FaLaptopCode>
          

        </div>

        <ul className="d-flex list-unstyled gap-4 m-0">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/courses">Courses</Link>
          </li>

          <li>
            <Link to="/about">About Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
