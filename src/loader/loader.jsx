import React, { useEffect } from 'react'

import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js'

import cl from './loader.module.css'

function Loader() {

    useEffect(()=>{
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        document.querySelector('#loadingSec').appendChild(renderer.domElement)

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        )
        camera.position.set(0,0,20)

        const controls = new OrbitControls(camera, renderer.domElement)
        controls.update()

      const uniforms = {
          u_time:{type: 'f', value:0},
          u_resolution: { type: "v2", value: new THREE.Vector2(window.innerWidth, window.innerHeight)}
      }


      let _VS = `
      uniform float u_time;
      varying vec3 pos;

      void main(){
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x, position.y,position.z, 1.0);
      }
      `

      let _FS = `
      varying vec3 pos;
      uniform float u_time;
      uniform vec2 u_resolution;

      float sdfCircle(vec2 p, float r){
        const float k = sqrt(3.0);
        p.x = abs(p.x) - r;
        p.y = p.y + r/k;
        if( p.x+k*p.y>0.0 ) p = vec2(p.x-k*p.y,-k*p.x-p.y)/2.0;
        p.x -= clamp( p.x, -2.0*r, 0.0 );
        return -length(p)*sign(p.y);
      }

      void main(){

        vec2 uv = gl_FragCoord.xy / u_resolution;
        uv = uv-0.5;
        uv = uv*2.0;
        uv = uv* u_resolution / 100.0;

        vec3 black = vec3(0.0);
        vec3 white = vec3(1.0);
        vec3 red = vec3(1.0, 0.0, 0.0);
        vec3 blue = vec3(0.65, 0.86, 1.0);
        vec3 orange = vec3(0.9, 0.6, 0.3);
        vec3 green = vec3(0.7, 1.0, 0.2);
        vec3 purple = vec3(0.5, 0, 0.5);

        vec3 color = vec3(uv.x, uv.y, 0.0);

        float radius = 4.0;
        vec2 center = vec2(0.0,0.0);

        float distance = sdfCircle(uv - center, radius);
        color = distance > 0.0 ? orange : blue;
        color = distance == 0.0 ? 1.75*color * (1.0 - exp(-2.0 * abs(distance))) : color * (1.0 - exp(-2.0 * abs(distance)));
        color = color*0.8 + color * 0.2 * sin(50.0 * distance + 30.0*u_time);

        color = vec3(color.x - sin(u_time*3.0) - 0.96, color.y-sin(u_time*3.0) - 0.96, color.z-sin(u_time*3.0) - 0.96);


        color = mix(white, color, 2.0*abs(distance));


        gl_FragColor = vec4(color, 1.0);
      }
      `

        const planeGeo = new THREE.PlaneGeometry(100,100,20,20)
        // const planeMat = new THREE.MeshBasicMaterial({color:0xFFFFFFF})
        const planeMat = new THREE.ShaderMaterial({
          uniforms,
          vertexShader: _VS,
          fragmentShader: _FS,
        })

        const plane = new THREE.Mesh(planeGeo, planeMat)
        scene.add(plane)
        const clock = new THREE.Clock()
        setTimeout(()=>{
          clearInterval(update)
        },4800)

        let lets = document.querySelectorAll(`.${cl.letter}`);
        let id = 0;
        const loadLetters = setInterval(()=>{
          lets[id].style.opacity = '1'
          id++
          if(id == 16) clearInterval(loadLetters)
        },250)

        const update = setInterval(()=>{
            renderer.render(scene, camera)
            uniforms.u_time.value = clock.getElapsedTime();
        },10)
    }, [])

  return (
  <div
    style={{height: '100vh', width:'100vw', position:'absolute',display:'flex',justifyContent:'center', zIndex:'3'}}
    id='loadingSec'>
      <div className={cl.cont}>
        <div className={cl.box}>
          <h1 className={cl.letter}>G</h1>
          <h1 className={cl.letter}>O</h1>
          <h1 className={cl.letter}>R</h1>
          <h1 className={cl.letter}>B</h1>
          <h1 className={cl.letter}>A</h1>
          <h1 className={cl.letter}>T</h1>
          <h1 className={cl.letter}>E</h1>
          <h1 className={cl.letter}>N</h1>
          <h1 className={cl.letter}>K</h1>
          <h1 className={cl.letter}>O</h1>
        </div>
        <div className={cl.box}>
          <h1 className={cl.letter}>S</h1>
          <h1 className={cl.letter}>E</h1>
          <h1 className={cl.letter}>R</h1>
          <h1 className={cl.letter}>G</h1>
          <h1 className={cl.letter}>E</h1>
          <h1 className={cl.letter}>Y</h1>
        </div>
      </div>
    </div>
  )
}

export default Loader