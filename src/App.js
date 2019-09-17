import React from 'react'
import JobDescription from './Content/JobDescription'
import HeaderBanner from './Content/HeaderBanner'

const App = () => {
  return (
    <div className='site-canvas'>
      <div className='page-container'>
        <HeaderBanner />
        <JobDescription />
      </div>
    </div>
  )
}

export default App