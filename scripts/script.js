let data = localStorage.getItem('msgList')
let msgList = []

if (data !== "" && data !== null) {
    msgList = JSON.parse(data)
}

for (const msg of msgList) {
    createNewMsg(msg)
}

let existingData = localStorage.getItem('newInfo')
let existingObject = []

if (existingData !== "" && existingData !== null) {
    existingObject = JSON.parse(existingData)
}

function createNewMsg(obj) {
    let container = document.querySelector('.swiper-slide')

    let div = document.createElement('div')
    div.classList.add('item')
    let div2 = document.createElement('div')
    div2.classList.add('item-text')
    let p = document.createElement('p')
    p.innerHTML = obj.name
    let p2 = document.createElement('p')
    p2.innerHTML = obj.sum
    let svg = document.createElementNS('http://www.w3.org/2000/svg','svg')
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    svg.setAttribute('viewBox', '0 0 33 26')
    svg.classList.add('whiteSvg')
    let path = document.createElementNS('http://www.w3.org/2000/svg','path')
    path.setAttribute('d', 'M0.0856018 25.5V21.3333H32.6514V25.5H0.0856018ZM0.0856018 15.0833V10.9167H32.6514V15.0833H0.0856018ZM0.0856018 4.66667V0.5H32.6514V4.66667H0.0856018Z')

    container.appendChild(div)
    div.appendChild(div2)
    div2.appendChild(p)
    div2.appendChild(p2)
    div.appendChild(svg)
    svg.appendChild(path)
}

document.getElementById('add-msg-form').addEventListener('submit', function (event) {
    event.preventDefault()
    let consumptionName = document.getElementById('consumptionName').value
    let consumptionSum = document.getElementById('consumptionSum').value

    let msgObj = {
        name: consumptionName,
        sum: consumptionSum
    }

    createNewMsg(msgObj)
    msgList.push(msgObj)
    localStorage.setItem('msgList', JSON.stringify(msgList))
})

const whiteSvgs = document.querySelectorAll('.whiteSvg')

whiteSvgs.forEach(svg => {
    svg.addEventListener('click', function (event) {
        let container = event.target.parentNode

        let div = document.createElement('div')
        div.classList.add('menu')
        let div2 = document.createElement('div')
        div2.classList.add('menu-text')
        let p = document.createElement('p')
        p.innerHTML = '20.20.2002'
        let p2 = document.createElement('p')
        p2.innerHTML = 'Категория'
        svg.style.color = 'white'
        console.log(event.target)
        container.appendChild(div)
        div.appendChild(div2)
        div2.appendChild(p)
        div2.appendChild(p2)
    })
})

const blackSvgs = document.querySelectorAll('.blackSvg')

blackSvgs.forEach(svg => {
    svg.addEventListener('click', function (event) {
        
        let container = event.target.parentNode
        let item = container.parentNode
        item.removeChild(document.querySelector('.menu'))

        let img = document.createElement('img')
        img.classList.add('img')
        img.setAttribute('src', 'images/burger-menu-svgrepo-com 1.svg')
        
        item.appendChild(img)  
        
        event.target.parentNode.removeChild(event.target)
    })
})