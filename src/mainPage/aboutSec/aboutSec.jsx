import React from 'react'
import AboutSecTHREE from './aboutSecTHREE'
import cl from './aboutSec.module.css'

function AboutSec({classname}) {
  return (
    <section className={classname}>
        <AboutSecTHREE/>

        <nav className={cl.cont}>
          <a className={cl.link} href="">myhawhynot@gmail.com</a>
          <a className={cl.link} href="https://t.me/visosi">Telegram</a>
          <a className={cl.link} href="https://leetcode.com/MJXWhyNot">Leetcode</a>
        </nav>

    </section>
  )
}

export default AboutSec