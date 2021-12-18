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
import {
  getCommunity,
  selectLoggedUser,
} from './features/community/communitySlice'
import Loading from './components/Loading'
import FirstTime from './features/onboarding/FirstTime'
import Onboarding from './features/onboarding/Onboarding'

function App() {
  const login = useAppSelector(selectLogin)
  const dispatch = useAppDispatch()
  const loggedUser = useAppSelector(selectLoggedUser)
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

  if (login.status === 'pending') return <Loading message="Initializing..." />

  if (!login.isLoggedIn) return <Login />

  if (!loggedUser) return <Loading message="Fetching your profile..." />

  if (loggedUser.hospexDocuments.length === 0) return <FirstTime />

  return (
    <div className="App">
      <Router>
        <Onboarding />
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
          <Route
            path="/bug"
            component={() => {
              window.location.href =
                'https://github.com/OpenHospitalityNetwork/sleepy.bike/issues/new'
              return null
            }}
          />
          <Route path="/">
            <OfferMap />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
