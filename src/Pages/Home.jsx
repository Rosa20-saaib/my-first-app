import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-page">
      <div className="overlay">
        <div className="container text-center">
          <h1 className="display-3 fw-bold mb-3">Welcome To Our Page</h1>

          <p className="hero-text">
            We believe that education is the key to unlocking potential. Our
            mission is to inspire learning, encourage curiosity, and support
            academic excellence for students worldwide.
          </p>

          <Link to="/form" className="form-btn btn-lg mt-3">
            Apply Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
