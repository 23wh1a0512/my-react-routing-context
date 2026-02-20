import React from 'react'

const navbar = () => {
  return (
    <div>
        <nav>
            <ul>
                <li><a href="/dashboard">Dashboard</a></li>
                <li><a href="/profile">Profile</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default navbar