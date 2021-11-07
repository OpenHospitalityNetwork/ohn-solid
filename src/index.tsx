import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { store } from './app/store'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import Modal from 'react-modal'
import Notification from './features/notification/Notification'
import AppErrorBoundary from './AppErrorBoundary'

// this is required by react-modal library for proper modal accessibility
Modal.setAppElement('#root')

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppErrorBoundary>
        <App />
      </AppErrorBoundary>
      <Notification />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
