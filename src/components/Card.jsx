import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Card = ({ data }) => {
  console.log(data)

  return (
    <div className='cursor-pointer sm:p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded sm:border sm:border-slate-400 m-2 transition-shadow duration-200 group'>
      <Link href={`/movie/${data.id}`}>
        <Image
          className='sm:rounded-t-lg group-hover:opacity-80 duration-200'
          src={`https://static.namava.ir${data.imageUrl}`}
          placeholder='blur'
          blurDataURL='spinner.svg'
          alt='image is not available!'
          width={500}
          height={250}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
        <div className='p-1 text-center mt-2'>
          <p>{data.caption}</p>
        </div>
      </Link>
    </div>
  )
}

export default Card