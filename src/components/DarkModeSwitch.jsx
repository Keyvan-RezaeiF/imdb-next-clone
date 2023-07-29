'use client'

import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { MdLightMode } from 'react-icons/md'
import { BsFillMoonFill } from 'react-icons/bs'

const DarkModeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { systemTheme ,theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const currentTheme = (theme === 'system') ? systemTheme : theme

  return (
    <>
      {mounted && (currentTheme === 'dark' ? (
        <MdLightMode className='cursor-pointer text-xl hover:text-amber-500' onClick={() => setTheme('light')} />
      ) : (
        <BsFillMoonFill className='cursor-pointer text-xl hover:text-amber-500' onClick={() => setTheme('dark')} />
      ))}
    </>
  )
}

export default DarkModeSwitch