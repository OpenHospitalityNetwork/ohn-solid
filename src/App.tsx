import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './app/hooks'
import Login from './features/login/Login'
import { init, selectLogin } from './features/login/loginSlice'
import Offers from './features/offer/Offers'
import Control from './features/Control'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import User from './features/user/User'
import EditOffers from './features/offer/EditOffers'
import Communities from './features/community/Communities'
import { getCommunity } from './features/community/communitySlice'

function App() {
  const login = useAppSelector(selectLogin)
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(init())
  }, [dispatch])

  // fetch featured communities
  useEffect(() => {
    if (login.isLoggedIn) {
      ;[
        'https://hospex-group-test.solidcommunity.net/profile/card#us',
        'https://mrkvon.inrupt.net/hospex/sleepy-bike/community#us',
      ].forEach(id => {
        dispatch(getCommunity(id))
      })
    }
  }, [login.isLoggedIn, dispatch])

  return (
    <div className="App">
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
    </div>
  )
}

export default App
