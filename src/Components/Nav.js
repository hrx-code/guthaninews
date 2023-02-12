import React from 'react'
import {Link} from 'react-router-dom'
export default function Nav() {
  return (
    <div>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/About">About</Link>
        </li>
        <li>
            <Link to="/News">News</Link>
        </li>
    </div>
  )
}
