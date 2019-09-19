import React, { useState } from 'react'

export const ToggleLinkButton = (props) => {

  if (props.allText) {
    return (
      <div className='toggle-link-button' onClick={() => props.setAllText(false)}>
        Piilota <i class="fas fa-chevron-up"></i></div>
    )
  } else {
    return (
      <div className='toggle-link-button' onClick={() => props.setAllText(true)}>
        Näytä lisää <i class="fas fa-chevron-down"></i></div>
    )
  }
}

const CompanyDescription = () => {
  const [allText, setAllText] = useState(null)

  const classForTextBox = () => {
    if ( allText === true ) {
      return 'description-text-box all'
    } else if ( allText === false ) {
      return 'description-text-box less'
    } else {
      return 'description-text-box less'
    }
  }

  return (
    <div className='company-container'>
      <div className={classForTextBox()}>
        <h2>Työnantajakuvaus</h2>
        <div className='description-text'>
          <p>
            <h3>Menestykseen kotimaisella työllä!</h3>
          </p>
          <p>
            <a href='https://www.sievi.com/fi/' rel='noopener noreferrer' target='_blank'>Sievin Jalkine Oy</a> on Pohjois-Euroopan suurin jalkinevalmistaja. 
            Vuonna 1951 perustettu kansainvälinen perheyritys työllistää tällä hetkellä 
            yhteensä noin 550 henkilöä sekä kotimaassa että ulkomailla. Konsernin liikevaihto 
            v. 2018 oli 146 milj. euroa, josta viennin osuus on 50 %. Tuotantolaitoksemme 
            sijaitsevat Sievissä ja Oulaisissa.
          </p>
          <p>
            <h3>Haemme Sievin toimipisteeseemme</h3>
          </p>
        </div>
      </div>
      <ToggleLinkButton allText={allText} setAllText={setAllText}/>
    </div>
  )

}

export default CompanyDescription