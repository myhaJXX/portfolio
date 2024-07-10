import React from 'react'

function SetSlideButton({id, setSlide}) {
  return (
    <button
    id='buttonSlide'
    style={{backgroundColor: 'transparent'}}
    onClick={()=>{
        setSlide(id)
    }}></button>
  )
}

export default SetSlideButton

// document.querySelector(`${cl['slider-line']}`).style.top = `-100% * ${slide}`