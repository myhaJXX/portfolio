import React, { useEffect} from 'react'
import cl from './mainPage.module.css'
import SetSlideButton from './SetSlideButton'
import MainSec from './MainSec/MainSec'
import SkillsSec from './SkillsSec/SkillsSec'
import WorksSec from './WorksSec/WorksSec'
import AboutSec from './aboutSec/aboutSec'

function MainPage({slide, setSlide}) {
    const slides = [
        <MainSec className={cl.section}/>,
        <SkillsSec className={cl.section}/>,
        <WorksSec  className={cl.section}/>,
        <AboutSec className={cl.section}/>
    ]


    useEffect(()=>{
        setTimeout(()=>{
            document.querySelector(`.${cl['slider-cont']}`).style.opacity = 1
        },600)
        document.querySelectorAll(`.${cl['buttons-cont']}>button`).forEach((e,i)=>{
            if(i === slide){
                e.setAttribute('style', 'border-color: #ab68d8; background-color:#ab68d8;')
                e.setAttribute('disabled', 'true')
            } else {
                e.setAttribute('style', 'background-color:transparent;')
                e.removeAttribute('disabled')
            }
        })

    }, [slide])

  return (
    <main className={cl.main}>

        <nav className={cl['buttons-cont']}>
            <SetSlideButton id={0} setSlide={setSlide}/>
            <SetSlideButton id={1} setSlide={setSlide}/>
            <SetSlideButton id={2} setSlide={setSlide}/>
            <SetSlideButton id={3} setSlide={setSlide}/>
        </nav>

        {/* <h5 className={cl.number}>{`0${slide+1}`}</h5> */}
        <div className={cl['number-cont']}>
            <h5 className={cl.number}>0</h5>
            <div className={cl['number-line']}>
                <h5 className={cl.number}>1</h5>
                <h5 className={cl.number}>2</h5>
                <h5 className={cl.number}>3</h5>
                <h5 className={cl.number}>4</h5>
            </div>
        </div>


        <div className={cl['slider-cont']}>
                {slides[slide]}
        </div>
        
    </main>
  )
}

export default MainPage