'use client'

import React from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

const NavbarItem = ({ title, param }) => {
  const searchParams = useSearchParams()
  const type = searchParams.get('type')

  return (
    <div>
      <Link
        href={`/?type=${param}`}
        className={
          `m-4 hover:text-amber-600 font-semibold p-2 ${type && type === param && 'underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg'}`
        }
      >
        {title}
      </Link>
    </div>
  )
}

export default NavbarItem