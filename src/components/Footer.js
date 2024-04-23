// import 'bootstrap/dist/css/bootstrap.min.css'
const Footer = () => {
  return (
    <div id="footer" className="dark1">
      <div className="container">
        <div className="footer-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'column' }}>
          &copy; copyright HSC. 2004
          <ul className="social-icons">
            <li><a href="https://www.linkedin.com/in/heetchovatiya" target="_blank" rel="noreferrer"><i className="bi bi-linkedin"></i></a></li>
            <li><a href="https://www.github.com/heet-chovatiya" target="_blank" rel="noreferrer"><i className="bi bi-github"></i></a></li>
            <li><a href="https://www.instagram.com/heet.chovatiya" target="_blank" rel="noreferrer"><i className="bi bi-instagram"></i></a></li>
            <li><a href="https://www.facebook.com/heet.chovatiya.71" target="_blank" rel="noreferrer"><i className="bi bi-facebook"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer;
