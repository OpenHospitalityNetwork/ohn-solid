import React from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { logout, selectLogin } from './login/loginSlice'

const Control = () => {
  const login = useAppSelector(selectLogin)
  const dispatch = useAppDispatch()
  return (
    <nav style={{ position: 'fixed', top: '1rem', right: '1em', zIndex: 500 }}>
      <button>{login.webId}</button>
      <br />
      <button onClick={() => dispatch(logout())}>Logout</button>
    </nav>
  )
}

export default Control
