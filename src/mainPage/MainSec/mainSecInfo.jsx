import React from 'react'
import cl from './mainSecInfo.module.css'
import ava from '../../static/ava.png'
import { Color } from 'three/src/Three.js'
import ava1 from '../../static/ava.jpg'

function MainSecInfo() {
  return (
    <div className={cl.cont}>
        <div>
            <img src={ava1} alt="" />
        </div>
        <h2>Hello, I am <strong style={{color: '#ab68d8', filter: 'drop-shadow(0px 0px 4px #ab68d8)'}}>&nbsp;Sergey</strong></h2>
        <h6>
            Frontend Developer in Belarus.
            <br/>
            I create websites for me and to help people
        </h6>
    </div>
  )
}

export default MainSecInfo