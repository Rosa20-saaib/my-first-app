import WebDesign from "../assets/WebDesign.webp";
import DataScience from "../assets/DataSience.jpg";
import MachineLearning from "../assets/MachineLearning.jpg";
import AI from "../assets/Artiificial-Intelligence(AI).webp";
import Node from "../assets/node.png";
import Python from "../assets/Python.jpg";

const courses = [
  {
    title: "Web Development",
    desc: "Learn HTML, CSS, and JavaScript from scratch.",
    img: WebDesign,
    price: "120$",
    Duration: "3 Months",
  },

  {
    title: "Data Science",
    desc: "Analyze data and build intelligent systems.",
    img: DataScience,
    price: "180$",
    Duration: "4 Months",
  },

  {
    title: "Machine Learning",
    desc: "Develop cutting-edge machine learning skills.",
    img: MachineLearning,
    price: "200$",
    Duration: "5 Months",
  },
  {
    title: "Artificial Intelligence",
    desc: "AI refers to the development of computer systems",
    img: AI,
    price: "250$",
    Duration: "6 Months",
  },

  {
    title: "Node js",
    desc: "open-source and cross-platform JavaScript runtime environment",
    img: Node,
    price: "100$",
    Duration: "2 Months",
  },

  {
    title: "Python",
    desc: "Python is high-level programming language",
    img: Python,
    price: "90$",
    Duration: "2 Months",
  },
];

function CoursesList() {
  return (
    <section className="container my-5">
      <div className="row g-4">
        {courses.map((course, index) => (
          <div className="col-md-4" key={index}>
            <div className="card shadow course-card h-100">
              <img
                src={course.img}
                className="card-img-top"
                alt={course.title}
              />

              <div className="card-body text-center">
                <h5 className="card-title">{course.title}</h5>

                <p>{course.desc}</p>
                <div className="d-flex justify-content-between  align-items-center mt-3">
                  <h6 className=" m-0 text-success fw-bold  mt-3">
                    {course.price}
                  </h6>
                  <h6 className="m-0 text-muted">{course.Duration}</h6>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CoursesList;
