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
        <div className='description-content'>

          <div className='basics'>
            <div className='basics-row1'>
              <div className='company-content'>
                <div className='heading'>Yrityksen nimi</div>
                <div className='detail'>Sievin Jalkine / co MPS</div>
              </div>
              <div className='company-content'>
                <div className='heading'>Työpaikan sijainti</div>
                <div className='detail'>Sievin asemakylä, Suomi</div>
              </div>
              <div className='company-content'>
                <div className='heading'>Y-tunnus</div>
                <div className='detail'>0632867-2</div>
              </div>
            </div>

            <div className='basics-row2'>
              <div className='company-content'>
                <div className='heading'>Toiminimi</div>
                <div className='detail'>MPS Career Oy</div>
              </div>
              <div className='company-content'>
                <div className='heading'>Toimiala</div>
                <div className='detail'>Muu liikkeenjohdon konsultointi</div>
              </div>
              <div className='company-content'>
                <div className='heading'>Toimitusjohtaja</div>
                <div className='detail'>Elina Maaria Koskela</div>
              </div>
            </div>
          </div>

          <div className='company-content finances'>
            <div className='company-heading'>
              Taloustiedot 2018
            </div>
            <div className='company-table'>
              <div className='company-content'>
                <div className='heading'>Liikevaihto</div>
                <div className='detail'>7 439 941 € <span>+19%</span></div>
              </div>
              <div className='company-content'>
                <div className='heading'>Liiketoiminnan tulos</div>
                <div className='detail'>849 162 € <span>+126%</span></div>
              </div>
              <div className='company-content'>
                <div className='heading'>Liikevoitto-%</div>
                <div className='detail'>11% <span>+83%</span></div>
              </div>
            </div>
          </div>
          <div className='company-content social'>
            <div className='company-heading'>
              Yritys sosiaalisessa mediassa
            </div>
            <div className='company-table'>
              <div className='social-link'>
                <a className='social-a'
                  href='https://www.facebook.com/MPS-Enterprises-324592147580970/'
                  rel='noopener noreferrer' target='_blank'>
                  <div className='button facebook'>
                    <i class="fab fa-facebook-f"></i>
                  </div>
                </a>
              </div>
              <div className='social-link'>
                <a className='social-a'
                  href='https://twitter.com/mpsfinland'
                  rel='noopener noreferrer' target='_blank'>
                  <div className='button twitter'>
                    <i class="fab fa-twitter"></i>
                  </div>
                </a>
              </div>
              <div className='social-link'>
                <a className='social-a'
                  href='https://www.linkedin.com/showcase/9270735/about'
                  rel='noopener noreferrer' target='_blank'>
                  <div className='button linkedin'>
                    <i class="fab fa-linkedin-in"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className='external-link'>
            <a className='button-a'
              href='https://mps.rekrytointi.com/paikat/index.php?jid=2853&key=&o=A_RJ'
              rel='noopener noreferrer' target='_blank'>
              <div className='button apply'>
                <p>Lue lisää työnantajasta</p>
              </div>
            </a>
          </div>

        </div>
      </div>
      <ToggleLinkButton allText={allText} setAllText={setAllText}/>
    </div>
  )

}

export default CompanyDescription