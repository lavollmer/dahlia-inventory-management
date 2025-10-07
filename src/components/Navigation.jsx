import "../App.css"
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <div className='navigation'>
        <div className="navigation-link">
          <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
        </div>
        <div className="navigation-link">
          <Link to='/adddahlia' style={{ textDecoration: 'none'}}>Add New Dahlia</Link>
        </div>
        <div className="navigation-link">
          <Link to="/tuber" style={{textDecoration: 'none'}}>Tuber Detail</Link>
         </div>
        <div className="navigation-link">
          <Link to="/database" style={{ textDecoration: 'none' }}>Database</Link>
        </div>
        <div className="navigation-link">
          <Link to="/analyticsdashboard" style={{ textDecoration: 'none' }}>Analytics Dashboard</Link>
        </div>
        <div className="navigation-link">
          <Link to="/FAQ" style={{ textDecoration: 'none' }}>FAQ</Link>
        </div>
         <div className="navigation-link">
          <Link to="/about" style={{textDecoration: 'none'}}>About</Link>
         </div>
      </div>
    </>
  )
}

export default Navigation