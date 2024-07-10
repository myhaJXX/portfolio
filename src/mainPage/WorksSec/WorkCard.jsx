import React from 'react'
import cl from './worksSecInfo.module.css'

function WorkCard({card}) {
  return (
    <div className={cl.card}>

      <h2 className={cl.title}>{card ? card.title : "NOTHING HERE"}</h2>

      <div className={cl['skills-cont']}>
        {card ? card.skills.map((e,i)=><h5 className={cl.skill} key={i}>{e}</h5>) : <h4 className={cl['skill-none']}>NOTHING HERE</h4>}
      </div>

      <div className={cl['img-cont']}>
        {
          card? <img className={cl.img} src={card.img} alt="" /> : <h4 className={cl['img-none']}>NOTHING HERE</h4>
        }

        <a className={cl.link} href='#'></a>

      </div>

      <div className={cl.desc}>
        {card ? card.desc : <h4 className={cl['desc-none']}>NOTHING HERE</h4>}
      </div>

    </div>
  )
}

export default WorkCard