import React, {useEffect, useState} from "react";
import './app.css'
import Header from "./header/Header";
import MainPage from "./mainPage/MainPage";
import cl from './mainPage/mainPage.module.css'
import Loader from "./loader/loader";
function App() {
  const [load, setLoad] = useState(true)
  const [slide, setSlide] = useState(0)
  const changeSlides = (newSlide)=>{
    document.querySelector(`.${cl['slider-cont']}`).style.opacity = 0
    document.querySelector(`.${cl['number-line']}`).style.top = -newSlide* 80 +'px'
    setTimeout(()=>setSlide(newSlide),400)
  }

  useEffect(()=>{

    setTimeout(()=>{
      document.querySelector('body').style.opacity = '0'
      setTimeout(()=>{
        document.querySelector('body').style.opacity = '1'
      },1100)
      setTimeout(()=>{
        setLoad(false)
      },1000)
    },4000)

  },[])

  return (
    <div className="App">
      {load ? (<Loader/>) : (<Header setSlide={changeSlides}/>)}
      {load ? ("") : (<MainPage slide={slide} setSlide={changeSlides}/>)}
    </div>
  );
}

export default App;
