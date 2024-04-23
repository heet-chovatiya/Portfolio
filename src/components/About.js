import '../css/style.css'
const About = () => {
  return (
    <div id="about" className="section dark2">
      <div className="container">
        <div className="section-title">
          <h1>About <span className="color-primary">Me</span></h1>
        </div>
        <div className="section-flex">
          <div className="section-left">
            <img className="myphoto" src="/images/me.png" alt="myphoto" />
          </div>
          <div className="section-right">
            <section >
              <h2 className="weight-light">Hi, I'm <span className="color-primary">Heet Chovatiya</span></h2>
              <p>I'm a AngularJS developer. I code and create stylish, modern websites, mobile apps and online stores.</p>
            </section>
            <hr />
            <section>
              <h2 className="weight-light">Personal <span className="color-primary">Info</span></h2>
              <div>
                <p><strong>Name:</strong> Heet Chovatiya</p>
                <p><strong>Age:</strong> 20 years</p>
                <p><strong>Language:</strong> Gujarati, English, Hindi</p>
                <p><strong>Address:</strong> 2-Krushna Nagar, Near Bardai Brahman Boarding, Jamnagar - 361006, Gujarat, India</p>
              </div>
            </section>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <h2 className="weight-light">My <span className="color-primary">Skills</span></h2>
            <section>AngularJS, TypeScript</section>
            <hr />
            <section>JavaScript, JQuery</section>
            <hr />
            <section>HTML, CSS, Bootstrap</section>
          </div>
          <div className="column">
            <h2 className="weight-light">My <span className="color-primary">Education</span></h2>
            <section><p>Diploma in ICT (Information & Communication Technology)<br />Marwadi University (2019 - 2022)</p>
            </section>
            <hr />
            <section><p>B.E. / B.Tech in IT (Information Technology)<br />Lok Jagruti University (2023 - 2026)</p>
            </section>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About;