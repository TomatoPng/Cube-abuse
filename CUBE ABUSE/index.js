let genCubesNum = Math.floor(Math.random() * 100)

var scene = new THREE.Scene()
var cam = new THREE.PerspectiveCamera(
    75,
    window.innerWidth/window.innerHeight,
    0.1,
    1000
)

cam.position.z = -20
var renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setClearColor("#e5e5e5")
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight)
    cam.aspect = window.innerWidth / window.innerHeight
    cam.updateProjectionMatrix()
})

var raycaster = new THREE.Raycaster()
var mouse = new THREE.Vector2()
var geometry = new THREE.BoxGeometry(2, 2, 2)
var material = new THREE.MeshLambertMaterial({ color: "#900" })
var mesh = new THREE.Mesh(geometry, material)

let cubeArr = []
cubeArr.push(mesh)

scene.add(mesh)

var light = new THREE.PointLight(0xFFFFFF, 1, 500)
light.position.set(10, 0, 25)
scene.add(light)

var render = () => {
    requestAnimationFrame(render)
    renderer.render(scene, cam)
}

let dohit = false
let clickCount = 0
let endlessRndGen = 0
let endlessRound = 0
let endlessGenAmm = 5
function onMouseClick(event) {
    event.preventDefault()
    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1
    mouse.y = -( event.clientY / window.innerHeight ) * 2 + 1
    raycaster.setFromCamera(mouse, cam)
    var intersects = raycaster.intersectObjects(scene.children, true)
    for(var i = 0; i < intersects.length; i++) {
        if(intersects[i].object !== cubeArr[0] && intersects[i].object !== cubeArr[cubeArr.length] && started === true) {
            this.tl = new TimelineMax()
            this.tl.to(intersects[i].object.position, .5, { z: -1000 })
            clickCount++
        }
    }

    // reseting clickcount (endless mode)
    if(mode.endless === true) {
        if(clickCount === endlessGenAmm) {
            clickCount = 0
            endlessRound++
            addCredits(endlessRound * 2)
            endlessRndGen++
            if(endlessRndGen === 3) {
                endlessGenAmm += 2
                endlessRndGen = 0
            }
            let timerArgs = timer.innerText.split(':')
            timer.innerText = timerArgs[0] + ':' + (parseInt(timerArgs[1]) + 8).toString()
            for(let i = 0; i < endlessGenAmm; i++) {
                let newGeo = new THREE.BoxGeometry(2, 2, 2)
                let newMat = new THREE.MeshLambertMaterial({ color: "#609" })
                let newMesh = new THREE.Mesh(newGeo, newMat)
                newMesh.position.x = randomNum(30, true)
                newMesh.position.y = randomNum(30, true)
                newMesh.isCounted = false
                cubeArr.push(newMesh)
                scene.add(newMesh)
            }
        }
    }
}

function onMouseMove(event) {
    event.preventDefault()
    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1
    mouse.y = -( event.clientY / window.innerHeight ) * 2 + 1
    raycaster.setFromCamera(mouse, cam)
    var intersects = raycaster.intersectObjects(scene.children, true)
    if(intersects.length === 0) {
        cubeArr.forEach((cube) => {
            this.tl = new TimelineMax()
            this.tl.to(cube.scale, 0.5, { y: 1 })
            this.tl1 = new TimelineMax()
            this.tl1.to(cube.scale, 0.5, { x: 1 })
            this.tl2 = new TimelineMax()
            this.tl2.to(cube.scale, .5, { z: 1 })
        })
    }

    for(var i = 0; i < intersects.length; i++) {
        if(intersects[i].object !== cubeArr[0] && intersects[i].object !== cubeArr[cubeArr.length] && started === true) {
            this.tl = new TimelineMax()
            this.tl.to(intersects[i].object.scale, .5, { y: 2 })
            this.tl1 = new TimelineMax()
            this.tl1.to(intersects[i].object.scale, .5, { x: 2 })
            this.tl2 = new TimelineMax()
            this.tl2.to(intersects[i].object.scale, .5, { z: 0.5 })
        }
    }
}

function mouseMove(event) {
    event.preventDefault()
    const mouse = {
            x: 0,
            y: 0
    }
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1
    cubeArr.forEach((cube) => {
            // y axis rotation
        if(event.clientY < 450) {
            mesh.rotation.x = -(mouse.y) - 25
        }
        if(event.clientY > 450) {
            mesh.rotation.x = -mouse.y - 25
        }
            // x axis rotation
        if(event.clientX < 280) {
            mesh.rotation.y = (mouse.x) - 25
        }
        if(event.clientX > 280) {
            mesh.rotation.y = (mouse.x) - 25
        }
    })
}

window.addEventListener('mousemove', mouseMove)
window.addEventListener('click', onMouseClick)
window.addEventListener('mousemove', onMouseMove)
function moveCam(direction) {
    switch(direction) {
        case 'up':
            this.camup = new TimelineMax()
            this.camup.to(cam.position, .2, { y: (cam.position.y + 5) })
            break
        case 'left':
            this.camleft = new TimelineMax()
            this.camleft.to(cam.position, .2, { x: (cam.position.x - 5) })
            break
        case 'down':
            this.camdown = new TimelineMax()
            this.camdown.to(cam.position, .2, { y: (cam.position.y - 5) })
            break
        case 'right':
            this.camright = new TimelineMax()
            this.camright.to(cam.position, .2, { x: (cam.position.x + 5) })
            break
    }
} 

window.addEventListener('keydown', (e) => {
    switch(e.key) {
        case 'w':
            moveCam('up')
            break
        case 'a':
            moveCam('left')
            break
        case 's':
            moveCam('down')
            break
        case 'd':
            moveCam('right')
            break
    }
})

render()