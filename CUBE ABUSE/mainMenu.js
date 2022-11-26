var mode = {
    normal: false,
    endless: false
}

var shopOpen = false
var achievementsOpen = false

var started = false
const playNorm = document.getElementById('playNorm')
const playEnd = document.getElementById('playEnd')
const shop = document.getElementById('shop')
const achievements = document.getElementById('achievements')
const quit = document.getElementById('quit')
const menu = document.getElementById('mainMenu')
const title = document.getElementById('title')
const highscore = document.getElementById('highscore')

const shopBack = document.getElementById('shopBack')

const shopUi = document.getElementById('shopUI')
const achieveUi = document.getElementById('achieveUI')

setInterval(() => {
    highscore.innerText = 'HIGHSCORE: ' + localStorage.endlessHighScore 
}, 100);

let circleMeshs = []
let hasBeenDone = false
setTimeout(() => {
    if(hasBeenDone === false) {
        for(let i = 0; i < 220; i++) {
            var geometry = new THREE.BoxGeometry(1, 1, 1)
            var material = new THREE.MeshLambertMaterial({ color: "#999" })
            var circMesh = new THREE.Mesh(geometry, material)
        
            circMesh.position.z = -30
            circMesh.position.x = -4
            circMesh.position.y = 0
        
            circleMeshs.push(circMesh)
            scene.add(circMesh)
        
        }
        hasBeenDone = true
    }
}, 1)

var t = Math.random();
var e = Math.random()
setInterval(() => {
    if(started === false) {
        circleMeshs.forEach((cube) => {
        t += 0.09;        
        let radius = 10  

        cube.position.x = radius*Math.cos(t) + 0;
        cube.position.y = radius*Math.sin(t) + 0;
        })

        e += 100
        let lightRadius = 20

        light.position.x = lightRadius*Math.cos(e) + 0;
        light.position.y = lightRadius*Math.sin(e) + 0;

    }

    if(started === true) light.position.set(10, 0 ,25)
}, 20)

playNorm.addEventListener('click', () => {
    mode.normal = true
    started = true
    playNorm.style.transform = 'scale(0)'
    shop.style.transform = 'scale(0)'
    quit.style.transform = 'scale(0)'
    title.style.transform = 'scale(0)'
    playEnd.style.transform = 'scale(0)'
    highscore.style.transform = 'scale(0)'
    achievements.style.transform = 'scale(0)'

    circleMeshs.forEach((cube) => {
        scene.remove(cube)
    })

    genCubes()

    this.camTrans = new TimelineMax()
    this.camTrans.to(cam.position, .5, { z: 40 })
})

playEnd.addEventListener('click', () => {
    mode.endless = true
    started = true
    playNorm.style.transform = 'scale(0)'
    shop.style.transform = 'scale(0)'
    quit.style.transform = 'scale(0)'
    title.style.transform = 'scale(0)'
    playEnd.style.transform = 'scale(0)'
    highscore.style.transform = 'scale(0)'
    achievements.style.transform = 'scale(0)'

    circleMeshs.forEach((cube) => {
        scene.remove(cube)
    })

    genCubes()

    this.camTrans = new TimelineMax()
    this.camTrans.to(cam.position, .5, { z: 40 })
})

shop.addEventListener('click', () => {
    playNorm.style.transform = 'scale(0)'
    shop.style.transform = 'scale(0)'
    quit.style.transform = 'scale(0)'
    title.style.transform = 'scale(0)'
    playEnd.style.transform = 'scale(0)'
    highscore.style.transform = 'scale(0)'
    achievements.style.transform = 'scale(0)'

    shopUi.style.transform = 'scale(1)'

    shopBack.style.transform = 'scale(1)'

    shopOpen = true

    this.camTrans = new TimelineMax()
    this.camTrans.to(cam.position, .5, { z: -40 })
})

achievements.addEventListener('click', () => {
    playNorm.style.transform = 'scale(0)'
    shop.style.transform = 'scale(0)'
    quit.style.transform = 'scale(0)'
    title.style.transform = 'scale(0)'
    playEnd.style.transform = 'scale(0)'
    highscore.style.transform = 'scale(0)'
    achievements.style.transform = 'scale(0)'

    shopBack.style.transform = 'scale(1)'

    achievementsOpen = true

    this.camTrans = new TimelineMax()
    this.camTrans.to(cam.position, .5, { z: -40 })

    achieveUi.style.transform = 'scale(1)'
})

quit.addEventListener('click', () => window.close())