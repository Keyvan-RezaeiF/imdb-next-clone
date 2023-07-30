import React from 'react'
import Card from './Card'

const Results = ({ data }) => {
  return (
    <div className='sm:grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 max-w-6xl mx-auto py-4'>
      {data.map(res => (
        <Card key={res.id} data={res} />
      ))}
    </div>
  )
}

export default Results