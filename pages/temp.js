import React from 'react'
import ImportantDate from '../components/ImportantDate'
import ConferenceTracks from '../components/ConferenceTracks'
import Footer from '../components/Footer'
export default function temp() {
  return (
    <div className='bg-green-200'>
      <ImportantDate></ImportantDate>
      <ConferenceTracks />
      <Footer />
    </div>
  )
}
