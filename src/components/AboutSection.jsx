import Company from "../assets/OurCompany.webp";

function AboutSection() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src={Company} className="img-fluid" alt="About Us" />
          </div>

          <div className="col-md-6">
            <h2 className="section-title">Who We Are</h2>

            <p>
              We are a passionate team committed to providing high-quality
              education, innovative learning experiences, and continuous support
              for students. Our goal is to help learners develop their skills,
              achieve academic success, and build a brighter future through
              modern and accessible education.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
