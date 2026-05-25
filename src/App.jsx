import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Home from "./pages/Home.jsx";
import Courses from "./pages/Courses.jsx";
import About from "./pages/About.jsx";
import Form from "./pages/Form.jsx";

const App = () => {
  return (
    <Router>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<Form />} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
