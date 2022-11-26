var timer = document.getElementById('timer')
// timer.innerText = randomNum(4, false).toString() + ':' + randomNum(5, false).toString() + randomNum(9, false).toString()

// check timer
let isDone
setInterval(() => {
    if(timer.innerText === '0:00') timer.innerText = randomNum(4, false).toString() + ':' + randomNum(5, false).toString() + randomNum(9, false).toString()
}, 1)

// decrease timer
if(timer.innerText !== '-1:58') {
    setInterval(() => {
    
        let args = timer.innerText.split(':')
        
        if(args[1] === '-1') {
            args[0] = (parseInt(args[0]) - 1).toString()
            args[1] = '59'
        }
        if(timer.innerText !== '-1:58') timer.innerText = args[0] + ':' + (parseInt(args[1]) - 1).toString()
        if(timer.innerText === '-1:58') {
            isDone = true
            args[1] = ''
        }
    }, 500)
}

// check for game is done and won/lost
let counter = 0
let seperateCounter = 0
let seperateCounter1 = 0
setInterval(() => {
    if(mode.normal === true) {
        cubeArr.forEach((cube) => {
            if(cube.position.z === -1000 && cube.isCounted === false) {
                counter++
                seperateCounter++
                seperateCounter1++
                cube.isCounted = true
            }
        })

        if(counter === genCubesNum && mode.normal === true) {
            let winTime = setTimeout(win, 100)
            setInterval(() => {
                clearTimeout(winTime)
            }, 101)
        }

        if(seperateCounter === genCubesNum) {
            makeButton('win')
            seperateCounter++
        }

        if(counter !== genCubesNum && isDone === true && mode.normal === true) {
            let loseTime = setTimeout(lose, 100)
            setInterval(() => {
                clearTimeout(loseTime)
            }, 101)
        }

        if(seperateCounter1 !== genCubesNum && isDone === true) {
            makeButton('lose')
            seperateCounter1++
        }
    } else if(mode.endless === true) {
        cubeArr.forEach((cube) => {
            if(cube.position.z === -1000 && cube.isCounted === false && isDone === false) {
                counter++
                seperateCounter++
                cube.isCounted = true
            }
        })

        if(isDone === true) {
            let endTime = setTimeout(endlessEnd, 100)
            setInterval(() => {
                clearTimeout(endTime)
            }, 101)
        }
    }
}, 100)

let spinSpeed = 0
setInterval(() => {
    if(timer.innerText === '1:45') spinSpeed = 0.01
    if(timer.innerText === '1:15') spinSpeed = 0.03
    if(timer.innerText === '1:0') spinSpeed = 0.04
    if(timer.innerText === '0:40') spinSpeed = 0.05
    if(timer.innerText === '0:44') spinSpeed = 0.06
    if(timer.innerText === '0:30') spinSpeed = 0.07
    if(timer.innerText === '0:20') spinSpeed = 0.1
    if(timer.innerText === '0:15') spinSpeed = 0.5
    if(timer.innerText === '0:5') spinSpeed = 1
}, 250)

setInterval(() => {
    spinSpeed += 0.0005
}, 500);

setInterval(() => {
    this.spin = new TimelineMax()
    this.spin.to(mesh.rotation, 0.1, { z: (mesh.rotation.z + spinSpeed) })
}, 5)

let negposrand = [-(Math.random()), Math.random()]
setInterval(() => {
    if(timer.innerText === '0:5') {
        let thisInterval = setInterval(() => {
            if(isDone === true) clearInterval(thisInterval)
            if(parseInt(timer.innerText.split(':')[1]) > 5) clearInterval(thisInterval)
            this.camShake = new TimelineMax()
            this.camShake.to(cam.position, 0.1, { x: (cam.position.x + negposrand[Math.floor(Math.random() * negposrand.length)]), y: (cam.position.y + negposrand[Math.floor(Math.random() * negposrand.length)]) })
            this.camShake.to(cam.position, 0.2, { x: (cam.position.x - negposrand[Math.floor(Math.random() * negposrand.length)]), y: (cam.position.y - negposrand[Math.floor(Math.random() * negposrand.length)]) })
        }, 200)
        TweenLite.to(light.color, 3.5, {
            r: 1,
            g: 0,
            b: 0
        })
    } else if(parseInt(timer.innerText.split(':')[1]) > 5) {
        TweenLite.to(light.color, 0.5, {
            r: 1,
            g: 1,
            b: 1
        })
    }
}, 499)

let timerArgs = timer.innerText.split(':')

let dontdo = false

setInterval(() => { if(started === false && dontdo === false) timer.innerText = '' }, 5)

// set time
setInterval(() => {
    if(started === true && dontdo === false && mode.normal === true) {
        if(20 > cubeArr.length) {
            timer.innerText = '0:20'
        } else if(40 > cubeArr.length) {
            timer.innerText = '0:40'
        } else if(60 > cubeArr.length) {
            timer.innerText = '0:45'
        } else if(80 > cubeArr.length) {
            timer.innerText = '1:15'
        } else if(100 > cubeArr.length) {
            timer.innerText = '1:45'
        }
        dontdo = true
    } else if(started === true && dontdo === false && mode.endless === true) {
        timer.innerText = '0:10'
        dontdo = true
    }
}, 5)