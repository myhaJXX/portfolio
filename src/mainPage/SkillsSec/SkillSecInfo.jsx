import React, { useState } from 'react'
import cl from './skillSecInfo.module.css'

function SkillSecInfo({items, id}) {

  return (
    <div className={cl.cont}>
        <h1>My main <strong style={{color: '#ab68d8', filter: 'drop-shadow(0px 0px 3px #ab68d8)'}}>skills</strong></h1>
        <div className={cl.box}>
          <h2 className={cl.title}>{items[id].title}</h2>
          <div style={{display:'grid', alignContent:'center'}}>
            <h5 className={cl.body}>{items[id].body}</h5>
            <h5 className={cl.body}>{items[id].ending}</h5>
          </div>
        </div>

        
    </div>
  )
}

export default SkillSecInfo