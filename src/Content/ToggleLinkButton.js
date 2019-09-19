import React from 'react'

const ToggleLinkButton = (props) => {

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

export default ToggleLinkButton