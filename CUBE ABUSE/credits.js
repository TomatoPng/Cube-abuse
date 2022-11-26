var credits = localStorage.getItem('credits')

setInterval(() => {
    credits = localStorage.getItem('credits')
}, 1)

setInterval(() => {
    if(firstTime === 'true') {
        localStorage.setItem('credits', 0)
        localStorage.setItem('firstTime', false)
    }
}, 5);

const credDiv = document.getElementById('credits')

function addCredits(amount) {
    localStorage.setItem('credits', (parseInt(credits) + parseInt(amount)))

    credDiv.style.transform = 'scale(1)'
    credDiv.innerText = '+ ' + amount.toString() + ' CREDITS'
    setTimeout(() => {
        credDiv.style.transform = 'scale(0)'
    }, 2000)
}