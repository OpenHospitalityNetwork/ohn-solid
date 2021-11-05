import React from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { logout, selectLogin } from './login/loginSlice'
import { Link } from 'react-router-dom'
import { FaMap, FaUser, FaHome, FaSignOutAlt, FaUsers } from 'react-icons/fa'
import { IconType } from 'react-icons'

type LinkConfig = {
  type: 'link'
  to: string
  icon: IconType
  title: string
}

type ButtonConfig = {
  type: 'button'
  icon: IconType
  title: string
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

const Control = () => {
  const login = useAppSelector(selectLogin)
  const dispatch = useAppDispatch()

  const items: Array<LinkConfig | ButtonConfig> = [
    { type: 'link', to: '/', title: 'map', icon: FaMap },
    {
      type: 'link',
      to: `/users/${encodeURIComponent(login.webId)}`,
      title: 'my profile',
      icon: FaUser,
    },
    { type: 'link', to: '/offers', title: 'my offers', icon: FaHome },
    { type: 'link', to: '/communities', title: 'communities', icon: FaUsers },
    {
      type: 'button',
      onClick: () => dispatch(logout()),
      title: 'sign out',
      icon: FaSignOutAlt,
    },
  ]
  return (
    <nav className="fixed top-4 right-4 z-500 flex items-center gap-0 bg-opacity-50 bg-white text-gray-400 rounded">
      {items.map(item => {
        const icon = <item.icon title={item.title} className="text-4xl p-2" />

        const classNames =
          'p-0 hover:text-white hover:bg-opacity-100 hover:bg-black rounded'

        return item.type === 'link' ? (
          <Link key={item.title} className={classNames} to={item.to}>
            {icon}
          </Link>
        ) : (
          <button
            key={item.title}
            className={classNames}
            onClick={item.onClick}
          >
            {icon}
          </button>
        )
      })}
    </nav>
  )
}

export default Control
