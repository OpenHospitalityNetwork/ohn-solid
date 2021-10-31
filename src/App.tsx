import React, { useEffect } from 'react'
import './App.css'
import { useAppDispatch, useAppSelector } from './app/hooks'
import Login from './features/login/Login'
import { init, selectLogin } from './features/login/loginSlice'
import Offers from './features/offer/Offers'
import Control from './features/Control'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import User from './features/user/User'
import EditOffers from './features/offer/EditOffers'
import Communities from './features/community/Communities'

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
          <Router>
            <Control />
            <Switch>
              <Route path="/user/:webId">
                <User />
              </Route>
              <Route path="/offers/edit">
                <EditOffers />
              </Route>
              <Route path="/communities">
                <Communities />
              </Route>
              <Route path="/">
                <Offers />
              </Route>
            </Switch>
          </Router>
        ) : (
          <Login />
        )}
      </header>
    </div>
  )
}

export default App
