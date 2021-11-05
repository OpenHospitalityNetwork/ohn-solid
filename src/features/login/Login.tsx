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
    <div className="flex flex-col items-center justify-evenly min-h-screen m-5">
      <div className="space-y-10">
        <section className="flex flex-col items-center space-y-2">
          <header>
            <h1>Open Hospitality</h1>
            <p className="italic">hospitality, decentralized</p>
          </header>
          <div className="w-80 flex items-center justify-evenly">
            <a href="https://openhospitality.network">
              <img
                src="https://openhospitality.network/assets/img/logo.png"
                title="Open Hospitality Network"
                alt="Open Hospitality Network logo"
                className="h-32"
              />
            </a>
            <span className="text-3xl">+</span>
            <a href="https://solidproject.org">
              <img
                src="https://avatars3.githubusercontent.com/u/14262490?v=3&s=200"
                title="Solid Project"
                alt="Solid Project logo"
                className="h-32 p-5"
              />
            </a>
          </div>
        </section>
        <form
          className="w-96 flex flex-col items-center space-y-2"
          onSubmit={handleSubmit}
        >
          <header className="text-xl font-bold">
            Sign in with your Solid Identity
          </header>
          <label htmlFor="provider">Select your Solid Pod Provider</label>
          <input
            className="rounded border px-2 py-1 w-full"
            id="provider"
            type="text"
            value={provider}
            onChange={e => setProvider(e.target.value)}
          />
          <button className="bg-blue-900 text-blue-50 w-full" type="submit">
            Sign In
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
