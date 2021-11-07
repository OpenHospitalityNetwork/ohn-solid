import React from 'react'

const Loading = ({ message = 'Loading' }: { message?: string }) => (
  <div className="flex items-center justify-center h-screen w-screen">
    {message}
  </div>
)

export default Loading
