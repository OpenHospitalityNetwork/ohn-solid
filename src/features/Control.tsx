import React from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { logout, selectLogin } from './login/loginSlice'
import { Link } from 'react-router-dom'

const Control = () => {
  const login = useAppSelector(selectLogin)
  const dispatch = useAppDispatch()
  return (
    <nav style={{ position: 'fixed', top: '1rem', right: '1em', zIndex: 500 }}>
      <Link to="/">map</Link>
      <br />
      <Link to={`/users/${encodeURIComponent(login.webId)}`}>my profile</Link>
      <br />
      <Link to="/offers">my offers</Link>
      <br />
      <Link to="/communities">communities</Link>
      <br />
      <button onClick={() => dispatch(logout())}>Logout</button>
    </nav>
  )
}

export default Control
