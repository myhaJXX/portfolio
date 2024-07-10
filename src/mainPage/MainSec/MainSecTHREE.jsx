import {React, useEffect} from 'react'
import * as THREE from 'three'

import cl from '../mainPage.module.css'

function MainSecTHREE() {

    useEffect(()=>{
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth * 0.825, window.innerHeight * 0.95 - 75);
        document.querySelector('#mainSecTHREE').appendChild(renderer.domElement);

        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(
            75,
            (window.innerWidth * 0.825) / (window.innerHeight * 0.95 - 75),
            0.1,
            1000
        );

        camera.position.set(5, 5, 15);
        camera.lookAt(-19,0,0)

        const clock = new THREE.Clock()

        const uniforms = {
            u_time:{type: 'f', value:0},
        }
        let _VS = `
        uniform float u_time;
        float defX;
        float defY;
        float defZ;
        vec4 new;
        void main(){
            defY = sin(position.x*10.0+u_time*2.0)+position.y;
            defX = cos((position.z+position.y)*10.0+ u_time/2.0)+position.x;
            defZ = cos((position.x+position.y)*10.0+ u_time/2.0)+position.z;
            new = vec4(defX, defY, defZ, 1.0);
            gl_Position = projectionMatrix * modelViewMatrix * vec4(new);
        }
        `

        let _FS = `
        void main(){
            gl_FragColor = vec4(vec3(0.35,0.20,0.45), 1);
        }
        `
        const mainGeo = new THREE.SphereGeometry(15, 15, 15)
        const mainMat = new THREE.ShaderMaterial({
            uniforms,
            vertexShader: _VS,
            fragmentShader: _FS
        })

        const mainSphere = new THREE.Mesh(mainGeo,mainMat)
        mainSphere.material.wireframe = true;
        mainGeo.scale(1.01,1.01,1.01)
        scene.add(mainSphere)

        //helps
        // scene.add(new THREE.AxesHelper(4))
        // const orbit = new OrbitControls(camera, renderer.domElement)

        document.querySelectorAll('#buttonSlide').forEach(e=>e.addEventListener('click',()=>{
            for( var i = scene.children.length - 1; i >= 0; i--) { 
              let obj = scene.children[i];
              scene.remove(obj); 
            }
            window.clearInterval(animate)
          }))

        const animate = setInterval(()=>{
            uniforms.u_time.value = clock.getElapsedTime();
            renderer.render(scene, camera)
        })

    },[])

  return (
    <div style={{position:'absolute', zIndex:'1'}} id='mainSecTHREE'></div>
  )
}

export default MainSecTHREE