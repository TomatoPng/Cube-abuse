let hasDone = false

function win() {
    if(hasDone === false) addCredits(cubeArr.length)

    timer.innerText = 'YOU WIN!'
    timer.style.color = 'green'
    timer.style.top = '45%'
    timer.style.left = '45%'
    light.color.setHex(0x37FF00)

    let winCol = new THREE.Color(0x37FF00)

    let winmeshs = []
    for(let i = 0; i < 50; i++) {
        let newGeo = new THREE.BoxGeometry(2, 2, 2)
        let newMat = new THREE.MeshLambertMaterial({ color: 0x37FF00 })
        let newMesh = new THREE.Mesh(newGeo, newMat)

        newMesh.position.x = randomNum(100, true)
        newMesh.position.y = 100
        newMesh.position.z = -20

        winmeshs.push(newMesh)
        moveMeshs.push(newMesh)

        scene.add(newMesh)
    }

    this.wincam = new TimelineMax()
    this.wincam.to(cam.position, 1.4, { z:0, x:0, y:0 })

    scene.remove(mesh)

    for(let i = 0; i < winmeshs.length; i++) {
        this.wincubes = new TimelineMax()
        this.wincubes.to(winmeshs[i].position, Math.random(), { y:0 })
    }

    isDone = true
    hasDone = true
}

function lose() {
    if(hasDone === false) addCredits(-cubeArr.length)

    timer.innerText = 'YOU LOSE'
    timer.style.color = 'red'
    timer.style.top = '45%'
    timer.style.left = '45%'
    light.color.setHex(0xC70101)

    let loseCol = new THREE.Color(0xC70101)

    let losemeshs = []
    for(let i = 0; i < 50; i++) {
        let newGeo = new THREE.BoxGeometry(2, 2, 2)
        let newMat = new THREE.MeshLambertMaterial({ color: 0xC70101 })
        let newMesh = new THREE.Mesh(newGeo, newMat)

        newMesh.position.x = randomNum(100, true)
        newMesh.position.y = -100
        newMesh.position.z = -20

        losemeshs.push(newMesh)
        moveMeshs.push(newMesh)

        scene.add(newMesh)
    }

    this.losecam = new TimelineMax()
    this.losecam.to(cam.position, 1.4, { z:0, x:0, y:0 })

    scene.remove(mesh)

    for(let i = 0; i < losemeshs.length; i++) {
        this.losecubes = new TimelineMax()
        this.losecubes.to(losemeshs[i].position, Math.random(), { y:0 })
    }
    isDone = true
    hasDone = true
}

function endlessEnd() {
    // determine high score
    if(localStorage.endlessHighScore === 'undefined') {
        localStorage.setItem('endlessHighScore', endlessRound)
    }
    let lastScore = localStorage.getItem('endlessHighScore')
    if(endlessRound > lastScore) localStorage.setItem('endlessHighScore', endlessRound)

    if(endlessRound >= lastScore) {
        setInterval(() => {
            timer.innerText = 'NEW HIGH SCORE - ' + endlessRound.toString()
        }, 5)
    } else if(endlessRound < lastScore) {
        setInterval(() => {
            timer.innerText = 'YOU MADE IT TO ROUND - ' + endlessRound.toString()
        }, 5);
    }
    timer.style.color = '#5D34CD'
    timer.style.top = '45%'
    timer.style.left = '40%'
    light.color.setHex(0x3F00E7)

    let endCol = new THREE.Color(0x3F00E7)

    let endmeshs = []
    for(let i = 0; i < 20; i++) {
        let newGeo = new THREE.BoxGeometry(2, 2, 2)
        let newMat = new THREE.MeshLambertMaterial({ color: 0x3F00E7 })
        let newMesh = new THREE.Mesh(newGeo, newMat)

        if(endlessRound >= lastScore) {
            newMesh.position.x = 100
        } else if(endlessRound < lastScore) {
            newMesh.position.x = -100
        }
        newMesh.position.y = randomNum(100, true)
        newMesh.position.z = -20

        endmeshs.push(newMesh)
        moveMeshs.push(newMesh)

        scene.add(newMesh)
    }

    this.endcam = new TimelineMax()
    this.endcam.to(cam.position, 1.4, { z:0, x:0, y:0 })

    scene.remove(mesh)

    if(endlessRound >= lastScore && hasDone === false) {
        makeButton('endlesshigh')

        addCredits(endlessRound * 5)
    } else if(endlessRound < lastScore && hasDone === false) {
        makeButton('endlessnot')

        addCredits(endlessRound * -2)
    }

    for(let i = 0; i < endmeshs.length; i++) {
        this.losecubes = new TimelineMax()
        this.losecubes.to(endmeshs[i].position, Math.random() * 1.3, { x:randomNum(8, true), y:0 })
    }
    isDone = true
    hasDone = true

    document.getElementById('highscore').innerText = 'HIGHSCORE: ' + localStorage.endlessHighScore
}