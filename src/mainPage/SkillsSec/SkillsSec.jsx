import React, {useState } from 'react'
import SkillSecInfo from './SkillSecInfo'
import SkillSecTHREE from './SkillSecTHREE'

import cl from './skillSecInfo.module.css'
//HTML CSS JS REACT SASS THREEJS

let languages = [
  {
  title: 'HTML', 
  body:'HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the content and structure of web content', 
  ending:'<strong> I started learning HTML in 2022 on the advice of a friend. I created simple pages and a website for a presentation at school <strong/>'
  },
  {
    title: 'CSS',
    body: 'CSS is a style sheet language used for specifying the presentation and styling of a document written in a markup language',
    ending: '<strong> I started learning CSS along with HTML at the same time. My first pages were with simple CSS using only simple tags <strong/>'
  },
  {
    title: 'JavaScript',
    body: 'JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else',
    ending : '<strong> After that, I began to realize that this activity attracted me greatly, and I began to spend more time studying this area. In 2023 I started learning JavaScript by watching various video courses and improving my language skills on Leetcode <strong/>'
  },
  {
    title: 'React',
    body: 'React is an open source JavaScript library for developing user interfaces. React can be used to develop single page and mobile applications',
    ending: '<strong> When I began to realize that I knew JS quite well, I started learning React. The creation of more complex pages began, it was difficult to get used to writing the site structure <strong/>'
  },
  {
    title: 'Three.js',
    body: 'Three.js is a cross-browser JavaScript library used for creating and displaying animated 3D computer graphics when developing web applications',
    ending: '<strong> After watching several React courses, it became interesting to explore additional libraries. Now, in 2024, I am studying a library for 3D modeling on websites <strong/>'
  }
]

function SkillsSec({className}) {
  let [id, setId] = useState(0)
  return (
    <section className={className}>
      <SkillSecTHREE/>
      <SkillSecInfo items={languages} id={id}/>
      <nav className={cl['buttons-cont']}>
            <button 
            id='prev'
            onClick={()=>{
              document.querySelector(`.${cl.box}`).style.opacity = '0'
              setTimeout(()=>{
                setId((id+4)%5)
                document.querySelector(`.${cl.box}`).style.opacity = '1'
              }, 400)
            }}
            className={cl.button}></button>
            <button 
            id='next'
            onClick={()=>{
              document.querySelector(`.${cl.box}`).style.opacity = '0'
              setTimeout(()=>{
                setId((id+1)%5)
                document.querySelector(`.${cl.box}`).style.opacity = '1'
              },400)
            }}
            className={cl.button}></button>
        </nav>
    </section>
  )
}

export default SkillsSec