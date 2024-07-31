import React from 'react'
import { useParams } from 'react-router-dom'

function User() {

    const {userid} = useParams()

  return (
    <div className='bg-gray-700 text-green-400'>User: {userid}</div>
  )
}

export default User