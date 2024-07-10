import React, { useEffect } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'

import cl from '../../mainPage/mainPage.module.css'

import createText from './titles'

function AboutSecTHREE() {

    useEffect(()=>{
        document.querySelector('#aboutSecTHREE').innerHTML = ''
        const renderer = new THREE.WebGLRenderer({antialias: true});
        renderer.setSize(window.innerWidth * 0.825, window.innerHeight * 0.95 - 75);
        renderer.shadowMap.enabled = true
        renderer.shadowMap.type = THREE.PCFSoftShadowMap
        document.querySelector('#aboutSecTHREE').appendChild(renderer.domElement)

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth * 0.825 / (window.innerHeight * 0.95 - 75),
            0.1,
            1000
        )
        //helps
        const controls = new OrbitControls(camera, renderer.domElement)
        controls.update()
        // scene.add(new THREE.AxesHelper(100))

        //light
        // scene.add(new THREE.DirectionalLight(0xFFFFFF, 1))
        const lightBig = new THREE.SpotLight(0xFFFFFF,1000, 80, 0.5,1)
        lightBig.position.set(0,0,60)
        // scene.add(new THREE.SpotLightHelper(lightBig))
        scene.add(lightBig)

        const lightLittle1 = new THREE.SpotLight(0xAB68D8,800, 80, 0.53,1)
        lightLittle1.position.set(0,0,60)
        lightLittle1.target.position.set(-18,-2,0)
        scene.add(lightLittle1.target)
        // scene.add(new THREE.SpotLightHelper(lightLittle1))
        scene.add(lightLittle1)

        const lightLittle2 = new THREE.SpotLight(0xAB68D8,800, 80, 0.55,1)
        lightLittle2.position.set(0,0,60)
        lightLittle2.target.position.set(18,-2,0)
        scene.add(lightLittle2.target)
        // scene.add(new THREE.SpotLightHelper(lightLittle2))
        scene.add(lightLittle2)

        const lightLittle3 = new THREE.SpotLight(0xAB68D8,800, 80, 0.53,1)
        lightLittle3.position.set(0,0,60)
        lightLittle3.target.position.set(0,5,0)
        scene.add(lightLittle3.target)
        // scene.add(new THREE.SpotLightHelper(lightLittle3))
        scene.add(lightLittle3)

        const lightLittle4 = new THREE.SpotLight(0xAB68D8,800, 80, 0.53,1)
        lightLittle4.position.set(0,0,60)
        lightLittle4.target.position.set(0,-5,0)
        scene.add(lightLittle4.target)
        // scene.add(new THREE.SpotLightHelper(lightLittle4))
        scene.add(lightLittle4)

        // scene.add(new THREE.SpotLightHelper(light))

        //text
      
        createText(scene)

        //textures
        let monitors = new Array()

        //TVS
        let tvS = []
        const loader = new GLTFLoader();
        const textureLoader = new THREE.TextureLoader()
        // let textureLink = new URL('../../static/texture/glitch1.jpg', import.meta.url)
        let glassUrl = new URL('../../static/texture/glass.jpg', import.meta.url)
        let brokenGlass = new URL('../../static/texture/broken.png', import.meta.url)

        const material = new THREE.MeshPhysicalMaterial({  
          opacity: 0.2, 
          transparent: true,
        });

        const brokenMat = new THREE.MeshPhysicalMaterial({
          opacity:1,
          map: textureLoader.load(brokenGlass),
          transparent: true
        })

        const glassMaterial = new THREE.MeshStandardMaterial({
          color: 0x666666,
          map: textureLoader.load(glassUrl)
        })

        const tv1 = (s,x,y,z,rx,ry,rz, id)=>{
          const geometry = new THREE.BoxGeometry(40, 30,2);

          let monit
          if(id == 0){
            monit = new THREE.Mesh(geometry,brokenMat)
          } else {
            monit = new THREE.Mesh(geometry, material)
          }
          monit.rotation.x = -0.5*Math.PI

          const glass = new THREE.Mesh(geometry,glassMaterial)
          glass.rotation.x = -0.5*Math.PI

          let url = new URL('../../static/models/tv1.glb', import.meta.url)
          loader.load(
            url + '/',
            (file)=>{
            //   console.log(file.scene.children[0])
              tvS = [...tvS,file.scene.children[0]]
              file.scene.children[0].children[0].children[0].children[0].children[0].children[4].visible = false

              file.scene.children[0].scale.set(s,s,s)
              file.scene.children[0].position.set(x,y,z)
              file.scene.children[0].rotation.set(rx,ry,rz)

              file.scene.children[0].add(monit)
              monit.position.set(0,-24,17)

              file.scene.children[0].add(glass)
              glass.position.set(0,-17, 17)

              monitors = [...monitors, monit]
              // file.scene.children[0].add(new THREE.AxesHelper(40))
              scene.add(file.scene.children[0])
            }
        )
        }

        const tv2 = (s,x,y,z,rx,ry,rz, id)=>{
          const geometry = new THREE.BoxGeometry(1.5, 1.3,0.1);

          let monit
          if(id == 0){
            monit = new THREE.Mesh(geometry,brokenMat)
          } else {
            monit = new THREE.Mesh(geometry, material)
          }
          monit.rotation.x = -0.5*Math.PI

          const glass = new THREE.Mesh(geometry,glassMaterial)
          glass.rotation.x = -0.5*Math.PI

          let url = new URL('../../static/models/tv2.glb', import.meta.url)
          loader.load(
            url + '/',
            (file)=>{
            //   console.log(file.scene.children[0])
              tvS = [...tvS,file.scene.children[0]]

              file.scene.children[0].children[0].children[3].visible = false

              file.scene.children[0].scale.set(s,s,s)
              file.scene.children[0].position.set(x,y,z)
              file.scene.children[0].rotation.set(rx,ry,rz)

              file.scene.children[0].add(monit)
              monit.position.set(-0.2,-0.64,0.05)

              file.scene.children[0].add(glass)
              glass.position.set(-0.2,-0.45,0.05)

              monitors = [...monitors, monit]
              // file.scene.children[0].add(new THREE.AxesHelper(40))
              scene.add(file.scene.children[0])
            }
        )
        }

        const tv3 = (s,x,y,z,rx,ry,rz, id)=>{
          const geometry = new THREE.BoxGeometry(40, 40,0.1);
          let monit
          if(id == 0){
            monit = new THREE.Mesh(geometry,brokenMat)
          } else {
            monit = new THREE.Mesh(geometry, material)
          }
          monit.rotation.x = -0.5*Math.PI

          const glass = new THREE.Mesh(geometry,glassMaterial)
          glass.rotation.x = -0.5*Math.PI

          let url = new URL('../../static/models/tv3.glb', import.meta.url)
          loader.load(
            url + '/',
            (file)=>{
            //   console.log(file.scene.children[0])
              tvS = [...tvS,file.scene.children[0]]

              file.scene.children[0].children[0].children[0].children[3].visible = false

              file.scene.children[0].scale.set(s,s,s)
              file.scene.children[0].position.set(x,y,z)
              file.scene.children[0].rotation.set(rx,ry,rz)
              
              file.scene.children[0].add(monit)
              monit.position.set(0,0,25)

              file.scene.children[0].add(glass)
              glass.position.set(0,9.5,22)

              monitors = [...monitors, monit]
              // file.scene.children[0].add(new THREE.AxesHelper(40))
              scene.add(file.scene.children[0])
            }
        )
        }

        const tv4 = (s,x,y,z,rx,ry,rz, id)=>{
          const geometry = new THREE.BoxGeometry(15, 11.02,0.1);
          let monit
          if(id == 0){
            monit = new THREE.Mesh(geometry,brokenMat)
          } else {
            monit = new THREE.Mesh(geometry, material)
          }
           
          monit.rotation.x = -0.5*Math.PI

          const glass = new THREE.Mesh(geometry,glassMaterial)
          glass.rotation.x = -0.5*Math.PI

          let url = new URL('../../static/models/tv4.glb', import.meta.url)
          loader.load(
            url + '/',
            (file)=>{
              // console.log(file.scene.children[0])
              tvS = [...tvS,file.scene.children[0]]

              file.scene.children[0].children[0].children[0].children[0].visible = false

              file.scene.children[0].scale.set(s,s,s)
              file.scene.children[0].position.set(x,y,z)
              file.scene.children[0].rotation.set(rx,ry,rz)
              
              file.scene.children[0].add(monit)
              monit.position.set(0,-6,5.7)

              file.scene.children[0].add(glass)
              glass.position.set(0,-4,5.7)

              monitors = [...monitors, monit]
              // file.scene.children[0].add(new THREE.AxesHelper(40))
              scene.add(file.scene.children[0])
            }
        )
        }

        //createTVS
        // monitor();
        // tv1(0.2, 25, -1, 10, -0.5*Math.PI, 0, -0.125*Math.PI)
        // tv1(0.15, 27, 6.5, 10, -0.5*Math.PI, 0, -0.125*Math.PI)
        // tv1(0.2, -20, 0, 10, -0.5*Math.PI, 0, 0.125*Math.PI)
        // tv1(0.2, -29, -15.5, 18, -0.55*Math.PI, -0.03*Math.PI, 0.25*Math.PI, 0)

        // tv2(10, 25, -1, 3 -0.5*Math.PI, 0, -0.125*Math.PI)
        tv2(4, 25, 2, 10, -0.5*Math.PI, 0, -0.125*Math.PI)
        tv3(0.15, 25, 5.5, 13, -0.5*Math.PI, 0, -0.125*Math.PI)
        tv2(5, -20, 4, 10, -0.5*Math.PI, 0, 0.125*Math.PI)
        tv2(4.5, -28.5, -12.5, 18, -0.55*Math.PI, -0.03*Math.PI, 0.25*Math.PI, 0)

        tv2(10, 0, -20, 0, -0.550*Math.PI, 0, 0)
        tv2(5, -26, -4, 15, -0.5*Math.PI, 0, 0.25*Math.PI)
        tv3(0.2, -25, 0.5, 22, -0.5*Math.PI, 0, 0.25*Math.PI)
        tv3(0.3, 17, -25, 11, -0.55*Math.PI, 0.02*Math.PI, -0.2*Math.PI, 0)
        tv4(0.75, 23, -10.5, 4, -0.5*Math.PI, 0, -0.15*Math.PI, 0)
        tv4(0.75, -18, -18, 9, -0.56*Math.PI, 0, 0.1*Math.PI, 0)
        tv4(0.7, -15, 9, 9, -0.45*Math.PI, 0.02*Math.PI, 0.1*Math.PI, 0)
        tv1(0.2, -26.3, 10.5, 17, -0.45*Math.PI, 0.04*Math.PI, 0.2*Math.PI, 0)
        tv3(0.28, 0, 13, 10, -0.430*Math.PI, 0, 0)
        tv2(8, 17, 20, 8, -0.40*Math.PI, 0, -0.1*Math.PI)
        tv2(5, -13, 21, 13, -0.4*Math.PI, 0.03*Math.PI, 0.1*Math.PI)
        tv4(0.6, -33, -7.3, 25, -0.55*Math.PI, -0.04*Math.PI, 0.3*Math.PI)
        tv4(0.7, 31, 12, 16, -0.4*Math.PI, -0.0*Math.PI, -0.3*Math.PI, 0)
        tv3(0.2, 30, 0, 22, -0.5*Math.PI, 0.02*Math.PI, -0.3*Math.PI, 0)
        tv2(6, 37.5, 13, 30, -0.4*Math.PI, -0.05*Math.PI, -0.5*Math.PI)
        tv2(7, 37, -7, 14, -0.5*Math.PI, 0, -0.3*Math.PI,0)
        tv1(0.2, 29.3, -20, 15, -0.55*Math.PI, 0.05*Math.PI, -0.2*Math.PI)
        //behihdWALL
        tv4(0.7, -26, 20, 18, -0.4*Math.PI, 0.07*Math.PI, 0.2*Math.PI,0)
        tv2(4.5, -30, 13, 30, -0.45*Math.PI, 0.07*Math.PI, 0.5*Math.PI,0)
        tv1(0.2, -35.3, 2, 29, -0.48*Math.PI, 0.04*Math.PI, 0.4*Math.PI,0)
        tv1(0.15, -33.5, -13, 28, -0.55*Math.PI, -0.02*Math.PI, 0.4*Math.PI,0)
        tv3(0.2, -25, -25, 22, -0.6*Math.PI, -0.07*Math.PI, 0.2*Math.PI,0)
        tv1(0.3, 18, -39, 9, -0.65*Math.PI, 0.05*Math.PI, -0.2*Math.PI,0)
        tv2(6, -19, -25, 7, -0.550*Math.PI, 0, 0.1*Math.PI, 0,0)
        tv4(0.8, -2, -38, 9, -0.7*Math.PI, 0, 0,0)
        tv4(0.7, 27, -30, 20, -0.7*Math.PI, 0.2*Math.PI, -0.2*Math.PI,0)
        tv2(7, 44, -7, 27, -0.5*Math.PI, 0, -0.3*Math.PI,0)
        tv2(4, 35, -16, 25, -0.6*Math.PI, 0.1*Math.PI, -0.3*Math.PI,0)
        tv1(0.2, 36, -1, 30, -0.5*Math.PI, 0.02*Math.PI, -0.3*Math.PI,0)

        camera.position.set(0,0,50)
        camera.lookAt(0,0,0)
        lightLittle1.intensity = 5000
        lightLittle2.intensity = 5000
        // setInterval(()=>{
        //     renderer.render(scene,camera)
        // },100)

        setTimeout(()=>{
          renderer.render(scene,camera)
        }, 1000)


        document.querySelectorAll(`#buttonSlide`).forEach(e=>e.addEventListener('click',()=>{
          for( var i = scene.children.length - 1; i >= 0; i--) { 
            let obj = scene.children[i];
            scene.remove(obj); 
          }
        }))

    },[])
    return (
    <div id='aboutSecTHREE'>

    </div>
    )
}

export default AboutSecTHREE