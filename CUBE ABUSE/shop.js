class ShopItem {
    constructor(displayMesh, meshFunc, name, price, pos) {
        this.displayMesh = displayMesh
        this.name = name
        this.price = price

        if(meshFunc !== undefined && typeof meshFunc === 'function') {
            meshFunc()
        } 
    }

    make() {
        itemNum++
        this.elm = document.createElement('div')
        this.elm.setAttribute('id', 'shopItem,' + itemNum.toString())

        this.elm.setAttribute('width', '180px')
        this.elm.setAttribute('height', '240px')

        this.elm.style.backgroundColor = 'black'
        this.elm.style.height = '240px'
        this.elm.style.width = '180px'

        this.elm.style.fontFamily = "   'Koulen', cursive"
        this.elm.style.color = 'grey'

        this.itemTitle = document.createElement('span')
        this.itemTitle.setAttribute('id', 'itemTitle,' + itemNum.toString())
        this.itemTitle.innerText = this.name
        this.itemTitle.style.position = 'relative'
        this.itemTitle.style.fontSize = '1.25rem'
        this.itemTitle.style.left = '45%'
        this.itemTitle.style.top = '5%'

        this.buyBtn = document.createElement('span')
        this.buyBtn.setAttribute('id', 'buy,' + itemNum.toString())
        this.buyBtn.innerText = 'BUY'
        this.buyBtn.style.position = 'relative'
        this.buyBtn.style.left = '35%'
        this.buyBtn.style.top = '75%'

        this.priceBtn = document.createElement('span')
        this.priceBtn.setAttribute('id', 'price' + itemNum.toString())
        this.priceBtn.innerText = this.price.toString() + ' credits'
        this.priceBtn.style.position = 'relative'
        this.priceBtn.style.top = '80%'
        this.priceBtn.style.left = '0%'

        this.elm.appendChild(this.itemTitle)
        this.elm.appendChild(this.buyBtn)
        this.elm.appendChild(this.priceBtn)
        document.body.append(this.elm)
    }

}

const back = document.getElementById('shopBack')

back.addEventListener('click', () => {
    playNorm.style.transform = 'scale(1)'
    shop.style.transform = 'scale(1)'
    quit.style.transform = 'scale(1)'
    title.style.transform = 'scale(1)'
    playEnd.style.transform = 'scale(1)'
    highscore.style.transform = 'scale(1)'
    achievements.style.transform = 'scale(1)'

    shopUi.style.transform = 'scale(0)'

    back.style.transform = 'scale(0)'

    this.camTrans = new TimelineMax()
    this.camTrans.to(cam.position, .5, { z: -20 })
})

var itemNum = 0