import React, { useEffect, useMemo } from 'react'
import { useHistory } from 'react-router'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectLogin } from '../login/loginSlice'
import {
  decrementStep,
  incrementStep,
  selectOnboarding,
  setOnboarding,
} from './onboardingSlice'

const Onboarding = () => {
  const onboarding = useAppSelector(selectOnboarding)
  const dispatch = useAppDispatch()
  const login = useAppSelector(selectLogin)
  const history = useHistory()

  const steps = useMemo(
    () => [
      {
        url: '/communities',
        text: 'Join some communities so you can meet people',
      },
      {
        url: `/users/${encodeURIComponent(login.webId)}`,
        text: 'Edit your profile',
      },
      {
        url: '/offers',
        text: 'If you can, offer hosting to others',
      },
      {
        url: '/',
        text: 'Map is where you can find Hosts',
      },
    ],
    [login.webId],
  )

  useEffect(() => {
    history.replace(steps[onboarding.step].url)
  }, [history, onboarding.step, steps])

  if (!onboarding.onboarding) return null

  return (
    <>
      <div className="h-32 w-screen z-2000 fixed flex flex-col items-center justify-evenly bg-purple-400">
        <div className="flex gap-1">
          {[0, 1, 2, 3].map(i => (
            <div
              key={i}
              className={`${
                i <= onboarding.step ? 'bg-purple-300' : 'bg-purple-50'
              } h-2 w-2 rounded-full`}
            />
          ))}
        </div>
        <div>{steps[onboarding.step].text}</div>
        <div className="flex justify-evenly w-full">
          {onboarding.step > 0 && (
            <button
              className="bg-purple-300 hover:bg-purple-50"
              onClick={() => dispatch(decrementStep())}
            >
              Back
            </button>
          )}
          {onboarding.step < steps.length - 1 && (
            <button
              className="bg-purple-300 hover:bg-purple-50"
              onClick={() => dispatch(incrementStep())}
            >
              Next
            </button>
          )}
          {onboarding.step === steps.length - 1 && (
            <button
              className="bg-purple-300 hover:bg-purple-50"
              onClick={() => dispatch(setOnboarding(false))}
            >
              Finish
            </button>
          )}
        </div>
      </div>
      <div className="h-32" />
    </>
  )
}

export default Onboarding
