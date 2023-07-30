import React from 'react'
import Image from 'next/image'

const getData = async (id) => {
  const res = await fetch(
    `https://www.namava.ir/api/v1.0/medias/${id}/preview`,
    { next: { revalidate: 10000 } }
  )

  if (!res.ok) {
    throw Error('Failed To Fetch Media!')
  }

  return res.json()
}

const MediaSinglePage = async ({ params }) => {
  const mediaId = params.id
  const { result: media } = await getData(mediaId)

  return (
    <div dir='rtl' className='w-full'>
      <div className='p-4 md:pt-8 flex flex-col md:flex-row items items-center content-center max-w-6xl mx-auto md:space-x-6'>
        <Image
          className='rounded-lg  md:ml-4'
          src={`https://static.namava.ir${media.coverLandscape}`}
          placeholder='blur'
          blurDataURL='spinner.svg'
          alt='Media Poster is not available!'
          width={500}
          height={250}
          style={{
            maxWidth: '100%',
            height: '100%',
          }}
        />
        <div className='p-2'>
          <h2 className='text-lg mb-3 font-bold'>{media.caption}</h2>
          <p className='text-lg mb-3'>
            <span className='font-semibold ml-1'>درباره فیلم:</span>
            {media.story}
          </p>
          <p className='text-lg mb-3'>
            <span className='font-semibold ml-1'>سال ساخت:</span>
            {media.year}
          </p>
          <p className='text-lg mb-3'>
            <span className='font-semibold ml-1'>نمره:</span>
            %{media.hit}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MediaSinglePage