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
      <Link to={`/user/${encodeURIComponent(login.webId)}`}>{login.webId}</Link>
      <br />
      <Link to="/offers/edit">edit offers</Link>
      <br />
      <button onClick={() => dispatch(logout())}>Logout</button>
    </nav>
  )
}

export default Control
