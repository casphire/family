
import {Link} from "react-router-dom";


const NavBar = () => {
  return (
      <div className='navSection'>
        <ul>
            <Link to="/abc">  <li>FisrtPage</li></Link>
           
           <Link to="/din"> <li>SecondPage</li></Link>
            <Link to="/123"> <li>ThirdPage</li></Link>
             <Link to="/pra"><li>FourthPage</li></Link>
        </ul>
      </div>
  )
}

export default NavBar