import React from 'react'
import './about.scss'
import { Link, Outlet } from 'react-router-dom'
export default function About() {
  return (
    <div>
        <h2>About Page</h2>
        <ul>
            <Link to={'my-jobs'}>My Jobs</Link>
            <Link to={'my-company'}>My Company</Link>
            <Link to={'my-class'}>My Class</Link>
        </ul>
        <Outlet></Outlet>
    </div>
  )
}
