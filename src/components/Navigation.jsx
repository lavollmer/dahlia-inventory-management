import React from 'react'
import {Link} from 'react-router-dom';

const Navigation = () => {
  return (
    <>
    <nav>
      <ul>
        <Link to="/database">Database</Link>
        <Link to="/FAQ">FAQ</Link>
      </ul>
    </nav>
    </>
  )
}

export default Navigation