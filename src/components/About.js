import { Outlet } from 'react-router-dom'
import ProfileClass from './ProfileClass'

const About = () => {
  return (
    <div>
        <h1>About Us Page</h1>
        <Outlet />
        <ProfileClass name={"Nikhil"}/>
    </div>
  )
}

export default About;