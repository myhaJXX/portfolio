import * as THREE from 'three'
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import BOLDFont from 'three/examples/fonts/helvetiker_bold.typeface.json'
import REGFont from 'three/examples/fonts/helvetiker_regular.typeface.json'
import cl from '../../mainPage/mainPage.module.css'

const createText = (scene)=>{

  let glassUrl = new URL('../../static/texture/glass.jpg', import.meta.url)

  document.querySelectorAll(`.${cl['buttons-cont']}>button`).forEach(e=>e.addEventListener('click',()=>{
    for( var i = scene.children.length - 1; i >= 0; i--) { 
      let obj = scene.children[i];
      scene.remove(obj); 
    }
  }))

  const kindWords = ["family","friends", "luck", "mother", "home", "human", "win", "attempt"]
  const badVer = ["die","kill", "suck", "wake up", "destroy", "lie", "give up", "humiliate"]
  
    const tloader = new FontLoader()
    const fontB = tloader.parse(BOLDFont)
    const fontR = tloader.parse(REGFont)
    let mat = new THREE.MeshStandardMaterial({color:0xFFFFFF, map: new THREE.TextureLoader().load(glassUrl)})

    const textParamsBIG = {
      font: fontB,
      size: 3,
      height: 1,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 1,
      bevelSize: 0.03,
      bevelOffset: 0,
      bevelSegments: 5,
    }

    const textParamsLITTLE = {
        font: fontR,
        size: 1.5,
        height: 0,
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 1,
        bevelSize: 0.02,
        bevelOffset: 0,
        bevelSegments: 5,
    }

    const textParamsBROKEN = {
      font: fontR,
      size: 1.2,
      height: 0,
      curveSegments: 12,
      bevelEnabled: true,
      bevelThickness: 1,
      bevelSize: 0.02,
      bevelOffset: 0,
      bevelSegments: 5,
  }


    let title1 = "AB"
    let titleGeo1 = new TextGeometry(title1, textParamsBIG)
    let titleText1 = new THREE.Mesh(titleGeo1,mat)
    titleText1.position.set(-16, 20, 15)
    titleText1.rotation.set(0.1*Math.PI,0.1*Math.PI, -0.05*Math.PI)
    scene.add(titleText1)

    let title2 = "OUT"
    let titleGeo2 = new TextGeometry(title2, textParamsBIG)
    let titleText2 = new THREE.Mesh(titleGeo2,mat)
    titleText2.position.set(-4, 20, 7)
    titleText2.rotation.set(0.15*Math.PI,0, 0)
    scene.add(titleText2)

    let main1 = "Hello I grew up"
    let mainGeo1 = new TextGeometry(main1, textParamsLITTLE)
    let mainText1 = new THREE.Mesh(mainGeo1,mat)
    mainText1.position.set(-8, 12, 3)
    mainText1.rotation.set(0.08*Math.PI,0, -0.003*Math.PI)
    // mainText1.position.set(-18, 14, 13)
    // mainText1.rotation.set(0.1*Math.PI,0.12*Math.PI, -0.05*Math.PI)
    scene.add(mainText1)

    let main2 = "in Belarus"
    let mainGeo2 = new TextGeometry(main2, textParamsLITTLE)
    let mainText2 = new THREE.Mesh(mainGeo2,mat)
    mainText2.position.set(6.8, 11.8, 3)
    mainText2.rotation.set(0.08*Math.PI,-0.1*Math.PI, -0.005*Math.PI)
    scene.add(mainText2)

    let main3 = "I studied Pascal"
    let mainGeo3 = new TextGeometry(main3, textParamsLITTLE)
    let mainText3 = new THREE.Mesh(mainGeo3,mat)
    mainText3.position.set(-8, 9, 3)
    mainText3.rotation.set(0.08*Math.PI,0, -0.003*Math.PI)
    scene.add(mainText3)

    let main4 = "at school"
    let mainGeo4 = new TextGeometry(main4, textParamsLITTLE)
    let mainText4 = new THREE.Mesh(mainGeo4,mat)
    mainText4.position.set(7.7, 8.85, 3)
    mainText4.rotation.set(0.08*Math.PI,-0.1*Math.PI, -0.001*Math.PI)
    scene.add(mainText4)

    let main5 = "After that i"
    let mainGeo5 = new TextGeometry(main5, textParamsLITTLE)
    let mainText5 = new THREE.Mesh(mainGeo5,mat)
    mainText5.position.set(-16, 6, 3)
    mainText5.rotation.set(0.08*Math.PI,0.03*Math.PI, -0.005*Math.PI)
    scene.add(mainText5)

    let main6 = "realized that I"
    let mainGeo6 = new TextGeometry(main6, textParamsLITTLE)
    let mainText6 = new THREE.Mesh(mainGeo6,mat)
    mainText6.position.set(-5, 6, 3)
    mainText6.rotation.set(0.08*Math.PI,0,-0.003*Math.PI)
    scene.add(mainText6)

    let main7 = "want to be a"
    let mainGeo7 = new TextGeometry(main7, textParamsLITTLE)
    let mainText7 = new THREE.Mesh(mainGeo7,mat)
    mainText7.position.set(8.5, 6, 3)
    mainText7.rotation.set(0.08*Math.PI,-0.1*Math.PI,0.01*Math.PI)
    scene.add(mainText7)

    let main8 = "programmer"
    let mainGeo8 = new TextGeometry(main8, textParamsLITTLE)
    let mainText8 = new THREE.Mesh(mainGeo8,mat)
    mainText8.position.set(-16, 3, 3)
    mainText8.rotation.set(0.05*Math.PI,0.03*Math.PI,-0.01*Math.PI)
    scene.add(mainText8)

    let main9 = "Now I'm studying at"
    let mainGeo9 = new TextGeometry(main9, textParamsLITTLE)
    let mainText9 = new THREE.Mesh(mainGeo9,mat)
    mainText9.position.set(-16, 0, 3)
    mainText9.rotation.set(0.0*Math.PI,0.03*Math.PI,0.00*Math.PI)
    scene.add(mainText9)

    let main10 = "BSUIR and learning"
    let mainGeo10 = new TextGeometry(main10, textParamsLITTLE)
    let mainText10 = new THREE.Mesh(mainGeo10,mat)
    mainText10.position.set(3, 0, 3)
    mainText10.rotation.set(0.0*Math.PI,-0.05*Math.PI,0.00*Math.PI)
    scene.add(mainText10)

    let main11 = "web"
    let mainGeo11 = new TextGeometry(main11, textParamsBIG)
    let mainText11 = new THREE.Mesh(mainGeo11,mat)
    mainText11.position.set(-23, -6, 3)
    mainText11.rotation.set(0.0*Math.PI,0.03*Math.PI*Math.PI,0.00*Math.PI)
    scene.add(mainText11)

    let main12 = "development"
    let mainGeo12 = new TextGeometry(main12, textParamsBIG)
    let mainText12 = new THREE.Mesh(mainGeo12,mat)
    mainText12.position.set(-13, -6, 0)
    mainText12.rotation.set(0.0*Math.PI,-0.00*Math.PI*Math.PI,0.00*Math.PI)
    scene.add(mainText12)

    let brokenText1
    let brokenText2
    let brokenText3
    let brokenText4
    let brokenText5
    let brokenText6
    
          let broken1 = kindWords[0]
          let brokenGeo1 = new TextGeometry(broken1, textParamsBROKEN)
          brokenText1 = new THREE.Mesh(brokenGeo1,mat)
          brokenText1.position.set(-18, 14, 13)
          brokenText1.rotation.set(0.1*Math.PI,0.1*Math.PI,-0.02*Math.PI)
          scene.add(brokenText1)
    
          let broken2 = kindWords[5]
          let brokenGeo2 = new TextGeometry(broken2, textParamsBROKEN)
          brokenText2 = new THREE.Mesh(brokenGeo2,mat)
          brokenText2.position.set(-18.2, 12, 13)
          brokenText2.rotation.set(0.05*Math.PI,0.1*Math.PI,-0.06*Math.PI)
          scene.add(brokenText2)
    
          let broken3 = kindWords[7]
          let brokenGeo3 = new TextGeometry(broken3, textParamsBROKEN)
          brokenText3 = new THREE.Mesh(brokenGeo3,mat)
          brokenText3.position.set(-18, 10, 13)
          brokenText3.rotation.set(0.05*Math.PI,0.1*Math.PI,-0.02*Math.PI)
          scene.add(brokenText3)

          let broken4 = badVer[3]
          let brokenGeo4 = new TextGeometry(broken4, textParamsLITTLE)
          brokenText4 = new THREE.Mesh(brokenGeo4,mat)
          brokenText4.position.set(17, -5, 4.5)
          brokenText4.rotation.set(-0.05*Math.PI,-0.15*Math.PI,-0.02*Math.PI)
          scene.add(brokenText4)

          let broken5 = badVer[4]
          let brokenGeo5 = new TextGeometry(broken5, textParamsLITTLE)
          brokenText5 = new THREE.Mesh(brokenGeo5,mat)
          brokenText5.position.set(18, -7.5, 5)
          brokenText5.rotation.set(-0.05*Math.PI,-0.15*Math.PI,-0.02*Math.PI)
          scene.add(brokenText5)

          let broken6 = badVer[5]
          let brokenGeo6 = new TextGeometry(broken6, textParamsLITTLE)
          brokenText6 = new THREE.Mesh(brokenGeo6,mat)
          brokenText6.position.set(18.5, -9.5, 5.3)
          brokenText6.rotation.set(-0.05*Math.PI,-0.15*Math.PI,-0.02*Math.PI)
          scene.add(brokenText6)

    let desc1 = "18 y.o"
    let descGeo1 = new TextGeometry(desc1, textParamsLITTLE)
    let descText1 = new THREE.Mesh(descGeo1,mat)
    descText1.position.set(21, 3, 9.7)
    descText1.rotation.set(0.03*Math.PI,-0.15*Math.PI,-0.1*Math.PI)
    scene.add(descText1)

    let desc2 = "190"
    let descGeo2 = new TextGeometry(desc2, textParamsLITTLE)
    let descText2 = new THREE.Mesh(descGeo2,mat)
    descText2.position.set(24, 9, 10.8)
    descText2.rotation.set(0.03*Math.PI,-0.15*Math.PI,-0.01*Math.PI)
    scene.add(descText2)

    let desc3 = "BSUIR"
    let descGeo3 = new TextGeometry(desc3, textParamsLITTLE)
    let descText3 = new THREE.Mesh(descGeo3,mat)
    descText3.position.set(-21.7, 2.5, 14.7)
    descText3.rotation.set(0.03*Math.PI,0.15*Math.PI,0.11*Math.PI)
    scene.add(descText3)

    let desc4 = "volleyball"
    let descGeo4 = new TextGeometry(desc4, textParamsBROKEN)
    let descText4 = new THREE.Mesh(descGeo4,mat)
    descText4.position.set(-29, 7, 23)
    descText4.rotation.set(0.05*Math.PI,0.26*Math.PI,-0.04*Math.PI)
    scene.add(descText4)

    let desc5 = "FAR CRY"
    let descGeo5 = new TextGeometry(desc5, textParamsBROKEN)
    let descText5 = new THREE.Mesh(descGeo5,mat)
    descText5.position.set(-29, 5.3, 23)
    descText5.rotation.set(0.05*Math.PI,0.26*Math.PI,-0.04*Math.PI)
    scene.add(descText5)

    let desc6 = "CS2"
    let descGeo6 = new TextGeometry(desc6, textParamsBROKEN)
    let descText6 = new THREE.Mesh(descGeo6,mat)
    descText6.position.set(-28, 3.5, 22)
    descText6.rotation.set(0.05*Math.PI,0.26*Math.PI,-0.04*Math.PI)
    scene.add(descText6)

    let desc7 = "GORKI"
    let descGeo7 = new TextGeometry(desc7, textParamsBROKEN)
    let descText7 = new THREE.Mesh(descGeo7,mat)
    descText7.position.set(-33, -3, 27.5)
    descText7.rotation.set(-0.05*Math.PI,0.3*Math.PI,0.05*Math.PI)
    scene.add(descText7)

    let desc8 = "city"
    let descGeo8 = new TextGeometry(desc8, textParamsBROKEN)
    let descText8 = new THREE.Mesh(descGeo8,mat)
    descText8.position.set(-32, -5.5, 27.35)
    descText8.rotation.set(-0.05*Math.PI,0.3*Math.PI,0.05*Math.PI)
    scene.add(descText8)

    let desc9 = "EXP = 0 years"
    let descGeo9 = new TextGeometry(desc9, textParamsBROKEN)
    let descText9 = new THREE.Mesh(descGeo9,mat)
    descText9.position.set(-8, -15, 5)
    descText9.rotation.set(-0.07*Math.PI,0,0)
    scene.add(descText9)

    let desc10 = "~8 projects"
    let descGeo10 = new TextGeometry(desc10, textParamsBROKEN)
    let descText10 = new THREE.Mesh(descGeo10,mat)
    descText10.position.set(-8, -18.25, 5)
    descText10.rotation.set(-0.08*Math.PI,0,0)
    scene.add(descText10)

    let desc11 = "to help somebody"
    let descGeo11 = new TextGeometry(desc11, textParamsBROKEN)
    let descText11 = new THREE.Mesh(descGeo11,mat)
    descText11.position.set(-8.5, -20.25, 5)
    descText11.rotation.set(-0.09*Math.PI,0,0)
    scene.add(descText11)

    let desc12 = "training = 3 years"
    let descGeo12 = new TextGeometry(desc12, textParamsBROKEN)
    let descText12 = new THREE.Mesh(descGeo12,mat)
    descText12.position.set(-8.5, -23, 5)
    descText12.rotation.set(-0.09*Math.PI,0,0)
    scene.add(descText12)

    let desc13 = "VS CODE"
    let descGeo13 = new TextGeometry(desc13, textParamsBROKEN)
    let descText13 = new THREE.Mesh(descGeo13,mat)
    descText13.position.set(-28, -4, 19.4)
    descText13.rotation.set(-0.05*Math.PI,0.23*Math.PI,0.04*Math.PI)
    scene.add(descText13)

    let desc14 = "_myha_"
    let descGeo14 = new TextGeometry(desc14, textParamsBROKEN)
    let descText14 = new THREE.Mesh(descGeo14,mat)
    descText14.position.set(25, -16, 14.5)
    descText14.rotation.set(-0.1*Math.PI,-0.25*Math.PI,-0.1*Math.PI)
    scene.add(descText14)

    let desc15 = "my goal is to"
    let descGeo15 = new TextGeometry(desc15, textParamsBROKEN)
    let descText15 = new THREE.Mesh(descGeo15,mat)
    descText15.position.set(10, 23.25, 10.5)
    descText15.rotation.set(0.1*Math.PI,-0.1*Math.PI,0.0*Math.PI)
    scene.add(descText15)

    let desc16 = "create quality"
    let descGeo16 = new TextGeometry(desc16, textParamsBROKEN)
    let descText16 = new THREE.Mesh(descGeo16,mat)
    descText16.position.set(10, 21.5, 10)
    descText16.rotation.set(0.1*Math.PI,-0.1*Math.PI,0.0*Math.PI)
    scene.add(descText16)

    let desc17 = "websites in a"
    let descGeo17 = new TextGeometry(desc17, textParamsBROKEN)
    let descText17 = new THREE.Mesh(descGeo17,mat)
    descText17.position.set(9, 19.5, 10)
    descText17.rotation.set(0.1*Math.PI,-0.1*Math.PI,0.0*Math.PI)
    scene.add(descText17)

    let desc18 = "short period of"
    let descGeo18 = new TextGeometry(desc18, textParamsBROKEN)
    let descText18 = new THREE.Mesh(descGeo18,mat)
    descText18.position.set(9, 18, 9)
    descText18.rotation.set(0.1*Math.PI,-0.1*Math.PI,0.0*Math.PI)
    scene.add(descText18)

    let desc19 = "time"
    let descGeo19 = new TextGeometry(desc19, textParamsBROKEN)
    let descText19 = new THREE.Mesh(descGeo19,mat)
    descText19.position.set(9, 16, 8.6)
    descText19.rotation.set(0.1*Math.PI,-0.1*Math.PI,0.0*Math.PI)
    scene.add(descText19)
}

export default createText