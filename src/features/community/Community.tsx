import React from 'react'
import { Community as CommunityType } from './types'

const Community: React.FC<{ community: CommunityType }> = ({ community }) => {
  return (
    <div className="w-64 p-4 bg-purple-300 rounded flex flex-col gap-4">
      <header className="text-xl font-bold py-4 text-center">
        {community.name.en}
      </header>
      <section className="whitespace-pre-line text-justify">
        {community.about.en}
      </section>
    </div>
  )
}

export default Community
