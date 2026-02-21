import profile from "../assets/profile.jpg";

function About() {
  return (
    <div className="page container profile-section">

      <div className="character-card">

        <div className="character-image">
          <img src={profile} alt="profile" />
        </div>

        <div className="character-info">

          <h2 className="glow">Developer Status</h2>
          <h4 className="subtitle">Joe Del Dacudao • BSIT Student</h4>

          <p>
            A passionate learner in the world of technology, constantly
            training skills and building projects to become a professional
            developer  Maybe...
          </p>

          <div className="stats">

            <div className="stat">
              <span>Class</span>
              <strong>NONE I'M BUILT LIKE THAT</strong>
            </div>

            <div className="stat">
              <span>Level</span>
              <strong>BSIT Student</strong>
            </div>

            <div className="stat">
              <span>Primary Skills</span>
              <strong>Springboot • CSS • JavaScript • Java • Phyton</strong>
            </div>

            <div className="stat">
              <span>3D / AR</span>
              <strong>Three.js • MediaPipe</strong>
            </div>

            <div className="stat">
              <span>Database</span>
              <strong>SQL • DBMS</strong>
            </div>

            <div className="stat">
              <span>Tools</span>
              <strong> IDE • GitHub • VS Code</strong>
            </div>

          </div>


          {/* SKILL BARS */}
          <div className="skill-bars">

            <div className="skill-item">
              <p>Springboot</p>
              <div className="bar"><span style={{ width: "40%" }}></span></div>
            </div>

            <div className="skill-item">
              <p>CSS</p>
              <div className="bar"><span style={{ width: "20%" }}></span></div>
            </div>

            <div className="skill-item">
              <p>JavaScript</p>
              <div className="bar"><span style={{ width: "30%" }}></span></div>
            </div>

            <div className="skill-item">
              <p>java</p>
              <div className="bar"><span style={{ width: "65%" }}></span></div>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default About;