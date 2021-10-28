import React, { useEffect } from 'react'
import './App.css'
import { useAppDispatch, useAppSelector } from './app/hooks'
import Login from './features/login/Login'
import { init, selectLogin } from './features/login/loginSlice'
import Offers from './features/offer/Offers'
import Control from './features/Control'

function App() {
  const login = useAppSelector(selectLogin)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(init())
  }, [dispatch])
  return (
    <div className="App">
      <header className="App-header">
        {login.status === 'pending' ? (
          <i>Loading</i>
        ) : login.isLoggedIn ? (
          <>
            <Control />
            <Offers />
          </>
        ) : (
          <Login />
        )}
      </header>
    </div>
  )
}

export default App
