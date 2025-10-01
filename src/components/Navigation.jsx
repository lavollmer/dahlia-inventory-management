import "../App.css"
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <nav className='navigation'>
        <Link to="/">Home</Link>
        <Link to="/database">Database</Link>
        <Link to="/FAQ">FAQ</Link>
      </nav>
    </>
  )
}

export default Navigation