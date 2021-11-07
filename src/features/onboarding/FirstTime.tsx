import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { selectLogin } from '../login/loginSlice'
import { getHospexUri } from '../offer/offerAPI'
import { createHospexDocument } from '../user/userSlice'
import { setOnboarding } from './onboardingSlice'

const FirstTime = () => {
  const dispatch = useAppDispatch()
  const login = useAppSelector(selectLogin)

  const hospexUri = getHospexUri(login.webId)

  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4">
      <h1>It&apos;s your first time...</h1>
      <button
        className="bg-yellow-500"
        onClick={() => {
          dispatch(setOnboarding(true))
          dispatch(
            createHospexDocument({
              documentId: hospexUri,
              userId: login.webId,
            }),
          )
        }}
      >
        Let&apos;s get started!
      </button>
    </div>
  )
}

export default FirstTime
