if(typeof(Storage) === "undefined") {
    setInterval(() => document.body.innerHTML = '<div id="nostorage">please use a browser supporting local storage</div>'
    , 5)
}

var firstTime = localStorage.getItem('firstTime')

setInterval(() => {
    var firstTime = localStorage.getItem('firstTime')
}, 1)

if(firstTime === null) {
    localStorage.setItem('firstTime', true)
}

let moveMeshs = []

function makeButton(winLose) {
    switch(winLose) {
        case 'win':
            let goAgain = document.createElement('div')
            goAgain.setAttribute('id', 'goagain')
            goAgain.innerText = 'GO AGAIN!'
            goAgain.style.position = 'absolute'
            goAgain.style.top = '80%'
            goAgain.style.left = '45%'
            goAgain.style.fontFamily = "  'Koulen', cursive"
            goAgain.style.fontSize = '3rem'
            goAgain.style.transitionDuration = '100ms'
            goAgain.style.color = 'green'

                goAgain.addEventListener('mouseover', () => {
                    moveMeshs.forEach((cube) => {
                        if(cube.position.y === 0) {
                            this.moveCube = new TimelineMax()
                            this.moveCube.to(cube.position, .3, { y: (cube.position.y - 10) })
                        }
                    })
                })

                goAgain.addEventListener('click', () => {
                    window.location.replace(window.location)
                })

                document.body.append(goAgain)
                break
            case 'lose':
                let newLvl = document.createElement('div')
                newLvl.setAttribute('id', 'newlvl')
                newLvl.innerText = 'NEW LEVEL'
                newLvl.style.position = 'absolute'
                newLvl.style.top = '10%'
                newLvl.style.left = '45%'
                newLvl.style.fontFamily = "  'Koulen', cursive"
                newLvl.style.fontSize = '3rem'
                newLvl.style.transitionDuration = '100ms'
                newLvl.style.color = 'red'

                newLvl.addEventListener('mouseover', () => {
                    moveMeshs.forEach((cube) => {
                        if(cube.position.y === 0) {
                            this.moveCube = new TimelineMax()
                            this.moveCube.to(cube.position, .3, { y: (cube.position.y + 10) })
                        }
                    })
                })


                newLvl.addEventListener('click', () => {
                    window.location.replace(window.location)
                })
                document.body.append(newLvl)
                break
            case 'endlesshigh':
                let mainMenu = document.createElement('div')
                mainMenu.setAttribute('id', 'mainBtn')
                mainMenu.innerText = 'MAIN MENU'
                mainMenu.style.position = 'absolute'
                mainMenu.style.top = '45%'
                mainMenu.style.left = '10%'
                mainMenu.style.fontFamily = "  'Koulen', cursive"
                mainMenu.style.fontSize = '3rem'
                mainMenu.style.transitionDuration = '100ms'
                mainMenu.style.color = '#5D34CD'

                mainMenu.addEventListener('mouseover', () => {
                    moveMeshs.forEach((cube) => {
                        if(cube.position.y === 0) {
                            this.moveCube = new TimelineMax()
                            this.moveCube.to(cube.position, .3, { x: randomNum(-30, false) })
                        }
                    })
                })


                mainMenu.addEventListener('click', () => {
                    window.location.replace(window.location)
                })
                document.body.append(mainMenu)
                break
            case 'endlessnot':
                let mainMenu1 = document.createElement('div')
                mainMenu1.setAttribute('id', 'mainBtn')
                mainMenu1.innerText = 'MAIN MENU'
                mainMenu1.style.position = 'absolute'
                mainMenu1.style.top = '45%'
                mainMenu1.style.left = '80%'
                mainMenu1.style.fontFamily = "  'Koulen', cursive"
                mainMenu1.style.fontSize = '3rem'
                mainMenu1.style.transitionDuration = '100ms'
                mainMenu1.style.color = '#5D34CD'

                mainMenu1.addEventListener('mouseover', () => {
                    moveMeshs.forEach((cube) => {
                        if(cube.position.y === 0) {
                            this.moveCube = new TimelineMax()
                            this.moveCube.to(cube.position, .3, { x: randomNum(30, false) })
                        }
                    })
                })


                mainMenu1.addEventListener('click', () => {
                    window.location.replace(window.location)
                })
                document.body.append(mainMenu1)
                break
        }
    }

function randomNum(limit, negativeOrNot) {
    let ran = [Math.floor(Math.random() * limit), Math.floor(Math.random() * -limit)]
    if(negativeOrNot === true) return ran[Math.floor(Math.random() * ran.length)]
    if(negativeOrNot === false) return Math.floor(Math.random() * limit)
}

function genCubes() {
    if(mode.normal === true) {
        for(let i = 0; i < genCubesNum; i++) {
            let newGeo = new THREE.BoxGeometry(2, 2, 2)
            let newMat = new THREE.MeshLambertMaterial({ color: "#609" })
            let newMesh = new THREE.Mesh(newGeo, newMat)
            newMesh.position.x = randomNum(40, true)
            newMesh.position.y = randomNum(40, true)
            newMesh.isCounted = false
            cubeArr.push(newMesh)
            scene.add(newMesh)
        }
    } else if(mode.endless === true) {
        for(let i = 0; i < 5; i++) {
            let newGeo = new THREE.BoxGeometry(2, 2, 2)
            let newMat = new THREE.MeshLambertMaterial({ color: "#609" })
            let newMesh = new THREE.Mesh(newGeo, newMat)
            newMesh.position.x = randomNum(40, true)
            newMesh.position.y = randomNum(40, true)
            newMesh.isCounted = false
            cubeArr.push(newMesh)
            scene.add(newMesh)
        }
    }
}