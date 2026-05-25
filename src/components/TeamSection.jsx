import ceoImage from "../assets/CEOO.jpeg";
import designerImage from "../assets/designer.jpeg";
import developerImage from "../assets/developper.jpg";

const team = [
  {
    name: "John Lores",
    role: "CEO",
    img: ceoImage,
  },
  {
    name: "Jack Bee",
    role: "Designer",
    img: designerImage,
  },
  {
    name: "Rose Johnson",
    role: "Developer",
    img: developerImage,
  },
];

function TeamSection() {
  return (
    <section className="py-5 team bg-light">
      <div className="container text-center">
        <h2 className="section-title mb-5">Meet Our Team</h2>

        <div className="row g-4">
          {team.map((member, index) => (
            <div className="col-md-4" key={index}>
              <div className="team-card p-4 h-100">

                <img
                  src={member.img}
                  alt={member.name}
                  className="team-img"
                />

                <h5 className="mt-3 mb-1">{member.name}</h5>

                <p className="text-muted mb-0">{member.role}</p>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TeamSection;