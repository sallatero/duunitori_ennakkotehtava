import React, { useState } from 'react'

const HeaderBanner = () => {

  return (
    <div className='header-banner-container'>
      <img className='banner-image' src='SieviImage.jpg' alt='Sievi background' width='100%' />
      <div className='job-intro-box'>
        <div className='headline-container'>
          <img className='company-logo' src='https://duunitori.imgix.net/static/250192836e3e41659bfff5b4a0b5c1b6.jpg?auto=format&lossless=true&w=100' 
          alt='Sievi logo'/>
          <div className='headline-text'>
            <h1>Ohjelmistosuunnittelija</h1>
            <h2>Sievin Jalkine</h2>
            <p>
              Julkaistu 4.9. (<span>2 päivää jäljellä</span>)
            </p>
          </div>
        </div>
        <div className='button-container'>
          <a className='button-a'
            href='https://mps.rekrytointi.com/paikat/index.php?jid=2853&key=&o=A_RJ'
            rel='noopener noreferrer' target='_blank'>
            <div className='button like'>
              <i class="fas fa-heart"></i>
              <div className='button-text'>Like</div>
            </div>
          </a>
          <a className='button-a'
            href='https://mps.rekrytointi.com/paikat/index.php?jid=2853&key=&o=A_RJ'
            rel='noopener noreferrer' target='_blank'>
            <div className='button share'>
              <i class="fas fa-share-square"></i>
              <div className='button-text'>Share</div>
            </div>
          </a>
          <a className='button-a'
            href='https://mps.rekrytointi.com/paikat/index.php?jid=2853&key=&o=A_RJ'
            rel='noopener noreferrer' target='_blank'>
            <div className='button apply'>
              <p>Hae työpaikkaa</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  )

}

export default HeaderBanner