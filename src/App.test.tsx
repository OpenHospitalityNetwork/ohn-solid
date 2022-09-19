import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from './app/store'
import App from './App'

test.skip('prompts to Sign in with your Solid Identity', () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>,
  )

  // todo wait for async rendering of "Sign in with your Solid Identity"
  expect(getByText(/initializing/i)).toBeInTheDocument()
})
