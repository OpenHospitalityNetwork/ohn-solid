import React, { FormEvent, useState } from 'react'
import { useAppDispatch } from '../../app/hooks'
import { login } from './loginSlice'

const Login = () => {
  const [provider, setProvider] = useState('https://solidcommunity.net')
  const dispatch = useAppDispatch()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(login(provider))
  }
  return (
    <div>
      <h1>Sign in with your Solid Identity</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="provider">Select your Solid Pod Provider</label>
        <input
          id="provider"
          type="text"
          value={provider}
          onChange={e => setProvider(e.target.value)}
        />
        <input type="submit" value="Sign In" />
      </form>
    </div>
  )
}

export default Login
