import Projects from './Project'
import { ProjectData } from './ProjectsData'

const Project = () => {
  return (
    <div id="services" className="section dark1">
      <div className="container">
        <div className="section-title">
          <h1>My <span className="color-primary">Projects</span></h1>
          <p className="width70"> I code and create stylish, modern websites, mobile apps and online stores.</p>
        </div>
        <div className="columns">
          {ProjectData.map(item => (
            <Projects key={item.id} title={item.title} icon={item.icon} details={item.details} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Project;