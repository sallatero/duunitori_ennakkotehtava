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

export const ApplicationInfoBox = (props) => {

  return (
    <div className='application-info-box'>
      <div className='date-box'>
        <div className='date-heading'><span>Hakuaika alkaa:</span></div>
        <div className='apply-date'>04.09.2019 klo 13:15</div>
      </div>
      <div className='date-box'>
        <div className='date-heading'><span>Hakuaika päättyy:</span></div>
        <div className='apply-date'>18.09.2019 klo 23:59</div>
        </div>
      <div className='button apply'>
        <p><a href='https://mps.rekrytointi.com/paikat/index.php?jid=2853&key=&o=A_RJ'
          rel='noopener noreferrer' target='_blank'>Hae työpaikkaa</a>
        </p>
      </div>
    </div>

  )
}

const JobDescription = (props) => {
  // allText is true when all the job description text is visible and
  // false if only the beginning is visible
  const [allText, setAllText] = useState(null)
  console.log('allText: ', allText)

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
    <div className='description-container'>
      <div className={classForTextBox()}>
        <div className='description-text'>
          <h2>Työpaikkakuvaus</h2>
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
          <p>
            Ohjelmistosuunnittelijaa
            <br/><br/>
            Työskentelet osana pientä ja osaavaa ohjelmistokehitystiimiä. Työssäsi painottuvat 
            toiminnanohjausjärjestelmän ylläpito ja kehitys sekä muut yrityksen 
            tietojärjestelmiin liittyvät ohjelmistot. Toiminnanohjausjärjestelmän kehitystyö on 
            käynnistynyt ja pääset tehtävässäsi perehtymään syvällisesti toimintaympäristöön 
            sekä toimimaan tiiviissä yhteistyössä eri puolilla yritystä.
          </p>
          <h3>Toivomme hakijalta</h3>
          <ul>
            <li>Soveltuvaa tietoteknistä koulutusta ja työkokemusta ohjelmistoalalta</li>
            <li>Ohjelmointikokemusta (C++, Java tai VBA)</li>
            <li>Tietokantaosaamista (SQL tai Progress)</li>
            <li>Tuntemusta ohjelmistokehitysmenetelmistä (esim. Progress OpenEdge)</li>
            <li>Laajaa tietoteknistä osaamista sekä kykyä tietojärjestelmien suunnitteluun</li>
            <li>Teollisen toimintaympäristön tuntemusta</li>
            <li>Oma-aloitteisuutta, innostusta uuden oppimiseen ja ammattitaidon kehittämiseen. 
              Lisäksi arvostamme hyviä vuorovaikutus- ja tiimityötaitoja sekä englannin kielen 
              taitoa.</li>
          </ul>
          <p>
            Voit olla rautainen ammattilainen tai muutaman vuoden työkokemustaustan 
            omaava kehittyjä.
          </p>
          <h3>Tarjoamme</h3> 
          <p>Mielenkiintoisen ja vastuullisen työn 
            kansainvälisesti kasvavassa yrityksessä ja mahdollisuuden kehittää 
            osaamistasi menestyvän yrityksen toimikentässä.
          </p>
          <h3>Lisätietoja tehtävästä</h3>
          <p>
            <span>Lisätietoja tehtävästä</span> antaa Sievin Jalkine Oy:n talouspäällikkö 
            Katja Kemppainen <span>pe 6.9. klo 9-11 ja to 12.9. klo 12-15</span>, 
            puh. 040 551 7474 sekä MPS-konsultti Riikka Vaaraniemi, puh. 020 746 9431.
          </p>  
          <h3>Tehtävään hakeminen</h3>
          <p>
            Täytä hakemuslomake palkkatoiveineen ja liitä mukaan CV:si <span>18.9.2019</span> 
            mennessä osoitteessa <a href='https://mps.rekrytointi.com/paikat/index.php?jid=2853&key=&o=A_RJ' 
            rel='noopener noreferrer' target='_blank'>uratori.mps.fi</a> kautta.
          </p>
          <p>
            Sievi on Pohjois-Euroopan suurin jalkinevalmistaja sievi.com
          </p>
        </div>
        <ApplicationInfoBox />
      </div>
    <ToggleLinkButton allText={allText} setAllText={setAllText}/>
  </div>
  )
}

export default JobDescription