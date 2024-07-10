import React, { useEffect } from 'react'
import * as THREE from 'three'
import cl from '../../mainPage/mainPage.module.css'


function WorksSecTHREE() {
    useEffect(()=>{
        document.querySelector('#worksSecTHREE').innerHTML = ''
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth * 0.825, window.innerHeight * 0.95 - 75);
        renderer.shadowMap.enabled = true
        document.querySelector('#worksSecTHREE').appendChild(renderer.domElement)

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth * 0.825 / (window.innerHeight * 0.95 - 75),
            0.1,
            1000
        )

        camera.position.set(6,13,0)
        camera.lookAt(-2,0,0)
        renderer.render(scene,camera)
    },[])
  return (
    <div style={{position:'absolute', zIndex:'1'}} id='worksSecTHREE'>

    </div>
  )
}

export default WorksSecTHREE