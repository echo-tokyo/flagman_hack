let data = localStorage.getItem('msgList')
let msgList = []

if (data !== "" && data !== null) {
    msgList = JSON.parse(data)
}

for (const msg of msgList) {
    createNewMsg(msg)
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
    path.style.pointerEvents = 'none'
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
    let category = document.getElementById('category').value

    let msgObj = {
        name: consumptionName,
        sum: consumptionSum,
        category: category
    }

    createNewMsg(msgObj)
    msgList.push(msgObj)
    localStorage.setItem('msgList', JSON.stringify(msgList))
    window.location.reload()
})

let allSvgs = document.querySelectorAll('.whiteSvg')
allSvgs.forEach(svg => {
    svg.addEventListener('click', function (event) {
        if(event.target.classList.contains('whiteSvg')){
            let container = event.target.parentNode
            let div = document.createElement('div')
            div.classList.add('menu')
            let div2 = document.createElement('div')
            div2.classList.add('menu-text')
            let p = document.createElement('p')
            p.innerHTML = '20.20.2002'
            let p2 = document.createElement('p')
            p2.innerHTML = msgList[0].category
            let svg = event.target
            svg.classList.add('blackSvg')
            svg.classList.remove('whiteSvg')
            
            container.appendChild(div)
            div.appendChild(div2)
            div2.appendChild(p)
            div2.appendChild(p2)
            div.appendChild(svg)
        } else if(event.target.classList.contains('blackSvg')){
            let menu = event.target.parentNode
            let container = menu.parentNode
            menu.parentNode.removeChild(menu)

            let svg = event.target
            svg.classList.add('whiteSvg')
            svg.classList.remove('blackSvg')

            container.appendChild(svg)
        }
    })
})

document.getElementById('clear').addEventListener('click', (event) => {
    event.preventDefault
    localStorage.clear()
    window.location.reload()
})