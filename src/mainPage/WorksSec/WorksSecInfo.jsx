import React, { useEffect, useState } from 'react'
import cl from './worksSecInfo.module.css'
import WorkCard from './WorkCard'
import L1 from '../../static/cards/site1.png'
import L2 from '../../static/cards/s2.png'

const cards = [
    {title:'COMPOS',
    desc: 'COMPOS - website of the COMPOS electronics store. The site contains all the pages necessary for this site and full store functionality. It took 7 working days to create this page. Was created 05/10/2024.', 
    img:L1, href: '', skills: ["HTML", "CSS", "JS", "REACT"]},

    {title:'GREENSHOP',
    desc: 'GREENSHOP - a store of various flowers. A full-fledged multi-page website containing detailed information about each flower. Created in 7 working days 05/17/2024', 
    img:L2, href: '', skills: ["HTML", "SASS","REACT", "JS"]},

    // {title:'MYLATEST',
    // desc: 'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 
    // img:L1, href: '', skills: ["HTML", "CSS","REACT", "JS", "THREEJS"]},

    // {title:'MYLATEST',
    // desc: 'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 
    // img:L2, href: '', skills: ["HTML", "CSS","REACT", "JS", "THREEJS"]},

    // {title:'MYLATEST',
    // desc: 'incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 
    // img:L1, href: '', skills: ["HTML", "CSS","REACT", "JS", "THREEJS"]},

    // {title:'MYLOREMISPOUN', desc: '', img:'', href: '', skills: ["HTML", "JS", "THREEJS"]},
]

function WorksSecInfo() {

  const [id,setId] = useState(0)

  useEffect(()=>{
    console.log(id)
    document.querySelector(`.${cl.box}`).style.opacity = '1'
    document.querySelectorAll(`.${cl.href}`).forEach((e,i)=>{
      e.style.color = i==id ? '#ab68d8' :'#727272'
      e.addEventListener('mouseover',()=>e.style.color = '#c39cdd')
      e.addEventListener('mouseleave',()=>{
        e.style.color = i==id ? '#ab68d8' :'#727272'
      })
    })
  },[id])

  return (
    <div className={cl.cont}>

      <nav className={cl['hrefs-cont']}>
        {cards.map((e,i)=> 
          <a id={`work${i}`} 
          onClick={(e)=>{
            e.preventDefault()
            let idString = e.currentTarget.id
            document.querySelector(`.${cl.box}`).style.opacity = '0';
            setTimeout((e)=>{
              setId(Number(idString.slice(idString.length - 1, idString.length)))
            },350)
          }}
          className={cl.href} key={i}>{e.title}
          </a>
        )}
      </nav>

      <div className={cl.box}>
        <WorkCard key={id} card={cards[id]}/>
      </div>
    </div>
  )
}

export default WorksSecInfo