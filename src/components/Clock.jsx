'use client'
import { useEffect, useState } from 'react'

const Clock = () => {
  const [time, setTime] = useState('')
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  if (!isMounted) return null // or return a loader

  return  <div className="fixed bottom-0 left-0 w-full bg-gray-300 p-3">
    <p className='ml-30'>Current Time : {time}</p>
  </div>

 
}


export default Clock