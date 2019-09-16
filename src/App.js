import React from 'react'
import JobDescription from './Content/JobDescription'
import HeaderBanner from './Content/HeaderBanner'

const App = () => {
  return (
    <div className='page-container'>
      <HeaderBanner />
      <JobDescription />
    </div>
  )
}

export default App