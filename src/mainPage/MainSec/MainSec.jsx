import React, { useEffect } from 'react'
import * as THREE from 'three'
import MainSecTHREE from './MainSecTHREE'
import MainSecInfo from './mainSecInfo'


function MainSec({className}) {



  return (
    <div id='mainSec' className={className} style={{color:'#fff'}}>
        <MainSecTHREE/>
        <MainSecInfo/>
    </div>
  )
}

export default MainSec