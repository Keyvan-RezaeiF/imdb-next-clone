import React from 'react'
import Results from '@/components/Results'

const getData = async (query) => {
  const res = await fetch(
    `https://www.namava.ir/api/v3.0/search/advance?type=all&count=30&page=1&query=${query}`,
    { next: { revalidate: 10000 } }
  )

  if (!res.ok) {
    throw Error('Failed To Search Media!')
  }

  const { result } = await res.json()
  const { result_items } = result
  const [data] = result_items
  const { groups: { Media: { items } } } = data

  const searchResult = items.map(item => ({
    id: item.id,
    imageFullUrl: item.image_url,
    caption: item.name,
  }))


  return searchResult
}

const SearchPage = async ({ params }) => {
  const query = params.query
  const searchResult = await getData(query)

  return (
    <div>
      {searchResult && searchResult.length === 0 && (
        <h1 className='text-center pt-6'>No Media Found!</h1>
      )}
      {searchResult && <Results data={searchResult} />}
    </div>
  )
}

export default SearchPage