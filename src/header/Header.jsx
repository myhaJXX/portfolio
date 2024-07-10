import React from 'react'
import cl from './header.module.css'
import './header.css'

const links = [
  "MAIN PAGE", "SKILLS", "WORKS", "ABOUT"
]

function Header({setSlide}) {
  return (
    <header>

        <div className={cl['logo-cont']}>
            <h1>MJXWHYNOT</h1>
        </div>

        <nav className={cl['link-cont']}>
            {links.map((e,i)=><a key={i} 
            className={cl.link}
            id='buttonSlide'
            onClick={()=>{setSlide(i)}}
            >
              {e}
            </a>)}
        </nav>

    </header>
  )
}

export default Header