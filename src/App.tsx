import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from './app/hooks'
import Login from './features/login/Login'
import { init, selectLogin } from './features/login/loginSlice'
import OfferMap from './features/offer/OfferMap'
import Control from './features/Control'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import User from './features/user/User'
import Offers from './features/offer/Offers'
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
      ;['https://mrkvon.inrupt.net/hospex/sleepy-bike/community#us'].forEach(
        id => {
          dispatch(getCommunity(id))
        },
      )
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
            <Route path="/users/:webId">
              <User />
            </Route>
            <Route path="/offers">
              <Offers />
            </Route>
            <Route path="/communities">
              <Communities />
            </Route>
            <Route path="/">
              <OfferMap />
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
