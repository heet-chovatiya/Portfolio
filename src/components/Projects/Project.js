const Project = (Props) => {
  return (
    <div className="column service">
      <div className="service-content">
        <h3>{Props.title}</h3>
        <i className={"bi service-icon " + Props.icon}></i>
        <p style={{overflow: 'auto', height: '200px', scrollBehavior: 'smooth',}}>{Props.details}</p>
      </div>

    </div>
  )
}

export default Project;