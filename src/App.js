import React from 'react'
import JobDescription from './Content/JobDescription'
import HeaderBanner from './Content/HeaderBanner'
import CompanyDescription from './Content/CompanyDescription'

const App = () => {
  return (
    <div className='site-canvas'>
      <div className='page-container'>
        <HeaderBanner />
        <JobDescription />
        <CompanyDescription />
      </div>
    </div>
  )
}

export default App