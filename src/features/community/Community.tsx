import React, { useState } from 'react'
import { Community as CommunityType } from './types'

const colors = [
  // red
  {
    hoverbg100: 'hover:bg-red-100',
    bg200: 'bg-red-200',
    bg300: 'bg-red-300',
    text900: 'text-red-900',
  },
  // yellow
  {
    hoverbg100: 'hover:bg-yellow-100',
    bg200: 'bg-yellow-200',
    bg300: 'bg-yellow-300',
    text900: 'text-yellow-900',
  },
  // green
  {
    hoverbg100: 'hover:bg-green-100',
    bg200: 'bg-green-200',
    bg300: 'bg-green-300',
    text900: 'text-green-900',
  },
  // blue
  {
    hoverbg100: 'hover:bg-blue-100',
    bg200: 'bg-blue-200',
    bg300: 'bg-blue-300',
    text900: 'text-blue-900',
  },
  // indigo
  {
    hoverbg100: 'hover:bg-indigo-100',
    bg200: 'bg-indigo-200',
    bg300: 'bg-indigo-300',
    text900: 'text-indigo-900',
  },
  // purple
  {
    hoverbg100: 'hover:bg-purple-100',
    bg200: 'bg-purple-200',
    bg300: 'bg-purple-300',
    text900: 'text-purple-900',
  },
  // pink
  {
    hoverbg100: 'hover:bg-pink-100',
    bg200: 'bg-pink-200',
    bg300: 'bg-pink-300',
    text900: 'text-pink-900',
  },
]

const Community: React.FC<{
  community: CommunityType
  isMember: boolean
  onJoin: () => void
}> = ({ community, isMember, onJoin }) => {
  const [color] = useState(colors[Math.floor(Math.random() * colors.length)])

  return (
    <div className={`w-64 p-4 ${color.bg300} rounded flex flex-col gap-4`}>
      <header
        style={{
          backgroundImage: `url("${community.image}")`,
          textShadow: '0 0 5px white',
        }}
        className="py-16 text-center -m-4 rounded-t bg-cover bg-center text-xl font-bold"
      >
        {community.name.en}
      </header>
      <section className="mt-2 whitespace-pre-line text-justify">
        {community.about.en}
      </section>
      {isMember ? (
        <div className="text-center">Member</div>
      ) : (
        <button
          className={`${color.bg200} ${color.hoverbg100} ${color.text900}`}
          onClick={onJoin}
        >
          Join
        </button>
      )}
    </div>
  )
}

export default Community
