const Contact = () => {
  const formSubmitHandler = (event) => {
    event.preventDefault();

  }
  return (
    <div id="contact" className="section dark2">
      <div className="container contact">
        <div className="section-title">
          <h1>Contact <span className="color-primary">Me</span></h1>
          <p className="width70">Get in touch.</p>
        </div>
        <div className="columns">
          <div className="column contact-box">
            <h3>Address</h3>
            <i className="bi bi-geo-alt icon"></i>
            <p>2-Krushna Nagar,Near Bardai Brahman Boarding, Jamnagar - 361006, <br /> Gujarat, India</p>
          </div>
          <div className="column contact-box">
            <h3>Email</h3>
            <i className="bi bi-envelope icon"></i>
            <p>heet.chovatiya0502@gmail.com</p>
          </div>
          <div className="column contact-box">
            <h3>Call Me</h3>
            <i className="bi bi-telephone icon"></i>
            <p>+91-9687767069</p>
          </div>
        </div>

        <div>
          <form className="contact-form" onSubmit={formSubmitHandler}>
            <input type="text" id="name" name="name" placeholder="Your name" />
            <input type="text" id="phone" name="phone" placeholder="Your phone number" />
            <input type="email" id="email" name="email" placeholder="Your email" />
            <textarea rows="5" id="message" name="message" placeholder="Your message" />
            <button type="submit" className="button">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;