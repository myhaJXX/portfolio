import React, { useEffect} from 'react'
import * as THREE from 'three'
import {GLTFLoader} from '../../../node_modules/three/examples/jsm/loaders/GLTFLoader'
import cl from '../mainPage.module.css'

function SkillSecTHREE({id}) {
    useEffect(()=>{
      let id = 0;
      document.querySelector('#skillSecTHREE').innerHTML = ''
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth * 0.412, window.innerHeight * 0.95 - 75);
        renderer.shadowMap.enabled = true
        document.querySelector('#skillSecTHREE').appendChild(renderer.domElement)

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth * 0.4 / (window.innerHeight * 0.95 - 75),
            0.1,
            1000
        )

        camera.position.set(6,13,0)
        camera.lookAt(-2,0,0)

        const floorGeo = new THREE.PlaneGeometry(700,700, 1, 1)
        const floorMaterial = new THREE.MeshStandardMaterial({
          color: 0X000000
        })
        const floor = new THREE.Mesh(floorGeo, floorMaterial)
        floor.rotation.x = -0.5*Math.PI
        floor.receiveShadow = true
        scene.add(floor)

        document.querySelector('#next').addEventListener('click',()=>{
          camera.position.z += 15
          if(camera.position.z >= 75) camera.position.z = 0
          id = (id+1)%5
          change(id)
        })

        document.querySelector('#prev').addEventListener('click', ()=>{
          camera.position.z -=15
          if(camera.position.z<=-15) camera.position.z = 60
          id = (id+4)%5
          change(id)
        })
        // const con = new OrbitControls(camera, renderer.domElement)
        // con.update()

        const geometry = new THREE.IcosahedronGeometry(5, 0);
        const material = new THREE.MeshPhysicalMaterial({  
          roughness: 0,  
          transmission: 0.995,
          thickness: 0.3,
          color: 0xFFFFFF
        });
        const figura = new THREE.Mesh(geometry, material)
        const light = new THREE.SpotLight(0xFFFFFF, 800, 23, 0.45, 1);
        const loader3D = new GLTFLoader();

        let url;
        const change = ()=>{
          switch(id){
            case 0:{
              figura.position.set(0, 4.7, 0); 
              light.intensity = 700
              light.distance = 23
              light.castShadow = true
              light.position.set(0, 20, 10)
              light.target.position.set(0,0,-5)
              url = new URL('./htmlModel/html5_logo.glb', import.meta.url)
              loader3D.load(
                url + '/',
                (file)=>{
                  file.scene.children[0].position.set(2,3,0)
                  file.scene.children[0].rotation.y = -0.2*Math.PI
                  scene.add(file.scene.children[0])
                }
              )
              break;
            }
            case 1:{
              figura.position.set(0, 4.7, 15);
              light.intensity = 800
              light.distance = 23
              light.castShadow = true
              light.position.set(0, 20, 25)
              light.target.position.set(0,0,5)
              url = new URL('./cssModel/css-3d.glb', import.meta.url)
              loader3D.load(
                url + '/',
                (file)=>{
                  file.scene.children[0].position.set(2,4,15)
                  file.scene.children[0].scale.set(0.0003,0.0003,0.0003)
                  file.scene.children[0].rotation.y = 0.2*Math.PI
                  scene.add(file.scene.children[0])
                }
              )
              break;
            }
            case 2:{
              figura.position.set(0, 4.7, 30); 
              light.intensity = 1000
              light.distance = 24
              light.castShadow = true
              light.position.set(0, 20, 40)
              light.target.position.set(0,0,20)
              url = new URL('./jsModel/javascript_1.glb', import.meta.url)
              loader3D.load(
                url + '/',
                (file)=>{
                  file.scene.children[0].position.set(0,4.5,30)
                  file.scene.children[0].scale.set(0.2,0.2,0.2)
                  file.scene.children[0].rotation.y = 0.3*Math.PI
                  file.scene.children[0].rotation.z = -1*Math.PI
                  scene.add(file.scene.children[0])
                }
              )
              break;
            }
            case 3:{
              figura.position.set(0, 4.7, 45); 
              light.intensity = 2000
              light.distance = 23
              light.castShadow = true
              light.position.set(0, 20, 55)
              light.target.position.set(0,0,33)
              url = new URL('./reactModel/react.glb', import.meta.url)
              loader3D.load(
                url + '/',
                (file)=>{
                  file.scene.children[0].position.set(0,5,45)
                  file.scene.children[0].scale.set(1,1,1)
                  file.scene.children[0].rotation.y = 0.8*Math.PI
                  file.scene.children[0].rotation.z = -1*Math.PI
                  scene.add(file.scene.children[0])
                }
              )
              break;
            }
            case 4:{
              figura.position.set(0, 4.7, 60); 
              light.intensity = 2000
              light.distance = 25
              light.penumbra = 1
              light.castShadow = true
              light.position.set(0, 20, 75)
              light.target.position.set(0,0,40)
              url = new URL('./threeModel/threejs.glb', import.meta.url)
              loader3D.load(
                url + '/',
                (file)=>{
                  file.scene.children[0].position.set(0,5,60.5)
                  file.scene.children[0].scale.set(0.05,0.05,0.05)
                  file.scene.children[0].rotation.y = 0.7*Math.PI
                  file.scene.children[0].rotation.x = 0.5*Math.PI
                  file.scene.children[0].rotation.z = -0.5*Math.PI
                  scene.add(file.scene.children[0])
                }
              )
              break;
            }
          }
          scene.add(figura)
          scene.add(light)
          scene.add(light.target)
        }
        change(id)
        //helps
        // scene.add(new THREE.AxesHelper(5))
        document.querySelectorAll(`#buttonSlide`).forEach(e=>e.addEventListener('click',()=>{
          for( var i = scene.children.length - 1; i >= 0; i--) { 
            window.clearInterval(animate)
            let obj = scene.children[i];
            scene.remove(obj); 
          }
          scene.remove(scene)
        }))

    let animate = setInterval(()=>{
      figura.rotation.y+=0.002
      figura.rotation.x+=0.001
      renderer.render(scene, camera)
    },)
  },[])

  return (
    <div id='skillSecTHREE' style={{right: '0', height: '100%', width: '50%',position: 'absolute'}}></div>
  )
}

export default SkillSecTHREE