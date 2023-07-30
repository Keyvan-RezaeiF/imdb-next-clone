import Results from '@/components/Results'
import React from 'react'

const getData = async (type) => {
  let res

  if (type === 'exclusive') {
    res = await fetch(
      'https://www.namava.ir/api/v1.0/medias/exclusive-content/1434/?pi=1&ps=30',
      { next: { revalidate: 10000 } }
    )
  } else {
    res = await fetch(
      `https://www.namava.ir/api/v1.0/medias/${type === 'movies' ? 'latest-movies' : 'latest-series'}?pi=1&ps=30`,
      { next: { revalidate: 10000 } }
    )
  }

  if (!res.ok) {
    throw Error('Failed To Fetch Data!')
  }

  return res.json()
}

export default async function Home({ searchParams }) {
  const type = searchParams.type || 'exclusive'
  const data = await getData(type)

  return (
    <div>
      <Results data={data.result} />
    </div>
  )
}
