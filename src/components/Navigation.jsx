import "../App.css"
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <>
      <div className='navigation'>
        <button>
          <Link to="/" style={{ textDecoration: 'none' }}>Home</Link>
        </button>
        <button>
          <Link to="/database" style={{ textDecoration: 'none' }}>Database</Link>
        </button>
        <button>
          <Link to="/FAQ" style={{ textDecoration: 'none' }}>FAQ</Link>
        </button>
      </div>
    </>
  )
}

export default Navigation